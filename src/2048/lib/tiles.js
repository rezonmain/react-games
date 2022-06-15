import { nanoid } from 'nanoid';
import Cell from '../components/Cell';
import Tile from '../components/Tile';
import { getTranslateMatrix } from './animate';
import { matrixFromTiles } from './matrix';
import { getColor } from './styles';

export function newTiles(size) {
	const initCells = getRandomCells(size);
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
			const cell = {
				x: i,
				y: j,
				value,
				// if value != null, create a cell element
				element: value ? (
					<Cell key={nanoid()} value={value} style={getColor(value)} />
				) : null,
			};
			return {
				id: nanoid(),
				cell: cell,
			};
		});
	});

	return tiles;
}

export function displayTileElements(tiles) {
	let tileElements = [];

	tiles.map((tile) =>
		tile.map((t) =>
			tileElements.push(<Tile key={t.id} cell={t.cell.element} />)
		)
	);

	return tileElements;
}

export function getRandomCells(size, amount = 2, prevCoords = []) {
	let cells = [];
	let x, y, value;
	let areEqual = false;

	// Maximum value an initial cell can have, in power of 2
	const maxInit = 2;

	// Generate unique cells
	while (cells.length < amount) {
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
			cells.push({
				x,
				y,
				value,
			});
			prevCoords.push({ x, y });
		}
	}
	return cells;
}

export function updateCells(tiles, matrix) {
	return tiles.map((tile, i) =>
		tile.map((t, j) => {
			const value = matrix[i][j];
			const cell = {
				value,
				// if value != null, create a cell element
				element: value ? (
					<Cell
						key={nanoid()}
						value={matrix[i][j]}
						style={getColor(matrix[i][j])}
					/>
				) : null,
			};
			return {
				...t,
				cell,
			};
		})
	);
}
