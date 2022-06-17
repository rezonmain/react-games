/* 	TODO: 
[ ]. Merge animation,
[ ]. New cell animation,
[ ]. INPUT BUFFER!!! */

// FIXME: animation never gets set to false

import { useState, useReducer, useRef } from 'react';
import { useKey } from 'react-use';
import { useSwipeable } from 'react-swipeable';
import Tile from './Tile';
import { gameReducer, newGame } from '../lib/game';

export default function Board() {
	const [boardSize, setBoardSize] = useState(4);
	const [game, dispatch] = useReducer(gameReducer, newGame(boardSize));
	const buffer = useRef([]);

	function handleInput(key) {
		/* Always return a direction regardless if 
    string contains 'Arrow' */
		const input = key.split('Arrow').pop();
		const inputs = ['Up', 'Down', 'Left', 'Right'];
		if (inputs.includes(input)) {
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

	function onAnimationEnd() {}

	const tileElements = game.tiles.map((rows) =>
		rows.map((tile) => <Tile key={tile.id} cell={tile.cell.element} />)
	);

	const boardStyle = {
		gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
	};

	console.log('I rendered!');

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
