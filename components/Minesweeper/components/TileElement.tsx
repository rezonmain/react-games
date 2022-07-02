import { TileState } from '../lib/mstypes';

interface TileProps {
	value: number;
	state: TileState;
	mine: boolean;
}
export default function TileElement(props: TileProps) {
	const styles = props.state === TileState.Hidden ? 'windows-style-box' : '';
	return <div className='windows-style-box aspect-square w-8'></div>;
}
