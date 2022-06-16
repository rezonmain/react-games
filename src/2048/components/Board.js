import { useState, useRef, useEffect } from 'react';
import { useKey } from 'react-use';
import { useSwipeable } from 'react-swipeable';
import { newTiles, displayTileElements, updateCells } from '../lib/tiles';
import { matrixFromTiles, handleShift } from '../lib/matrix';
import { getAnimatedCells } from '../lib/animate';

export default function Board() {
	/* 	TODO: 1. Merge animation,
          2. new cell animationDone,
          3. INPUT BUFFER!!! */
	const [boardSize, setBoardSize] = useState(4);
	const [tiles, setTiles] = useState(() => newTiles(boardSize));
	const [animation, setAnimation] = useState(false);
	const matrixRef = useRef();
	const bufferRef = useRef([]);

	useEffect(() => {
		matrixRef.current = matrixFromTiles(tiles);
	}, []);

	useEffect(() => {
		console.log('animation');
		if (!animation) {
			setTiles((prev) => updateCells(prev, matrixRef.current));
		}
	}, [animation]);

	// Dynamically adjust grid according to board size
	const boardStyle = {
		gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
	};

	const moveCells = () => {
		const dir = bufferRef.current[0];
		setTiles((prev) => getAnimatedCells(prev, dir, animationDone));
		setAnimation(() => true);
		bufferRef.current.shift();
	};

	const animationDone = () => {
		setAnimation(() => false);
	};

	const handleKeyPress = ({ key }) => {
		const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (keys.includes(key)) {
			const input = key.split('Arrow').pop();
			bufferRef.current.push(input);
		}
	};

	// Swipe controls
	const handlers = useSwipeable({
		onSwiped: (e) => {
			moveCells(e.dir);
		},
		preventScrollOnSwipe: true,
	});

	useKey([], handleKeyPress);

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
