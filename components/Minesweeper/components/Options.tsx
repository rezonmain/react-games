import { ChangeEvent, Dispatch, useState } from 'react';
import { DispatchAction } from '../lib/mstypes';

interface OptionsProps {
	from: 'menu' | 'titleBar';
	dispatch?: Dispatch<DispatchAction>;
}
export default function Options(props: OptionsProps) {
	const [form, setForm] = useState({
		tileSize: 8,
	});
	const handleChange = (event: ChangeEvent) => {
		const { name, value } = event.target as HTMLInputElement;
		props.dispatch({ type: 'changeTileSize', payload: value });
		setForm((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};
	return (
		<form className='p-3 font-tahoma'>
			<fieldset className='border border-zinc-500 p-3'>
				<legend className=' ml-4'>Board</legend>
				<div>
					<input
						type='range'
						id='tile-sze'
						name='TileSize'
						min='6'
						max='12'
						onChange={handleChange}
						value={form.tileSize}
					/>
					<label htmlFor='volume'>Tile Size: {form.tileSize}</label>
				</div>
			</fieldset>
		</form>
	);
}
