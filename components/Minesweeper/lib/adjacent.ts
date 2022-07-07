import { Coordinates, Tile, Game } from './mstypes';

// Helper array that contains offsets to get adjacent tiles
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

	// Check if current tile offset is in bound of board
	const inBound = (x: number, y: number) => {
		return x >= 0 && x < size.x && y >= 0 && y < size.y;
	};

	const { x, y } = addrToCoord(addr);

	adjacent.forEach((move) => {
		// Get adjacent tile coordinates
		const aX = x + move.x;
		const aY = y + move.y;
		// If in bound push tile with address of aX,aY
		inBound(aX, aY) &&
			tiles.push(
				game.board.tiles.find(
					(tile) => tile.address === coordToAddr({ x: aX, y: aY })
				)
			);
	});
	return tiles;
}

export function getAdjacentTilesAddresses(addr: string, game: Game): string[] {
	let tileAddresses: string[] = [];
	const size = game.board.size;

	const inBound = (x: number, y: number) => {
		return x >= 0 && x < size.x && y >= 0 && y < size.y;
	};

	const { x, y } = addrToCoord(addr);

	adjacent.forEach((move) => {
		// Get adjacent tile coordinates
		const aX = x + move.x;
		const aY = y + move.y;
		// If in bound push tile with address of aX,aY
		inBound(aX, aY) && tileAddresses.push(coordToAddr({ x: aX, y: aY }));
	});
	return tileAddresses;
}

export function addrToCoord(addr: string): Coordinates {
	// Convert from string 'xValyVal' to object {x: Val, y: Val}
	const x = parseInt(addr.substring(addr.indexOf('x') + 1, addr.indexOf('y')));
	const y = parseInt(addr.substring(addr.indexOf('y') + 1, addr.length));

	return {
		x,
		y,
	};
}

export function coordToAddr(coord: Coordinates) {
	// Convert from object {x: Val, y: Val} to string 'xValyVal'
	return 'x' + coord.x.toString() + 'y' + coord.y.toString();
}
