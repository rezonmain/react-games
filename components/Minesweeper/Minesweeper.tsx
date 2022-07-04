import { useReducer, useState } from 'react';
import Menu from './components/Menu/Menu';
import Modal from './components/Modal/Modal';
import Options from './components/Options';
import Stats from './components/Stats';
import { newBoard } from './lib/init';
import { ActionType, MenuAction } from './lib/mstypes';
import gameReducer from './lib/reducer';

export default function Minesweeper() {
	const [modal, setModal] = useState<JSX.Element | undefined>(undefined);
	const [game, dispatch] = useReducer(gameReducer, undefined);

	const handleModalExit = () => {
		setModal(undefined);
	};

	const handleMenuAction = (action: MenuAction) => {
		switch (action.type) {
			// If board is called, start a new game:
			case ActionType.InitGame:
				dispatch({
					type: 'newGame',
					payload: action.board,
				});
				setModal(
					<Modal
						as={newBoard(action.board.size, action.board.mines).element}
						title='Minesweeper'
						onExit={handleModalExit}
					/>
				);
				break;
			case ActionType.OpenOptions:
				setModal(
					<Modal
						as={<Options from='menu' />}
						title='Minesweeper | Options'
						onExit={handleModalExit}
					/>
				);
				break;
			case ActionType.OpenStats:
				setModal(
					<Modal
						as={<Stats />}
						title='Minesweeper | Stats'
						onExit={handleModalExit}
					/>
				);
				break;
		}
	};

	console.log(game);

	return (
		<section className='section'>
			<h3 className='section-title'>Minesweeper</h3>
			<Menu handleClick={handleMenuAction} />
			{modal}
		</section>
	);
}
