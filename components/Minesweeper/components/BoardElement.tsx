import { Dispatch, useContext } from 'react';
import { Board, DispatchAction } from '../lib/mstypes';
import TileElement from './TileElement';
import { GameContext } from '../Minesweeper';

interface BoardProps {
	board: Board;
	dispatch: Dispatch<DispatchAction>;
}

export default function BoardElement(props: BoardProps) {
	let game = useContext(GameContext);

	const tileElements = props.board.tiles.map((tile) => {
		return (
			<TileElement
				key={tile.address}
				id={tile.address}
				value={tile.value}
				state={tile.state}
				mine={tile.mine}
				size={props.board.tileSize}
				dispatch={props.dispatch}
			/>
		);
	});

	const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		// Generate the mines after first click to avoid hitting a mine on first interaction
		if (!game.firstClick && e.button === 0) {
			props.dispatch({ type: 'generateMines', payload: e });
			props.dispatch({ type: 'setFirstClick' });
			props.dispatch({ type: 'tileClick', payload: e });
		} else {
			props.dispatch({ type: 'tileClick', payload: e });
		}
	};

	const styles = {
		gridTemplateColumns: `repeat(${props.board.size.x}, 1fr)`,
	};
	return (
		<div
			id='board-container'
			className='windows-style-box m-0.5 border-[6px] p-3 w-fit flex flex-col gap-3'>
			<header
				id='board-header'
				className='windows-style-deboss border-[6px] flex flex-row justify-between h-16 px-3 items-center'>
				<div
					id='counter'
					className='windows-style-deboss w-10 h-5 border-[2px]'>
					counter
				</div>
				<div id='reset-button' className='windows-style-button w-5 h-5'>
					😸
				</div>
				<div
					id='counter'
					className='windows-style-deboss w-10 h-5 border-[2px]'>
					counter
				</div>
			</header>
			<div
				onMouseDown={(e) => props.dispatch({ type: 'tileClick', payload: e })}
				onMouseUp={(e) => handleMouseUp(e)}
				onContextMenu={(e) => e.preventDefault()}
				id='board-tiles-container'
				className=''>
				<div
					id='board-tiles'
					style={styles}
					className='grid bg-neutral-300 windows-style-deboss border-[6px]'>
					{tileElements}
				</div>
			</div>
		</div>
	);
}
