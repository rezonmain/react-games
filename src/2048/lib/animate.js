import { nanoid } from 'nanoid';
import Cell from '../components/Cell';
import { matrixFromTiles } from './matrix';
import { getColor } from './styles';

export function getAnimatedCells(tiles, dir, handler) {
	const GAP = remToPixels(1);
	const cellSize = document.getElementsByClassName('_2048-tile')[0].clientWidth;
	let matrix = matrixFromTiles(tiles);

	/* The shifts  array containes how many times did a value shift
    with this I can calculate how much does a cell needs to move,
    used to animate the cells */
	let shifts = getTranslateMatrix(matrix, dir);

	// Multiply by cellSize and GAP to get the amount of pixels to move
	shifts = shifts.map((rows) =>
		rows.map((shift) => {
			return {
				x: shift.x * GAP + shift.x * cellSize,
				y: shift.y * GAP + shift.y * cellSize,
			};
		})
	);

	return tiles.map((rows, i) =>
		rows.map((v, j) => {
			const value = v.cell.value;
			const cell = {
				...v.cell,
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
				...v,
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
		Array.from({ length: matrix.length }, () => ({ x: 0, y: 0 }))
	);

	let i, j;

	for (i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix.length; j++) {
			shiftValue(i, j);
		}
	}

	function shiftValue(x, y) {
		let [next, current] = getValues(x, y);

		/* If next has a value it means there's another
    value to be shifted first */
		if (next && current) {
			shiftValue(x + dir.x, y + dir.y);
			// Update values when function returns
			[next, current] = getValues(x, y);
		}

		// Out of bounds
		if (next === undefined || current === undefined) {
			return;
		}
		/* FIXME: fix bug where down and right directions dont count 
    the shifts correctly */
		// If the next spot is free, shift
		if (current && next === null) {
			matrix[x + dir.x][y + dir.y] = current;
			matrix[x][y] = null;
			shifts[i][j] = { x: shifts[i][j].x + dir.y, y: shifts[i][j].y + dir.x };
			/* Make sure you shift value all the way,
      until it reaches array bounds or another value */
			shiftValue(x + dir.x, y + dir.y);
			/*Increment shift count, used to determine
      position to animate to */
		} else {
			return;
		}
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
	return shifts;
}

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

	let s = shift(structuredClone(prev), vector);
	return s;
}

function remToPixels(rem) {
	return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
