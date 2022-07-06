import { Dispatch } from 'react';
import { DispatchAction } from '../../lib/mstypes';
import TitleBar from './TitleBar';
import ToolBar from './Toolbar/ToolBar';

interface MsWindowProps {
	content: JSX.Element;
	title: string;
	dispatch?: Dispatch<DispatchAction>;
	showToolBar?: boolean;
}

export default function MsWindow(props: MsWindowProps) {
	return (
		<article
			id='board-container'
			className='windows-style-box font-tahoma w-fit mx-auto my-0'>
			<TitleBar title={props.title} dispatch={props.dispatch} />
			<ToolBar />
			{props.content}
		</article>
	);
}
