export type Game = {
	difficulty: Difficulty;
	board: Board;
	stats: Stats;
	firstClick: boolean;
};

export type Coordinates = {
	x: number;
	y: number;
};

export type Tile = {
	state: TileState;
	mine: boolean;
	value: number;
	address: string;
	active: boolean;
};

export enum TileState {
	Hidden,
	Revealed,
	Flagged,
}

export type Stats = {
	lClicks: number;
	rClicks: number;
	chords: number;
	effectiveLClicks: number;
	effectiveRClicks: number;
	effectiveChords: number;
	time: number;
	completed3BV: number;
};

export type BoardSpec = {
	size: Coordinates;
	mines: number;
};

export type Board = {
	tiles: Tile[];
	tileSize: number;
	size: Coordinates;
	mines: number;
	flags: number;
	board3BV: number | undefined;
};

export enum Difficulty {
	Beginner,
	Intermediate,
	Expert,
	Custom,
}

export interface DispatchAction {
	type: string;
	payload?: any;
}

export type Input = {
	activeTile: string;
	prevTile: string;
	buttons: MB;
};

export enum MB {
	None = 0,
	Left = 1,
	Right = 2,
	Both = 3,
}
