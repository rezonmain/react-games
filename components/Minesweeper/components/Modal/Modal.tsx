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
	exitOnBlur?: boolean;
	noTitleBar?: boolean;
	dispatch?: Dispatch<DispatchAction>;
}

export default function Modal(props: ModalProps) {
	return (
		<div
			className='modal-bg select-none'
			onClick={props.exitOnBlur && props.onExit}>
			<div className='centered'>
				<Draggable handle='.handle'>
					<div className='windows-style-box flex flex-col gap-8'>
						{!props.noTitleBar && (
							<TitleBar
								title={props.title}
								onExit={props.onExit}
								dispatch={props.dispatch}
							/>
						)}

						{props.as}
					</div>
				</Draggable>
			</div>
		</div>
	);
}
