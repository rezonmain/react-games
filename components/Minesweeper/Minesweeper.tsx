import { useEffect, useReducer, createContext, Context } from 'react';
import BoardElement from './components/BoardElement';
import MsWindow from './components/MsWindow/MsWindow';
import ToolBar from './components/Toolbar/ToolBar';
import { Difficulty, Game } from './lib/mstypes';
import gameReducer from './lib/reducer';

export let GameContext: Context<Game>;

export default function Minesweeper() {
	const [game, dispatch] = useReducer(gameReducer, undefined);
	GameContext = createContext(game);

	// After first render
	useEffect(() => {
		dispatch({ type: 'newGame', payload: Difficulty.Beginner });

		// const game = JSON.parse(localStorage.getItem('game'));
		// if (game) {
		// 	// if game object exists in localstorage use it to render the board
		// 	dispatch({ type: 'setSavedGame', payload: game });
		// } else {
		// 	// Otherwise create a default board
		// 	dispatch({ type: 'newGame', payload: Difficulty.Beginner });
		// }
	}, []);

	// // Save game to localstorage everytime it updates
	// useEffect(() => {
	// 	localStorage.setItem('game', JSON.stringify(game));
	// }, [game]);

	return (
		<section className='bordered min-w-[580px] w-fit mb-3 mx-auto'>
			<h3 className='section-title'>Minesweeper</h3>
			{game && (
				<GameContext.Provider value={game}>
					<MsWindow title='Minesweeper'>
						<ToolBar dispatch={dispatch} game={game} />
						<BoardElement board={game.board} dispatch={dispatch} />
					</MsWindow>
				</GameContext.Provider>
			)}
		</section>
	);
}
