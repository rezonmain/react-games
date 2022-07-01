import { IoCloseSharp } from 'react-icons/io5';

interface TitleBarProps {
	title: string;
	onExit: () => void;
}

export default function TitleBar(props: TitleBarProps): JSX.Element {
	// handle class name makes it draggable
	return (
		<header className='handle h-7 bg-gradient-to-r from-blue-900 flex justify-between p-1 items-center'>
			<h3 className='font-tahoma text-white'>{props.title}</h3>
			<button
				onClick={props.onExit}
				className='windows-style-button text-center font-bold w-5 p-0 flex justify-center items-center'>
				<IoCloseSharp width='20px' height='20px' />
			</button>
		</header>
	);
}
