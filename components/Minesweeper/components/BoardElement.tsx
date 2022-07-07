import React, { Dispatch, useContext, useRef } from 'react';
import { Board, DispatchAction, Input, MB } from '../lib/mstypes';
import TileElement from './TileElement';
import { GameContext } from '../Minesweeper';

interface BoardProps {
	board: Board;
	dispatch: Dispatch<DispatchAction>;
}

export default function BoardElement(props: BoardProps) {
	let game = useContext(GameContext);
	let inputRef = useRef<Input>({
		activeTile: '',
		prevTile: '',
		buttons: MB.None,
	});

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		inputRef.current = {
			...inputRef.current,
			buttons: e.buttons,
		};
		props.dispatch({ type: 'tileMouseDown', payload: inputRef.current });
	};

	const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!game.firstClick && inputRef.current.buttons === MB.Left) {
			props.dispatch({ type: 'generateMines', payload: inputRef.current });
			props.dispatch({ type: 'setFirstClick' });
			props.dispatch({ type: 'tileMouseUp', payload: inputRef.current });
			// Nothing happens on rigth-up so just update state on left-up
		} else if (inputRef.current.buttons === MB.Left) {
			props.dispatch({ type: 'tileMouseUp', payload: inputRef.current });
		}
	};

	const handleTileMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		inputRef.current = {
			...inputRef.current,
			activeTile: target.id,
		};
		props.dispatch({ type: 'updateTiles', payload: inputRef.current });
	};

	const handleTileMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		inputRef.current = {
			...inputRef.current,
			prevTile: target.id,
		};
	};

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
				handleMouseEnter={handleTileMouseEnter}
				handleMouseLeave={handleTileMouseLeave}
			/>
		);
	});

	const styles = {
		gridTemplateColumns: `repeat(${props.board.size.y}, 1fr)`,
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
			<div id='board-tiles-container' onContextMenu={(e) => e.preventDefault()}>
				<div
					onMouseUp={(e) => handleMouseUp(e)}
					onMouseDown={(e) => handleMouseDown(e)}
					id='board-tiles'
					style={styles}
					className='grid bg-neutral-300 windows-style-deboss border-[6px]'>
					{tileElements}
				</div>
			</div>
		</div>
	);
}
