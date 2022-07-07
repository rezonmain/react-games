import { Coordinates, Tile, Game } from './mstypes';

export const adjacent = [
	{ x: -1, y: 0 }, // Up
	{ x: 1, y: 0 }, // Down
	{ x: 0, y: -1 }, // Left
	{ x: 0, y: 1 }, //Right
	{ x: -1, y: 1 }, // Up-right
	{ x: -1, y: -1 }, //Up-left
	{ x: 1, y: 1 }, //Down-right
	{ x: 1, y: -1 }, // Down-left
];

export function getAdjacentTiles(addr: string, game: Game): Tile[] {
	let tiles: Tile[] = [];
	const size = game.board.size;

	const inBound = (x: number, y: number, adj: Coordinates) => {
		return (
			x + adj.x > 0 && x + adj.x < size.x && y + adj.y > 0 && y + adj.y < size.y
		);
	};

	const { x, y } = addrToCoord(addr);

	adjacent.forEach((move) => {
		inBound(x, y, move) &&
			tiles.push(
				game.board.tiles.find((tile) => tile.address === coordToAddr({ x, y }))
			);
	});

	return tiles;
}

export function addrToCoord(addr: string): Coordinates {
	const x = parseInt(addr.substring(addr.indexOf('x') + 1, addr.indexOf('y')));
	const y = parseInt(addr.substring(addr.indexOf('y') + 1, addr.length));

	return {
		x,
		y,
	};
}

export function coordToAddr(coord: Coordinates) {
	return 'x' + coord.x.toString() + 'y' + coord.y.toString();
}
