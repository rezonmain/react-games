import { Coordinates, MenuAction } from '../../lib/mstypes';
import MenuButton from './MenuButton';

interface MenuProps {
	handleClick: (action: MenuAction, size?: Coordinates, diff?: string) => void;
}

export default function Menu(props: MenuProps): JSX.Element {
	return (
		<div className='bg-neutral-300 p-4'>
			<div className=' w-52 my-0 mx-auto grid grid-cols-2 gap-4'>
				<MenuButton
					text='Beginner'
					colSpan={2}
					handleClick={() =>
						props.handleClick('initGame', { x: 9, y: 9 }, 'beginner')
					}
				/>
				<MenuButton
					text='Intermediate'
					colSpan={2}
					handleClick={() =>
						props.handleClick('initGame', { x: 16, y: 16 }, 'intermediate')
					}
				/>
				<MenuButton
					text='Expert'
					colSpan={2}
					handleClick={() =>
						props.handleClick('initGame', { x: 30, y: 16 }, 'expert')
					}
				/>
				{/* <MenuButton
					name='custom'
					text='Custom'
					colSpan={2}
					handleClick={props.handleClick}
				/> */}
				<span className=' h-1'></span>
				<MenuButton
					text='Show stats'
					colSpan={2}
					handleClick={() => props.handleClick('openStats')}
				/>
				<MenuButton
					text='Options'
					colSpan={1}
					handleClick={() => props.handleClick('openOptions')}
				/>
				<MenuButton
					text='Exit'
					colSpan={1}
					handleClick={() => props.handleClick('exit')}
				/>
			</div>
		</div>
	);
}
