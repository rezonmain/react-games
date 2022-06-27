/* 	TODO: 
[ ]. Merge animation,
[ ]. New cell animation,
[ ]. INPUT BUFFER!!! */

import { useState, useReducer, useEffect } from 'react';
import { useKey } from 'react-use';
import { useSwipeable } from 'react-swipeable';
import { gameReducer, newGame } from '../lib/game';
import Tile from './Tile';

export default function Board() {
	const [boardSize, setBoardSize] = useState(4);
	const [game, dispatch] = useReducer(gameReducer, newGame(boardSize));

	useEffect(() => {}, []);

	function handleInput(key) {
		/* Always returns a direction regardless if 
    string contains 'Arrow' */
		const input = key.split('Arrow').pop();
		const inputs = ['Up', 'Down', 'Left', 'Right'];
		if (inputs.includes(input)) {
			dispatch({ type: 'pushBuffer', input });
			dispatch({ type: 'updateMatrix' });
			dispatch({ type: 'animate', handler: onAnimationEnd });
			dispatch({ type: 'shiftBuffer' });
		}
	}

	function onAnimationEnd() {
		dispatch({ type: 'updateTiles' });
	}

	// Arrow key controls
	useKey([], (e) => {
		e.preventDefault();

		handleInput(e.key);
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
