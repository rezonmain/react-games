/* 	TODO: 
[ ]. Merge animation,
[ ]. New cell animation,
[ ]. INPUT BUFFER!!! */

// FIXME: animation never gets set to false

import { useState, useReducer, useRef, useEffect } from 'react';
import { useKey } from 'react-use';
import { useSwipeable } from 'react-swipeable';
import Tile from './Tile';
import { gameReducer, newGame } from '../lib/game';
import { getAnimatedTiles } from '../lib/animate';
import { getShiftedMatrix } from '../lib/matrix';

export default function Board() {
	const [boardSize, setBoardSize] = useState(4);
	const [game, dispatch] = useReducer(gameReducer, newGame(boardSize));
	const queue = useRef({ matrix: [], tiles: [] });

	function handleInput(key) {
		/* Always return a direction regardless if 
    string contains 'Arrow' */
		const input = key.split('Arrow').pop();
		const inputs = ['Up', 'Down', 'Left', 'Right'];
		if (inputs.includes(input)) {
			queue.current.matrix.push(getShiftedMatrix(game.matrix, input));
			queue.current.tiles.push(
				getAnimatedTiles(game.tiles, input, onAnimationEnd)
			);
			if (!game.animation) {
				dispatch({ type: 'setAnimation', payload: true });
				dispatch({ type: 'animate', payload: queue.current.tiles[0] });
				queue.current.tiles.shift();
			}
		}
	}

	function onAnimationEnd() {
		dispatch({ type: 'updateTiles', matrix: queue.current.matrix[0] });
		queue.current.matrix.shift();
		if (queue.current.tiles.length) {
			dispatch({ type: 'animate', payload: queue.current.tiles[0] });
		} else {
			dispatch({ type: 'setAnimation', payload: false });
		}
	}

	// Arrow key controls
	useKey([], ({ key }) => {
		handleInput(key);
	});

	// Swipe controls
	const handlers = useSwipeable({
		onSwiped: (e) => {
			handleInput(e.dir);
		},
		preventScrollOnSwipe: true,
	});

	const tileElements = game.tiles.map((rows) =>
		rows.map((tile) => <Tile key={tile.id} cell={tile.cell.element} />)
	);

	const boardStyle = {
		gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
	};

	return (
		<article>
			<header className='_2048-header'>
				<p>Score:</p>
			</header>
			<div {...handlers} style={boardStyle} className='_2048-board-container'>
				{tileElements}
			</div>
		</article>
	);
}
