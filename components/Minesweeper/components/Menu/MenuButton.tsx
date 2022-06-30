interface MenuButtonProps {
	name: string;
	text: string;
	gridSpan: number;
	handleClick: (name: string) => void;
}
export default function MenuButton(props: MenuButtonProps): JSX.Element {
	return (
		<button
			onClick={() => props.handleClick(props.name)}
			name={props.name}
			className={`col-span-${props.gridSpan} font-mono outline outline-1 outline-black bg-neutral-300 border border-t-white border-r-neutral-600 border-b-neutral-600 border-l-white px-3 py-1`}>
			{props.text}
		</button>
	);
}
