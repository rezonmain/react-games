import { useState, useRef, useEffect } from 'react';
import { useKey } from 'react-use';
import { newTiles, displayTileElements, updateCells } from '../lib/tiles';
import { newMatrix, testLose, handleShift } from '../lib/matrix';
import { useSwipeable } from 'react-swipeable';

export default function Board(props) {
	// TODO: VERY IMPORTANT ANIMATIONS ANIMATIONS ANIMATIONS!!!
	const [boardSize, setBoardSize] = useState(4);
	const [tiles, setTiles] = useState(() => newTiles(boardSize));
	const matrixRef = useRef(newMatrix(tiles));

	// Dynamically adjust grid according to board size
	const boardStyle = {
		gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
	};

	const handleKeyPress = ({ key }) => {
		const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (keys.includes(key)) {
			updateBoard(key.split('Arrow').pop());
		}
	};

	// Swipe controls
	const handlers = useSwipeable({
		onSwiped: (e) => {
			updateBoard(e.dir);
		},
		preventScrollOnSwipe: true,
	});

	useKey([], handleKeyPress);

	const updateBoard = (dir) => {
		if (!testLose(matrixRef.current)) {
			matrixRef.current = handleShift(matrixRef.current, dir);
			setTiles((prev) => updateCells(prev, matrixRef.current));
		} else {
			alert('You lost');
		}
	};

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
