import {
	ActionType,
	DispatchAction,
	DispatchActionType,
	MenuAction,
} from './mstypes';
import Options from '../components/Options';
import Stats from '../components/Stats';
import Modal from '../components/Modal/Modal';
import { Dispatch } from 'react';

export function getModalFromAction(
	action: MenuAction,
	dispatch: Dispatch<DispatchAction>,
	exit: () => void
) {
	switch (action.type) {
		// If board is called, start a new game:
		case ActionType.InitGame:
			dispatch({ type: DispatchActionType.NewGame, payload: action.board });
			break;
		case ActionType.OpenOptions:
			return (
				<Modal as={<Options />} title='Minesweeper | Options' onExit={exit} />
			);
		case ActionType.OpenStats:
			return <Modal as={<Stats />} title='Minesweeper | Stats' onExit={exit} />;
	}
}
