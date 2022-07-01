//T YPE REDUCER PARAMETERS!!!

import { newGame } from './init';
import { DispatchAction, DispatchActionType, Game } from './mstypes';

export default function gameReducer(state: Game, action: DispatchAction) {
	const { type, payload } = action;
	switch (type) {
		case DispatchActionType.NewGame:
			return newGame(payload);
	}
}
