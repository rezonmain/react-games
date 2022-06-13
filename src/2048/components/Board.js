import { useState, useRef } from 'react';
import { useKey } from 'react-use';
import { newTiles, displayTileElements, moveCells } from '../lib/tiles';
import { newMatrix, shiftMatrix } from '../lib/matrix';

export default function Board(props) {
	const [tiles, setTiles] = useState(() => newTiles(props.size));
	const matrixRef = useRef(() => newMatrix(tiles));

	// Dynamically adjust grid according to board size
	const boardStyle = {
		gridTemplateColumns: `repeat(${props.size}, 1fr)`,
	};

	const handleKeyPress = ({ key }) => {
		const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (keys.includes(key)) {
			matrixRef.current = shiftMatrix(matrixRef.current, key);
			setTiles((prev) => moveCells(prev, matrixRef.current));
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
