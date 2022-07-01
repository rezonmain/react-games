import { Coordinates, MenuAction } from '../../lib/mstypes';

interface MenuButtonProps {
	text: string;
	colSpan: number;
	handleClick: () => void;
}
export default function MenuButton(props: MenuButtonProps): JSX.Element {
	const colSpan = props.colSpan === 1 ? 'col-span-1' : 'col-span-2';
	return (
		<button
			onClick={props.handleClick}
			className={colSpan + ' windows-style-button'}>
			{props.text}
		</button>
	);
}
