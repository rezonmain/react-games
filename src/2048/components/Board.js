import { useState, useRef, useEffect } from 'react';
import { useKey } from 'react-use';
import { newTiles, displayTileElements, updateCells } from '../lib/tiles';
import { newMatrix, testLose, handleShift } from '../lib/matrix';

export default function Board(props) {
	// TODO: VERY IMPORTANT ANIMATIONS ANIMATIONS ANIMATIONS!!!
	const [tiles, setTiles] = useState(() => newTiles(props.size));
	const matrixRef = useRef(newMatrix(tiles));

	useEffect(() => {
		testLose(matrixRef.current) && alert('You lost');
	});

	// Dynamically adjust grid according to board size
	const boardStyle = {
		gridTemplateColumns: `repeat(${props.size}, 1fr)`,
	};

	const handleKeyPress = ({ key }) => {
		const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (keys.includes(key)) {
			matrixRef.current = handleShift(matrixRef.current, key);
			setTiles((prev) => updateCells(prev, matrixRef.current));
		}
	};

	useKey([], handleKeyPress);

	return (
		<article>
			<header className='_2048-header'>
				<p>Score:</p>
			</header>
			<div style={boardStyle} className='_2048-board-container'>
				{displayTileElements(tiles)}
			</div>
		</article>
	);
}
