import { Dispatch, useRef, useState } from 'react';
import useOutsideClick from '../../../lib/hooks/useOutsideClick';
import { DispatchAction } from '../../../lib/mstypes';
import ListItem from './ListItem';

interface ToolBarProps {
	dispatch?: Dispatch<DispatchAction>;
}
export default function ToolBar(props: ToolBarProps) {
	const [showDropDown, setShowDropDown] = useState(false);

	// Closes the Game toolbar dialog box when an click outside of it is detected
	const elementRef = useRef(null);
	useOutsideClick(elementRef, setShowDropDown);

	return (
		<div id='tool-bar' className='flex flex-row justify-start h-6 gap-1'>
			<div id='drop-down-container relative'>
				<span
					onClick={() => setShowDropDown(true)}
					className='border hover:cursor-pointer border-neutral-300 hover:windows-style-box hover:border px-3 active:windows-style-deboss active:border'>
					<u>G</u>ame
				</span>
				{showDropDown && (
					<div
						ref={elementRef}
						id='drop-down'
						className='windows-style-box border-[2px] absolute top-15 z-10  bg-neutral-300 w-fit transition-all overflow-hidden'>
						<ul>
							<ListItem selected={false} text='New' />
							<hr className='m-1'></hr>
							<ListItem selected={true} text='Beginner' />
							<ListItem selected={false} text='Intermediate' />
							<ListItem selected={false} text='Expert' />
							<ListItem selected={false} text='Custom...' />
							<hr className='m-1'></hr>
							<ListItem selected={false} text='Best times...' />
							{/* <hr className='m-1'></hr>
						<ListItem selected={false} text='Exit' /> */}
						</ul>
					</div>
				)}
			</div>
			<span>
				<u>H</u>elp
			</span>
		</div>
	);
}
