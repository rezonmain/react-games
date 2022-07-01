interface TitleBarProps {
	title: string;
	onExit: () => void;
}

export default function TitleBar(props: TitleBarProps): JSX.Element {
	// handle class name makes it draggable
	return <header className='handle h-4 bg-slate-500'></header>;
}
