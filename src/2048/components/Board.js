/* 	TODO: 
[ ]. Merge animation,
[ ]. New cell animation,
[x]. INPUT BUFFER!!!
[ ]. MAKE ANIMATIONS ASYNCHRONOUS*/

// FIXME: animation never gets set to false

import { useState, useRef, useEffect } from 'react';
import { useKey } from 'react-use';
import { useSwipeable } from 'react-swipeable';
import { newTiles, displayTileElements, updateCells } from '../lib/tiles';
import { matrixFromTiles, handleShift } from '../lib/matrix';
import { getAnimatedCells } from '../lib/animate';

export default function Board() {
	const [boardSize, setBoardSize] = useState(4);
	const [tiles, setTiles] = useState(() => newTiles(boardSize));
	const matrixRef = useRef(matrixFromTiles(tiles));
	const animation = useRef(false);
	const buffer = useRef([]);

	// Dynamically adjust grid according to board size
	const boardStyle = {
		gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
	};

	const handleKeyPress = ({ key }) => {
		/* FIXME: input buffer issue, this is a temporary measure,
    it disables input while animation is running */
		if (animation.current) {
			return;
		}
		const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (keys.includes(key)) {
			const input = key.split('Arrow').pop();
			buffer.current.push(input);
		}
		if (!animation.current) {
			animation.current = true;
			moveCells();
		}
	};

	const moveCells = () => {
		const dir = buffer.current[0];
		matrixRef.current = handleShift(matrixRef.current, dir);
		setTiles((prev) => getAnimatedCells(prev, dir, animationDone));
		buffer.current.shift();
	};

	const animationDone = () => {
		animation.current = false;
		if (buffer.current.length) {
			moveCells();
		} else {
			setTiles((prev) => updateCells(prev, matrixRef.current));
		}
	};

	// Arrow key controls
	useKey([], handleKeyPress);

	// Swipe controls
	const handlers = useSwipeable({
		onSwiped: (e) => {
			moveCells(e.dir);
		},
		preventScrollOnSwipe: true,
	});

	return (
		<article>
			<header className='_2048-header'>
				<p>Score:</p>
			</header>
			<div {...handlers} style={boardStyle} className='_2048-board-container'>
				{displayTileElements(tiles)}
			</div>
		</article>
	);
}
