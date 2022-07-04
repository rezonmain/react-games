/* This Modal component wraps a given component, 
making it a modal draggable window */

import { Dispatch } from 'react';
import Draggable from 'react-draggable';
import { DispatchAction } from '../../lib/mstypes';
import TitleBar from './TitleBar';

interface ModalProps {
	as: JSX.Element;
	title: string;
	dispatch?: Dispatch<DispatchAction>;
	exitOnBlur?: boolean;
	noTitleBar?: boolean;
}

export default function Modal(props: ModalProps) {
	const handleExitOnBlur = () => {
		props.dispatch({ type: 'exitModal' });
	};
	return (
		<div
			onClick={props.exitOnBlur && handleExitOnBlur}
			className='modal-bg select-none'>
			<div className='centered'>
				<Draggable handle='.handle'>
					<div className='windows-style-box flex flex-col gap-8'>
						{!props.noTitleBar && (
							<TitleBar title={props.title} dispatch={props.dispatch} />
						)}
						{props.as}
					</div>
				</Draggable>
			</div>
		</div>
	);
}
