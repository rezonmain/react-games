import { Game, Tile, TileState } from './mstypes';

enum MB {
	Left = 0,
	Right = 2,
}

export function handleTileLogic(event: MouseEvent, gameState: Game): Game {
	const target = event.target as HTMLDivElement;
	const tile = gameState.board.tiles.find(
		(tile) => tile.address === gameState.board.activeTile
	);
	console.log(tile.address);
	// TEMPORAL
	let newTiles = structuredClone(gameState.board.tiles);
	switch (event.type) {
		case 'mousedown':
			newTiles = handleTileMouseDown(tile, event.button, gameState);
			break;
		case 'mouseup':
			newTiles = handleTileMouseUp(tile, event.button, gameState);
			break;
	}
	return {
		...gameState,
		board: {
			...gameState.board,
			tiles: newTiles,
		},
	};
}

function handleTileMouseDown(tile: Tile, button: MB, gameState: Game): Tile[] {
	let newTiles = structuredClone(gameState.board.tiles);
	switch (button) {
		case MB.Left:
			tile = handleTileLeftMouseDown(tile);
			break;
		case MB.Right:
			tile = handleTileRightMouseDown(tile);
			break;
	}
	const tileIndex = gameState.board.tiles.indexOf(tile);
	newTiles[tileIndex] = tile;
	return newTiles;
}

function handleTileMouseUp(tile: Tile, button: MB, gameState: Game): Tile[] {
	let newTiles = structuredClone(gameState.board.tiles);
	switch (button) {
		case MB.Left:
			if (!gameState.firstClick) {
				// generate mines, set first click to false
			}
			handleTileLeftMouseUp(tile);
			break;
		case MB.Right:
			handleTileRightMouseUp(tile);
			break;
	}
	return newTiles;
}

function handleTileLeftMouseDown(tile: Tile): Tile {
	return tile;
}

function handleTileRightMouseDown(tile: Tile): Tile {
	switch (tile.state) {
		case TileState.Hidden:
			tile.state = TileState.Flagged;
			break;
		case TileState.Flagged:
			tile.state = TileState.Hidden;
			break;
	}
	return tile;
}

function handleTileLeftMouseUp(tile: Tile): Tile {
	return tile;
}

function handleTileRightMouseUp(tile: Tile): Tile {
	return tile;
}
