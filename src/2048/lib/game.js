import { getShiftedMatrix, matrixFromTiles } from './matrix';
import { newTiles, updateCells } from './tiles';
import { getAnimatedTiles } from './animate';

export function newGame(boardSize) {
	const tiles = newTiles(boardSize);
	const matrix = matrixFromTiles(tiles);
	return {
		tiles,
		matrix,
		buffer: [],
	};
}

export function gameReducer(state, action) {
	let buffer;
	switch (action.type) {
		case 'animate':
			return {
				...state,
				tiles: getAnimatedTiles(state.tiles, state.buffer[0], action.handler),
			};

		case 'updateMatrix':
			return {
				...state,
				matrix: getShiftedMatrix(state.matrix, state.buffer[0]),
			};

		case 'updateTiles':
			return {
				...state,
				tiles: updateCells(state.tiles, state.matrix),
			};

		case 'setAnimation':
			return {
				...state,
				animation: action.payload,
			};

		case 'pushBuffer':
			buffer = state.buffer;
			buffer.push(action.input);
			return {
				...state,
				buffer,
			};

		case 'shiftBuffer':
			buffer = state.buffer;
			buffer.shift();
			return {
				...state,
				buffer,
			};

		default:
			break;
	}
}
