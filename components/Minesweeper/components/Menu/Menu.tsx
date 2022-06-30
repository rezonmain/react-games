import MenuButton from './MenuButton';

export default function Menu(): JSX.Element {
	return (
		<div className='bg-neutral-300 p-4'>
			<div className=' w-1/3 my-0 mx-auto grid grid-cols-2 gap-4'>
				<MenuButton
					name='beginner'
					text='Beginner'
					gridSpan={2}
					handleClick={(name) => console.log(name)}
				/>
				<MenuButton
					name='intermediate'
					text='Intermediate'
					gridSpan={2}
					handleClick={(name) => console.log(name)}
				/>
				<MenuButton
					name='expert'
					text='Expert'
					gridSpan={2}
					handleClick={(name) => console.log(name)}
				/>
				<MenuButton
					name='custom'
					text='Custom'
					gridSpan={2}
					handleClick={(name) => console.log(name)}
				/>
				<span className=' h-3'></span>
				<MenuButton
					name='stats'
					text='Show stats'
					gridSpan={2}
					handleClick={(name) => console.log(name)}
				/>
				<MenuButton
					name='options'
					text='Options'
					gridSpan={1}
					handleClick={(name) => console.log(name)}
				/>
				<MenuButton
					name='exit'
					text='Exit'
					gridSpan={1}
					handleClick={(name) => console.log(name)}
				/>
			</div>
		</div>
	);
}
