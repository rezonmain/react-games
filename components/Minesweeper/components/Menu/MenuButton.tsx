import { MenuAction } from '../../lib/mstypes';

interface MenuButtonProps {
	name: MenuAction;
	text: string;
	colSpan: number;
	handleClick: (name: string) => void;
}
export default function MenuButton(props: MenuButtonProps): JSX.Element {
	const colSpan = props.colSpan === 1 ? 'col-span-1' : 'col-span-2';
	return (
		<button
			onClick={() => props.handleClick(props.name)}
			name={props.name}
			className={
				colSpan +
				' font-mono outline outline-1 outline-black' +
				' bg-neutral-300 border border-t-white border-r-neutral-500' +
				' border-b-neutral-500 border-l-white py-1' +
				' active:border-t-neutral-500 active:border-r-white active:border-b-white' +
				' active:border-l-neutral-500 active:translate-x-px active:translate-y-px transition-transform duration-5'
			}>
			{props.text}
		</button>
	);
}
