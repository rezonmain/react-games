import { useState, useRef, useEffect } from 'react';
import { useKey } from 'react-use';
import { useSwipeable } from 'react-swipeable';
import { newTiles, displayTileElements, updateCells } from '../lib/tiles';
import { matrixFromTiles, testLose, handleShift } from '../lib/matrix';
import { getAnimatedCells } from '../lib/animate';

export default function Board(props) {
	// TODO: VERY IMPORTANT ANIMATIONS ANIMATIONS ANIMATIONS!!!
	const [boardSize, setBoardSize] = useState(4);
	const [tiles, setTiles] = useState(() => newTiles(boardSize));
	const matrixRef = useRef();

	useEffect(() => {
		matrixRef.current = matrixFromTiles(tiles);
	}, []);

	// Dynamically adjust grid according to board size
	const boardStyle = {
		gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
	};

	const moveCells = (dir) => {
		setTiles((prev) => getAnimatedCells(prev, dir, animationDone));
		matrixRef.current = handleShift(matrixRef.current, dir);
	};

	const animationDone = () => {
		setTiles((prev) => updateCells(prev, matrixRef.current));
	};

	const handleKeyPress = ({ key }) => {
		const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (keys.includes(key)) {
			moveCells(key.split('Arrow').pop());
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
