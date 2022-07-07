import { Game, Tile, TileState, Input, MB } from './mstypes';

export function handleTileLogic(input: Input, gameState: Game): Game {
	return gameState;
}

function handleTileMouseDown(tile: Tile, button: MB, gameState: Game): Tile[] {}

function handleTileMouseUp(tile: Tile, button: MB, gameState: Game): Tile[] {}

function handleTileLeftMouseDown(tile: Tile): Tile {
	return tile;
}

function handleTileRightMouseDown(tile: Tile): Tile {}

function handleTileLeftMouseUp(tile: Tile): Tile {
	return tile;
}

function handleTileRightMouseUp(tile: Tile): Tile {
	return tile;
}
