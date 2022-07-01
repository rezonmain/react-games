import { TileState } from '../lib/mstypes';

interface TileProps {
	value: number;
	state: TileState;
	mine: boolean;
}
export default function TileElement(props: TileProps) {
	return <div className='h-8 w-8 bg-neutral-400 rounded-sm'></div>;
}
