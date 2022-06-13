export function newMatrix(tiles) {
	const matrix = tiles.map((tile) => {
		return tile.map((t) => {
			return t.cell.value;
		});
	});
	return matrix;
}

export function shiftMatrix(matrix, key) {
	const dir = key.split('Arrow').pop();
	let m = matrix;
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
			m = shift(shiftParams, m);
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
			m = shift(shiftParams, m);
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
			m = shift(shiftParams, m);
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
			m = shift(shiftParams, m);
			break;
		default:
			break;
	}
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