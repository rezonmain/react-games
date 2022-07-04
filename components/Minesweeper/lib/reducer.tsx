import { Dispatch } from 'react';
import { newGame } from './init';
import { DispatchAction, Game, BoardSpec, Board } from './mstypes';
import BoardElement from '../components/BoardElement';
import Modal from '../components/Modal/Modal';

export default function gameReducer(state: Game, action: DispatchAction) {
	const { type, payload } = action;
	switch (type) {
		case 'newGame':
			const boardSpec = payload.board as BoardSpec;
			const dispatch = payload.dispatch as Dispatch<DispatchAction>;
			return newGame(boardSpec, dispatch);
		case 'tileSize':
			const board: Board = {
				...state.board,
				tileSize: payload.tileSize,
			};
			return {
				...state,
				board,
				modal: (
					<Modal
						as={<BoardElement board={board} />}
						title={'Minesweeper'}
						dispatch={payload.dispatch}
					/>
				),
			};
		case 'exitModal':
			return {
				...state,
				modal: undefined,
			};
	}
}
