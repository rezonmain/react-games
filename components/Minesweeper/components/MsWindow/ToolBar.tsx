import { Dispatch } from 'react';
import { DispatchAction } from '../../lib/mstypes';

interface ToolBarProps {
	dispatch?: Dispatch<DispatchAction>;
}
export default function ToolBar() {
	return (
		<div id='tool-bar' className='flex flex-row justify-start h-6 gap-1'>
			<span className=' hover:windows-style-box hover:border px-3 active:windows-style-deboss active:border'>
				<u>G</u>ame
			</span>
			<span>
				<u>H</u>elp
			</span>
		</div>
	);
}
