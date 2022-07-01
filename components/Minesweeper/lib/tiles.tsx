import TileElement from '../components/TileElement';
import { TileState } from './mstypes';

export function getTileElements() {}

export function getNewTileElement(x: number, y: number) {
	const addr = 'x' + x.toString() + 'y' + y.toString();
	return (
		<TileElement key={addr} value={0} state={TileState.Hidden} mine={false} />
	);
}
