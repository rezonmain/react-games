import { IoCloseSharp, IoSettingsSharp } from 'react-icons/io5';
import { DispatchAction } from '../../lib/mstypes';
import { Dispatch, useState } from 'react';
import Options from '../Options';
import Modal from './Modal';
interface TitleBarProps {
	title: string;
	dispatch?: Dispatch<DispatchAction>;
}

export default function TitleBar(props: TitleBarProps) {
	const [options, setOptions] = useState(false);
	const onOptionsExit = () => {
		setOptions(false);
	};
	const onOptions = () => {
		setOptions(true);
	};
	// handle class name makes it draggable
	return (
		<header className='h-7 bg-gradient-to-r from-blue-900 flex justify-between py-0.5 px-1.5 items-center gap-2'>
			{/* Exclude the closing 'X' from being draggable as ignores onClick event on touch device */}
			<div className='handle grow'>
				<h3 className='font-tahoma text-white'>{props.title}</h3>
			</div>
			{props.title === 'Minesweeper' && (
				<button
					id='options-button'
					onClick={onOptions}
					className='windows-style-button text-center w-5 p-0 flex justify-center items-center h-5'>
					<IoSettingsSharp width='18px' height='18px' />
				</button>
			)}
			<button
				id='exit-button'
				onClick={() => props.dispatch({ type: 'exitModal' })}
				className='windows-style-button text-center w-5 p-0 flex justify-center items-center h-5'>
				<IoCloseSharp width='20px' height='20px' />
			</button>
			{options && <Options from='menu' dispatch={props.dispatch} />}
		</header>
	);
}
