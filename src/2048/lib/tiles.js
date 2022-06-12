import { nanoid } from 'nanoid';
import Cell from '../components/Cell';
import Tile from '../components/Tile';

export function newTiles(size) {
	const initCells = getInitialCells(size);
	const tiles = Array.from({ length: size }, (_, i) => {
		return Array.from({ length: size }, (_, j) => {
			let value = null;

			/* 	If initialCell coords match index, 
      set its value to the one generated */
			for (let c = 0; c < initCells.length; c++) {
				const cell = initCells[c];
				if (cell.x === i && cell.y === j) {
					value = cell.value;
					break;
				}
			}
			return {
				id: nanoid(),
				x: i,
				y: j,
				cell: <Cell value={value} />,
			};
		});
	});

	return tiles;
}

export function displayTileElements(tiles) {
	let tileElements = [];

	tiles.map((tile) =>
		tile.map((t) =>
			tileElements.push(<Tile key={t.id} x={t.x} y={t.y} cell={t.cell} />)
		)
	);

	return tileElements;
}

export function moveTiles(pre, key) {
	const dir = key.split('Arrow').pop();
	// Move down for testing
}

function getInitialCells(size) {
	let initialCells = [];
	let x, y, value;
	let prevCoords = [];
	let areEqual = false;

	// Number of initial cells
	const nInit = 5;

	// Maximum value an initial cell can have, in power of 2
	const maxInit = 2;

	// Generate unique cells
	while (initialCells.length < nInit) {
		x = Math.floor(Math.random() * size);
		y = Math.floor(Math.random() * size);
		value = Math.pow(2, Math.floor(Math.random() * maxInit) + 1);

		// Set flag if generated coords already've been used
		for (let i = 0; i < prevCoords.length; i++) {
			const coords = prevCoords[i];
			if (coords.x === x && coords.y === y) {
				areEqual = true;
				break;
			} else {
				areEqual = false;
			}
		}

		if (!areEqual) {
			initialCells.push({
				x,
				y,
				value,
			});
			prevCoords.push({ x, y });
		}
	}
	return initialCells;
}
