import { useState } from 'react';
import { newTiles, displayTileElements } from '../lib/tiles';

export default function Board(props) {
	const [tiles, setTiles] = useState(() => newTiles(props.size));

	const boardStyle = {
		gridTemplateColumns: `repeat(${props.size}, 1fr)`,
	};

	console.log(tiles);

	return (
		<div style={boardStyle} className='_2048-board-container'>
			{displayTileElements(tiles)}
		</div>
	);
}
