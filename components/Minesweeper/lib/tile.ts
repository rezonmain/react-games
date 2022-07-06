import { Board, Tile } from './mstypes';

enum MB {
	Left = 0,
	Right = 2,
}

export function handleTileLogic(event: MouseEvent, board: Board): void {
	const target = event.target as HTMLDivElement;
	const tile = board.tiles.find((tile) => (tile.address = target.id));
	switch (event.type) {
		// Left click
		case 'mousedown':
			handleTileMouseDown(tile, event.button);
			break;
		case 'mouseup':
			handleTileMouseUp(tile, event.button);
			break;
	}
}

function handleTileMouseDown(tile: Tile, button: MB) {
	switch (button) {
		case MB.Left:
			console.log('Left mousedown on', tile.address);
			break;
		case MB.Right:
			console.log('Right mousedown on', tile.address);
			break;
	}
}

function handleTileMouseUp(tile: Tile, button: MB) {
	switch (button) {
		case MB.Left:
			console.log('Left mouseup on', tile.address);
			break;
		case MB.Right:
			console.log('Right mouseup on', tile.address);
			break;
	}
}
