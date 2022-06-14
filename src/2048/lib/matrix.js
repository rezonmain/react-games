import { getRandomCells } from './tiles';

export function newMatrix(tiles) {
	const matrix = tiles.map((tile) => {
		return tile.map((t) => {
			return t.cell.value;
		});
	});
	return matrix;
}

export function handleShift(matrix, key) {
	let m = structuredClone(matrix);
	m = updateMatrix(m, key);
	/* If matrix stays the same (didn't move), 
  don't add a new value */
	m = !isSame(matrix, m) ? addValue(m) : m;
	return m;
}

function updateMatrix(matrix, key) {
	const dir = key.split('Arrow').pop();
	// Deep coppy arr
	let m = structuredClone(matrix);
	let shiftParams = {};

	switch (dir) {
		case 'Up':
			shiftParams = {
				rF: -1,
				cF: 0,
				startRow: 1,
				endRow: m.length,
				startCol: 0,
				endCol: m.length,
				rowStep: 1,
				colStep: 1,
				rowCondition: (startRow, endRow) => startRow < endRow,
				colCondition: (startCol, endCol) => startCol < endCol,
			};
			break;
		case 'Down':
			shiftParams = {
				rF: 1,
				cF: 0,
				startRow: m.length - 2,
				endRow: 0,
				startCol: 0,
				endCol: m.length,
				rowStep: -1,
				colStep: 1,
				rowCondition: (startRow, endRow) => startRow >= endRow,
				colCondition: (startCol, endCol) => startCol < endCol,
			};
			break;
		case 'Left':
			shiftParams = {
				rF: 0,
				cF: -1,
				startRow: 0,
				endRow: m.length,
				startCol: 1,
				endCol: m.length,
				rowStep: 1,
				colStep: 1,
				rowCondition: (startRow, endRow) => startRow < endRow,
				colCondition: (startCol, endCol) => startCol < endCol,
			};
			break;
		case 'Right':
			shiftParams = {
				rF: 0,
				cF: 1,
				startRow: 0,
				endRow: m.length,
				startCol: m.length - 2,
				endCol: 0,
				rowStep: 1,
				colStep: -1,
				rowCondition: (startRow, endRow) => startRow < endRow,
				colCondition: (startCol, endCol) => startCol >= endCol,
			};
			break;
		default:
			break;
	}

	// This weird calling is to get the merging behavior of the original game
	m = shift(shiftParams, m);
	m = merge(shiftParams, m);
	m = shift(shiftParams, m);

	return m;
}

function shift(p, m) {
	for (let i = p.startRow; p.rowCondition(i, p.endRow); i += p.rowStep) {
		for (let j = p.startCol; p.colCondition(j, p.endCol); j += p.colStep) {
			// 'Look' towards adjacent index
			const nxtRow = i + p.rF;
			const nxtCol = j + p.cF;

			/* If adjacent value is null and current value is not,
      shift towards adjacent */
			if (m[nxtRow][nxtCol] === null && m[i][j] !== null) {
				/* Set adjacent value to current value and -
        Set current value to 0 (nothing) */
				m[nxtRow][nxtCol] = m[i][j];
				m[i][j] = null;

				/* Recursive call to shift all the way to-
        array boundry or a number AT array boundry*/
				shift(p, m);
			}
		}
	}
	return m;
}

function merge(p, m) {
	for (let i = p.startRow; p.rowCondition(i, p.endRow); i += p.rowStep) {
		for (let j = p.startCol; p.colCondition(j, p.endCol); j += p.colStep) {
			// 'Look' towards adjacent index
			const nxtRow = i + p.rF;
			const nxtCol = j + p.cF;

			// If adjacent value is equal to current, merge values
			if (m[nxtRow][nxtCol] === m[i][j] && m[i][j] !== null) {
				m[nxtRow][nxtCol] += m[i][j];
				m[i][j] = null;
			}
		}
	}
	return m;
}

function addValue(m) {
	const amountToAdd = 1;
	const prevCoords = [];
	m.forEach((_, i) =>
		_.forEach((e, j) => {
			e && prevCoords.push({ x: i, y: j });
		})
	);

	const value = getRandomCells(m.length, amountToAdd, prevCoords);
	value.forEach((v) => (m[v.x][v.y] = v.value));
	return m;
}

function isSame(prev, current) {
	let same = true;

	prev.forEach((arr, i) => {
		same = same && arr.every((v, j) => v === current[i][j]);
	});

	return same;
}

export function testLose(prev) {
	let resultingMatrix = structuredClone(prev);
	const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

	// Test every direction to determine if matrix can no longer move
	keys.forEach((k) => {
		resultingMatrix = updateMatrix(resultingMatrix, k);
	});

	return isSame(prev, resultingMatrix);
}
