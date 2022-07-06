import { newGame } from './init';
import { DispatchAction, Game } from './mstypes';
import { handleTileLogic } from './tile';

export default function gameReducer(state: Game, action: DispatchAction) {
	const { type, payload } = action;
	switch (type) {
		case 'newGame':
			return newGame(payload);

		case 'setSavedGame':
			return payload;

		case 'setDifficulty':

		case 'tileSize':

		case 'mouseDown':
			handleTileLogic(payload, state.board);
			return state;
		case 'mouseUp':
			handleTileLogic(payload, state.board);
			return state;

		case 'exitModal':
			return state;
	}
}
