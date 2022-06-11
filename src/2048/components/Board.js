import { useState } from 'react';
import { newTiles } from '../lib/tiles';
import Tile from './Tile';

export default function Board(props) {
	const [tiles, setTiles] = useState(() => newTiles(props.size));

	const tileElements = tiles.map((tile) => {
		return tile.map((til) => <Tile key={til.id} value={til.value} />);
	});

	function displayTiles() {
		let arr = [];
		tileElements.forEach((tile) => tile.forEach((t) => arr.push(t)));
		return arr;
	}

	return <div className='_2048-board-container'>{displayTiles()}</div>;
}
