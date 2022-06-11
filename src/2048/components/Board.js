import { useState } from 'react';
import { newTiles, newTilesElements, newCells } from '../lib/tiles';

export default function Board(props) {
	const [cells, setCells] = useState(() => newCells(props.size));
	const bgTiles = newTiles(props.size);

	// Dynamic square grid
	const boardStyle = {
		gridTemplateColumns: `repeat(${props.size}, 1fr)`,
	};

	return (
		<div style={boardStyle} className='_2048-board-container'>
			{newTilesElements(bgTiles)}
		</div>
	);
}
