import { Dispatch } from 'react';
import BoardElement from '../components/BoardElement';
import Modal from '../components/Modal/Modal';
import {
	Board,
	BoardSpec,
	Coordinates,
	DispatchAction,
	Game,
	Stats,
	Tile,
	TileState,
} from './mstypes';

export function newGame(
	boardSpec: BoardSpec,
	dispatch: Dispatch<DispatchAction>
): Game {
	const { difficulty, size, mines } = boardSpec;
	const board = newBoard(size, mines);
	return {
		difficulty,
		board,
		stats: newStats(),
		modal: (
			<Modal
				as={<BoardElement board={board} />}
				title={'Minesweeper'}
				dispatch={dispatch}
			/>
		),
	};
}

export function newBoard(size: Coordinates, mines: number): Board {
	const tiles = newTiles(size);
	return {
		tiles,
		// GET TILE SIZE FROM LOCAL STORAGE OR USE DEFAULT WHICH IS 8
		tileSize: 2,
		size,
		mines,
		flags: 0,
		board3BV: undefined,
	};
}

function newStats(): Stats {
	return {
		lClicks: 0,
		rClicks: 0,
		chords: 0,
		effectiveLClicks: 0,
		effectiveRClicks: 0,
		effectiveChords: 0,
		time: 0,
		completed3BV: 0,
	};
}

function newTiles(size: Coordinates): Tile[] {
	let tiles: Tile[] = [];
	Array.from({ length: size.x }, (_, column) => {
		Array.from({ length: size.y }, (_, row) => {
			tiles.push({
				state: TileState.Hidden,
				mine: false,
				value: 0,
				address: { x: column, y: row },
			});
		});
	});
	return tiles;
}
