/* This Modal component wraps a given component, 
making it a modal draggable window */

import { Dispatch } from 'react';
import Draggable from 'react-draggable';
import { DispatchAction } from '../../lib/mstypes';
import TitleBar from './TitleBar';

interface ModalProps {
	as: JSX.Element;
	title: string;
	onExit: () => void;
	dispatch?: Dispatch<DispatchAction>;
}

export default function Modal(props: ModalProps) {
	return (
		<div className='modal-bg'>
			<div className='centered'>
				<Draggable handle='.handle'>
					<div className='windows-style-box flex flex-col gap-8'>
						<TitleBar title={props.title} onExit={props.onExit} />
						{props.as}
					</div>
				</Draggable>
			</div>
		</div>
	);
}
