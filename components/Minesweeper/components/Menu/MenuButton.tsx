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
			className={colSpan + ' windows-style-button'}>
			{props.text}
		</button>
	);
}
