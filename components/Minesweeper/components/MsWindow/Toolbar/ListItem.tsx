import { GoCheck } from 'react-icons/go';

interface ListItemProps {
	selected: boolean;
	text: string;
	handleClick: () => void;
}

export default function ListItem(props: ListItemProps) {
	return (
		<li
			onClick={props.handleClick}
			className='flex flex-row gap-2 items-center px-2 select-none hover:bg-blue-700'>
			{props.selected ? <GoCheck /> : <span className='w-4'></span>}
			<span>{props.text}</span>
		</li>
	);
}
