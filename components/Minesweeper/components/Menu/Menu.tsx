import { MenuAction } from '../../lib/mstypes';
import MenuButton from './MenuButton';

interface MenuProps {
	handleClick: (name: MenuAction) => void;
}

export default function Menu(props: MenuProps): JSX.Element {
	return (
		<div className='bg-neutral-300 p-4'>
			<div className=' w-52 my-0 mx-auto grid grid-cols-2 gap-4'>
				<MenuButton
					name='beginner'
					text='Beginner'
					colSpan={2}
					handleClick={props.handleClick}
				/>
				<MenuButton
					name='intermediate'
					text='Intermediate'
					colSpan={2}
					handleClick={props.handleClick}
				/>
				<MenuButton
					name='expert'
					text='Expert'
					colSpan={2}
					handleClick={props.handleClick}
				/>
				<MenuButton
					name='custom'
					text='Custom'
					colSpan={2}
					handleClick={props.handleClick}
				/>
				<span className=' h-1'></span>
				<MenuButton
					name='stats'
					text='Show stats'
					colSpan={2}
					handleClick={props.handleClick}
				/>
				<MenuButton
					name='options'
					text='Options'
					colSpan={1}
					handleClick={props.handleClick}
				/>
				<MenuButton
					name='exit'
					text='Exit'
					colSpan={1}
					handleClick={props.handleClick}
				/>
			</div>
		</div>
	);
}
