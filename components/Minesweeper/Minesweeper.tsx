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
			// if game exists in localstorage use it to render the board
			dispatch({ type: 'setSavedGame', payload: game });
		} else {
			// Otherwise crate a default board
			dispatch({ type: 'newGame', payload: Difficulty.Beginner });
		}
	}, []);

	// Save game to localstorage everytime it updates
	useEffect(() => {
		localStorage.setItem('game', JSON.stringify(game));
	}, [game]);

	return (
		<section className='bordered min-w-[580px] w-fit mb-3 mx-auto'>
			<h3 className='section-title'>Minesweeper</h3>
			{game && (
				<MsWindow
					title='Minesweeper'
					content={<BoardElement board={game.board} />}
					dispatch={dispatch}
					showToolBar={true}
					game={game}
				/>
			)}
		</section>
	);
}
