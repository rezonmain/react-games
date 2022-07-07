import {
	Board,
	BoardSpec,
	Coordinates,
	Difficulty,
	Game,
	Stats,
	Tile,
	TileState,
} from './mstypes';

export function newGame(diff: Difficulty, boardSpec?: BoardSpec): Game {
	let board: Board;
	switch (diff) {
		case Difficulty.Beginner:
			board = newBoard({ size: { x: 9, y: 9 }, mines: 10 });
			break;
		case Difficulty.Intermediate:
			board = newBoard({ size: { x: 16, y: 16 }, mines: 40 });
			break;
		case Difficulty.Expert:
			board = newBoard({ size: { x: 16, y: 30 }, mines: 99 });
			break;
		case Difficulty.Custom:
			board = newBoard(boardSpec);
			break;
	}
	return {
		difficulty: diff,
		board,
		stats: newStats(),
		firstClick: false,
	};
}

export function newBoard(spec: BoardSpec): Board {
	const tiles = newTiles(spec.size);
	return {
		tiles,
		tileSize: 2,
		size: spec.size,
		mines: spec.mines,
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
			const address = 'x' + column.toString() + 'y' + row.toString();
			tiles.push({
				state: TileState.Hidden,
				mine: false,
				value: 0,
				address,
			});
		});
	});
	return tiles;
}
