import { ReactNode } from 'react';
import TitleBar from './TitleBar';

interface MsWindowProps {
	children: ReactNode;
	title: string;
}

export default function MsWindow(props: MsWindowProps) {
	return (
		<article
			id='board-container'
			className='windows-style-box font-tahoma w-fit mx-auto my-0'>
			<TitleBar title={props.title} />
			{props.children}
		</article>
	);
}
