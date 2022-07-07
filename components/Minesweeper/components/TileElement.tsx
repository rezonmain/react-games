import { Dispatch, useContext } from 'react';
import { DispatchAction, TileState } from '../lib/mstypes';

interface TileProps {
	id: string;
	value: number;
	state: TileState;
	mine: boolean;
	size: number;
	active: boolean;
	dispatch: Dispatch<DispatchAction>;
	handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
	handleMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export default function TileElement(props: TileProps) {
	return (
		<div
			onMouseEnter={(e) => props.handleMouseEnter(e)}
			onMouseLeave={(e) => props.handleMouseLeave(e)}
			id={props.id}
			style={props.active ? { backgroundColor: 'red' } : {}}
			className='windows-style-box aspect-square w-8 select-none'>
			{props.value}
		</div>
	);
}
