import { useEffect, useReducer } from 'react';
import BoardElement from './components/BoardElement';
import MsWindow from './components/MsWindow/MsWindow';
import { Difficulty } from './lib/mstypes';
import gameReducer from './lib/reducer';

export default function Minesweeper() {
	const [game, dispatch] = useReducer(gameReducer, undefined);

	// After first render
	useEffect(() => {
		const game = JSON.parse(localStorage.getItem('game'));
		if (game) {
			dispatch({ type: 'setSavedGame', payload: game });
		} else {
			dispatch({ type: 'newGame', payload: Difficulty.Beginner });
		}
	}, []);

	console.log(game);

	return (
		<section className='section bordered'>
			<h3 className='section-title'>Minesweeper</h3>
			{game && (
				<MsWindow
					title='Minesweeper'
					content={<BoardElement board={game.board} />}
					dispatch={dispatch}
				/>
			)}
		</section>
	);
}
