import { ActionType, Difficulty, MenuAction } from '../../lib/mstypes';
import MenuButton from './MenuButton';

interface MenuProps {
	handleClick: (action: MenuAction) => void;
}

export default function Menu(props: MenuProps) {
	return (
		<div className='bg-neutral-300 p-4'>
			<div className=' w-52 my-0 mx-auto grid grid-cols-2 gap-4'>
				<MenuButton
					text='Beginner'
					colSpan={2}
					handleClick={() =>
						props.handleClick({
							type: ActionType.InitGame,
							board: {
								size: { x: 9, y: 9 },
								mines: 10,
								difficulty: Difficulty.Beginner,
							},
						})
					}
				/>
				<MenuButton
					text='Intermediate'
					colSpan={2}
					handleClick={() =>
						props.handleClick({
							type: ActionType.InitGame,
							board: {
								size: { x: 16, y: 16 },
								mines: 40,
								difficulty: Difficulty.Intermediate,
							},
						})
					}
				/>
				<MenuButton
					text='Expert'
					colSpan={2}
					handleClick={() =>
						props.handleClick({
							type: ActionType.InitGame,
							board: {
								size: { x: 30, y: 16 },
								mines: 99,
								difficulty: Difficulty.Expert,
							},
						})
					}
				/>
				{/* <MenuButton
					name='custom'
					text='Custom'
					colSpan={2}
					handleClick={props.handleClick}
				/> */}
				<span className=' h-1'></span>
				{/* <MenuButton
					text='Show stats'
					colSpan={2}
					handleClick={() => props.handleClick({ type: ActionType.OpenStats })}
				/>
				<MenuButton
					text='Options'
					colSpan={1}
					handleClick={() =>
						props.handleClick({ type: ActionType.OpenOptions })
					}
				/> */}
				<MenuButton
					text='Exit'
					colSpan={2}
					handleClick={() => props.handleClick({ type: ActionType.Exit })}
				/>
			</div>
		</div>
	);
}
