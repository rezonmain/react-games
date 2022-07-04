import { TileState } from '../lib/mstypes';

interface TileProps {
	value: number;
	state: TileState;
	mine: boolean;
	size: number;
}
export default function TileElement(props: TileProps) {
	const style = {
		width: `${props.size}rem`,
	};
	return <div style={style} className='windows-style-box aspect-square'></div>;
}
