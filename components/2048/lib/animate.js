import { nanoid } from 'nanoid';
import Cell from '../components/Cell';
import { matrixFromTiles } from './matrix';
import { getColor } from './styles';

export function getAnimatedTiles(tiles, dir, handler) {
	const gap = remToPixels(1);
	const cellSize = document.getElementById('2048-tile').clientWidth;
	let matrix = matrixFromTiles(tiles);
	matrix = appendIndexesToMatrix(matrix);

	/* The shifts  array containes how many times did a value shift
    with this it can calculate how much does a cell needs to move (in pxs),
    used to animate the cells */
	let shifts = getTranslateMatrix(matrix, dir)[0];

	// Multiply by cellSize and gap to get the amount of pixels to move
	shifts = shifts.map((rows) =>
		rows.map((shift) => {
			return {
				x: shift.x * gap + shift.x * cellSize,
				y: shift.y * gap + shift.y * cellSize,
			};
		})
	);

	function getTranslateMatrix(prev, dir) {
		let vector = { x: 0, y: 0 };
		switch (dir) {
			case 'Up':
				vector = { x: -1, y: 0 };
				break;
			case 'Down':
				vector = { x: 1, y: 0 };
				break;
			case 'Left':
				vector = { x: 0, y: -1 };
				break;
			case 'Right':
				vector = { x: 0, y: 1 };
				break;
			default:
				break;
		}
		return shift(structuredClone(prev), vector);
	}
	/* Return new tile state */
	return tiles.map((rows, i) =>
		rows.map((tile, j) => {
			const value = tile.cell.value;
			const cell = {
				...tile.cell,
				element: value ? (
					<Cell
						onDone={handler}
						sX={shifts[i][j].x}
						sY={shifts[i][j].y}
						key={nanoid()}
						value={value}
						style={getColor(value)}
					/>
				) : null,
			};
			return {
				...tile,
				cell,
			};
		})
	);
}

/* This is a better shift algorithm than the one used,
but right now im only using it to determine which values shifted,
and by how much, I use this calculation to determine how to 
animate each tile */
function shift(matrix, dir) {
	// Used to keep track how many times a value shifted
	let shifts = Array.from({ length: matrix.length }, () =>
		Array.from({ length: matrix.length }, () => ({ x: 0, y: 0, merged: false }))
	);

	let doubled = [];

	let i, j;

	for (i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix.length; j++) {
			shiftValue(i, j);
		}
	}

	for (i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix.length; j++) {
			merges(i, j);
		}
	}

	for (i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix.length; j++) {
			shiftValue(i, j);
		}
	}

	function shiftValue(x, y) {
		let [next, current] = getValues(x, y);

		// Out of bounds
		if (next === undefined || current === undefined) {
			return;
		}

		/* If next has a value it means there's another
    value to be shifted first */
		if (next.v && current.v) {
			// Update values when function returns
			shiftValue(x + dir.x, y + dir.y);
			[next, current] = getValues(x, y);
		}

		// If the next spot is free, shift
		if (current.v && next.v === null) {
			matrix[x + dir.x][y + dir.y] = { ...current };
			matrix[x][y].v = null;
			/*Increment shift count, used to determine
      position to animate to */
			incrementShifts(current);
			/* Make sure you shift value all the way,
      until it reaches array bounds or another value */
			shiftValue(x + dir.x, y + dir.y);
		} else {
			return;
		}
	}

	function merges(x, y) {
		const [next, current] = getValues(x, y);

		// Out of bounds
		if (next === undefined || current === undefined) {
			return;
		}

		if (current.v === next.v && next.v !== null) {
			matrix[x + dir.x][y + dir.y] = { ...current, v: current.v * 2 };
			matrix[x][y].v = null;
			incrementShifts(current, true);
			doubled.push({ x: next.x, y: next.y });
		}
	}

	function incrementShifts(current) {
		const x = current.x;
		const y = current.y;
		shifts[x][y] = {
			x: shifts[x][y].x + dir.y,
			y: shifts[x][y].y + dir.x,
			merged: false,
		};
	}

	function getValues(x, y) {
		/* Get the current and next value,
    check for out of bounds indexes */
		const nx = x + dir.x;
		const ny = y + dir.y;
		const l = matrix.length;
		let next =
			nx < 0 || ny < 0 || nx >= l || ny >= l ? undefined : matrix[nx][ny];
		let current = x < 0 || y < 0 || x >= l || y >= l ? undefined : matrix[x][y];

		return [next, current];
	}
	console.log(doubled);

	return [shifts, doubled];
}

function remToPixels(rem) {
	return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function appendIndexesToMatrix(matrix) {
	/*  Append an object with the origin indexes;
  these indexes are used to determine how much
  the shifted from their original position  */
	return matrix.map((rows, i) =>
		rows.map((value, j) => {
			return { v: value, x: i, y: j };
		})
	);
}
