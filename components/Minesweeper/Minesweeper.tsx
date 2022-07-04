import { useReducer } from 'react';
import Menu from './components/Menu/Menu';
import { ActionType, MenuAction } from './lib/mstypes';
import gameReducer from './lib/reducer';

export default function Minesweeper() {
	const [game, dispatch] = useReducer(gameReducer, undefined);

	const handleMenuAction = (action: MenuAction) => {
		switch (action.type) {
			// If board is called, start a new game:
			case ActionType.InitGame:
				dispatch({
					type: 'newGame',
					payload: { board: action.board, dispatch: dispatch },
				});
				break;
			case ActionType.Exit:
				alert('Exit');
				break;
		}
	};

	console.log(game);

	return (
		<section className='section'>
			<h3 className='section-title'>Minesweeper</h3>
			<Menu handleClick={handleMenuAction} />
			{game && game.modal}
		</section>
	);
}
