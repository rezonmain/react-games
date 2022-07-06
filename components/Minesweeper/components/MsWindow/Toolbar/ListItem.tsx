import { GoCheck } from 'react-icons/go';

interface ListItemProps {
	selected: boolean;
	text: string;
}

export default function ListItem(props: ListItemProps) {
	return (
		<li className='flex flex-row gap-2 items-center px-2'>
			{props.selected ? <GoCheck /> : <span className='w-4'></span>}
			<span>{props.text}</span>
		</li>
	);
}
