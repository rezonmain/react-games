import { newGame } from './init';
import { generateMines } from './mines';
import { Difficulty, DispatchAction, Game } from './mstypes';
import { handleTileLogic } from './tile';

export default function gameReducer(state: Game, action: DispatchAction): Game {
	const { type, payload } = action;
	switch (type) {
		case 'newGame':
			return newGame(payload as Difficulty);

		case 'setSavedGame':
			return payload;

		case 'setActiveTile':
			return {
				...state,
				board: {
					...state.board,
					activeTile: payload.id,
				},
			};

		case 'setPrevActiveTile':
			return {
				...state,
				board: {
					...state.board,
					prevActiveTile: payload.id,
				},
			};

		case 'generateMines':
			return generateMines(state, payload as MouseEvent);

		case 'setFirstClick':
			return {
				...state,
				firstClick: true,
			};

		case 'tileClick':
			return handleTileLogic(payload as MouseEvent, state);

		case 'exitModal':
			return state;
	}
}
