import TileElement from '../components/TileElement';
import { Tile } from './mstypes';

export function getTileElement(tile: Tile, size: number) {
	const addr =
		'x' + tile.address.x.toString() + 'y' + tile.address.y.toString();
	return (
		<TileElement
			key={addr}
			value={tile.value}
			state={tile.state}
			mine={tile.mine}
			size={size}
		/>
	);
}
