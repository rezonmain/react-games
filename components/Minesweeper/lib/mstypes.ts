export interface Game {
	difficulty: 'beginner' | 'intermediate' | 'expert' | 'custom';
	board: Board;
	stats: Stats;
}

export interface Coordinates {
	x: number;
	y: number;
}

export interface Tile {
	state: 'hidden' | 'revealed' | 'clicked' | 'flagged';
	mine: boolean;
	value: number;
	address: Coordinates;
	element: JSX.Element;
}

export interface Stats {
	lClicks: number;
	rClicks: number;
	chords: number;
	effectiveLClicks: number;
	effectiveRClicks: number;
	effectiveChords: number;
	time: number;
	completed3BV: number;
}

export interface Board {
	tiles: [Tile] | undefined;
	size: Coordinates;
	mines: number;
	flags: number;
	board3BV: number;
	element: JSX.Element;
}

export type MenuAction = 'initBoard' | 'openOptions' | 'openStats' | 'exit';
