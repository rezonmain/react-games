import { setAnimatedTiles } from './animate';
import { handleShift, matrixFromTiles } from './matrix';
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
	let dir, buffer;
	switch (action.type) {
		case 'animate':
			return {
				...state,
				tiles: setAnimatedTiles(state.tiles, action.dir, action.payload),
			};

		case 'updateMatrix':
			return {
				...state,
				matrix: handleShift(state.matrix, action.dir),
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
			buffer = [...state.buffer];
			buffer.push(action.payload);
			return {
				...state,
				buffer,
			};

		case 'shiftBuffer':
			buffer = [...state.buffer];
			buffer.shift();
			return {
				...state,
				buffer,
			};

		default:
			break;
	}
}
