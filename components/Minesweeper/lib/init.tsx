import BoardElement from '../components/BoardElement';
import {
	Board,
	BoardSpec,
	Coordinates,
	Game,
	Stats,
	Tile,
	TileState,
} from './mstypes';

import { getNewTileElement } from './tiles';

export function newGame(payload: BoardSpec): Game {
	const { difficulty, size, mines } = payload;
	return {
		difficulty,
		board: newBoard(size, mines),
		stats: newStats(),
	};
}

export function newBoard(size: Coordinates, mines: number): Board {
	const tiles = newTiles(size);
	return {
		tiles,
		size,
		mines,
		flags: 0,
		board3BV: undefined,
		element: <BoardElement size={size} tiles={tiles} />,
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
				element: getNewTileElement(column, row),
			});
		});
	});
	return tiles;
}
