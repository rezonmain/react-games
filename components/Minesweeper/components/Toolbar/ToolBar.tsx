import { Dispatch, useRef, useState } from 'react';
import useOutsideClick from '../../lib/hooks/useOutsideClick';
import { Difficulty, DispatchAction, Game } from '../../lib/mstypes';
import ListItem from './ListItem';

interface ToolBarProps {
	dispatch: Dispatch<DispatchAction>;
	game: Game;
}
export default function ToolBar(props: ToolBarProps) {
	const [showDropDown, setShowDropDown] = useState(false);

	// Closes the Game toolbar dialog box when an click outside of it is detected
	const elementRef = useRef<HTMLDivElement>(null);
	useOutsideClick(elementRef, setShowDropDown);

	return (
		<div id='tool-bar' className='flex flex-row justify-start h-6 gap-1'>
			<div id='drop-down-container relative'>
				<span
					onClick={() => setShowDropDown(true)}
					className={
						showDropDown
							? ' windows-style-deboss border px-3'
							: 'border hover:cursor-pointer border-neutral-300 hover:windows-style-box hover:border px-3 active:windows-style-deboss active:border'
					}>
					<u>G</u>ame
				</span>
				{showDropDown && (
					<div
						ref={elementRef}
						id='drop-down'
						className='windows-style-box border-[2px] absolute top-15 z-10  bg-neutral-300 w-fit transition-all overflow-hidden'>
						<ul>
							<ListItem
								selected={false}
								text='New'
								handleClick={() => {
									props.dispatch({
										type: 'newGame',
										payload: props.game.difficulty,
									});
									setShowDropDown(false);
								}}
							/>
							<hr className='m-1'></hr>
							<ListItem
								selected={props.game.difficulty === Difficulty.Beginner}
								text='Beginner'
								handleClick={() => {
									props.dispatch({
										type: 'newGame',
										payload: Difficulty.Beginner,
									});
									setShowDropDown(false);
								}}
							/>
							<ListItem
								selected={props.game.difficulty === Difficulty.Intermediate}
								text='Intermediate'
								handleClick={() => {
									props.dispatch({
										type: 'newGame',
										payload: Difficulty.Intermediate,
									});
									setShowDropDown(false);
								}}
							/>
							<ListItem
								selected={props.game.difficulty === Difficulty.Expert}
								text='Expert'
								handleClick={() => {
									props.dispatch({
										type: 'newGame',
										payload: Difficulty.Expert,
									});
									setShowDropDown(false);
								}}
							/>
							<ListItem
								selected={props.game.difficulty === Difficulty.Custom}
								text='Custom...'
								handleClick={() => {
									props.dispatch({
										type: 'newGame',
										payload: Difficulty.Custom,
									});
									setShowDropDown(false);
								}}
							/>
							<hr className='m-1'></hr>
							<ListItem
								selected={false}
								text='Best times...'
								handleClick={() => {
									props.dispatch({
										type: 'newGame',
										payload: Difficulty.Beginner,
									});
									setShowDropDown(false);
								}}
							/>
						</ul>
					</div>
				)}
			</div>
			<span>
				<u>H</u>elp
			</span>
		</div>
	);
}
