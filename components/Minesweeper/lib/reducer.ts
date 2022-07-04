//T YPE REDUCER PARAMETERS!!!

import { newGame } from './init';
import { DispatchAction, Game } from './mstypes';

export default function gameReducer(state: Game, action: DispatchAction) {
	const { type, payload } = action;
	switch (type) {
		case 'newGame':
			return newGame(payload);
		case 'changeTileSize':
	}
}
