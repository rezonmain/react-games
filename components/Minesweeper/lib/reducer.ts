import { newGame } from './init';
import { generateMines } from './mines';
import { Difficulty, DispatchAction, Game, Input } from './mstypes';
import { handleTileLogic } from './tile';

export default function gameReducer(state: Game, action: DispatchAction): Game {
	const { type, payload } = action;
	switch (type) {
		case 'newGame':
			return newGame(payload as Difficulty);

		case 'setSavedGame':
			return payload;

		case 'generateMines':
			return generateMines(payload as Input, state);

		case 'setFirstClick':
			return {
				...state,
				firstClick: true,
			};

		case 'tileMouseDown':
			return state;

		case 'tileMouseUp':
			return state;

		case 'updateTiles':
			return state;

		case 'exitModal':
			return state;
	}
}
