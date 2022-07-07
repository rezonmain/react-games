import { Game, Tile, TileState, Input, MB } from './mstypes';

export function updateTiles(input: Input, gameState: Game): Game {
	const newTiles = structuredClone(gameState.board.tiles);
	const activeTile = gameState.board.tiles.find(
		(tile) => tile.address === input.activeTile
	);
	const prevTile = gameState.board.tiles.find(
		(tile) => tile.address === input.prevTile
	);

	console.log(activeTile.address, prevTile && prevTile.address);

	if (activeTile.state !== TileState.Flagged) {
		newTiles.find((tile) => tile.address === activeTile.address).active = true;
	}
	prevTile &&
		(newTiles.find((tile) => tile.address === prevTile.address).active = false);

	return {
		...gameState,
		board: {
			...gameState.board,
			tiles: newTiles,
		},
	};
}

export function handleTileLogic(input: Input, gameState: Game): Game {
	return gameState;
}
