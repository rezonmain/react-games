import { Dispatch } from 'react';
import { newGame } from './init';
import { DispatchAction, Game, BoardSpec, Board } from './mstypes';
import BoardElement from '../components/BoardElement';
import Modal from '../components/Modal/Modal';

export default function gameReducer(state: Game, action: DispatchAction) {
	const { type, payload } = action;
	switch (type) {
		case 'newGame':
			return newGame(payload);

		case 'setSavedGame':
			return payload;

		case 'setDifficulty':

		case 'tileSize':

		case 'exitModal':
			return state;
	}
}
