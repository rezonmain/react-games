interface MenuButtonProps {
	name: string;
	text: string;
	gridSpan: number;
	handleClick: (name: string) => void;
}
export default function MenuButton(props: MenuButtonProps): JSX.Element {
	const colSpan = props.gridSpan === 1 ? 'col-span-1' : 'col-span-2';
	return (
		<button
			onClick={() => props.handleClick(props.name)}
			name={props.name}
			className={
				colSpan +
				' font-mono outline outline-1 outline-black bg-neutral-300 border border-t-white border-r-neutral-600 border-b-neutral-600 border-l-white px-3 py-1'
			}>
			{props.text}
		</button>
	);
}
