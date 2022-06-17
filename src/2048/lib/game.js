import { getShiftedMatrix, matrixFromTiles } from './matrix';
import { newTiles, updateCells } from './tiles';

export function newGame(boardSize) {
	const tiles = newTiles(boardSize);
	const matrix = matrixFromTiles(tiles);
	const animation = false;
	return {
		tiles,
		matrix,
		animation,
	};
}

export function gameReducer(state, action) {
	switch (action.type) {
		case 'animate':
			return {
				...state,
				tiles: action.payload,
			};

		case 'updateMatrix':
			return {
				...state,
				matrix: getShiftedMatrix(state.matrix, action.dir),
			};

		case 'updateTiles':
			return {
				...state,
				tiles: updateCells(state.tiles, action.matrix),
			};

		case 'setAnimation':
			return {
				...state,
				animation: action.payload,
			};

		default:
			break;
	}
}
