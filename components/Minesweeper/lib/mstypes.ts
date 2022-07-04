export type Game = {
	difficulty: Difficulty;
	board: Board;
	stats: Stats;
	modal: JSX.Element | undefined;
};

export type Coordinates = {
	x: number;
	y: number;
};

export type Tile = {
	state: TileState;
	mine: boolean;
	value: number;
	address: Coordinates;
};

export enum TileState {
	Hidden,
	Revealed,
	Clicked,
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
	difficulty: Difficulty;
	size: Coordinates;
	mines: number;
};

export type Board = {
	tiles: Tile[] | undefined;
	tileSize: number;
	size: Coordinates;
	mines: number;
	flags: number;
	board3BV: number | undefined;
};

export enum ActionType {
	InitGame,
	// OpenOptions,
	// OpenStats,
	Exit,
}

export enum Difficulty {
	Beginner,
	Intermediate,
	Expert,
	Custom,
}

export interface MenuAction {
	type: ActionType;
	board?: BoardSpec;
}

export interface DispatchAction {
	type: string;
	payload?: any;
}
