import { nanoid } from 'nanoid';
import Tile from '../components/Tile';

export function newTiles(size) {
	const tiles = Array.from({ length: size }, (_, i) => {
		return Array.from({ length: size }, (_, j) => ({
			id: nanoid(),
			x: i,
			y: j,
		}));
	});

	return tiles;
}

export function newTilesElements(tiles) {
	let tileElements = [];

	tiles.map((tile) =>
		tile.map((t) => tileElements.push(<Tile key={t.id} x={t.x} y={t.y} />))
	);

	return tileElements;
}

export function newCells(size) {
	return new Array(size);
}
