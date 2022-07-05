import { ChangeEvent, Dispatch, useState } from 'react';
import { DispatchAction } from '../lib/mstypes';

interface OptionsProps {
	from: 'menu' | 'titleBar';
	dispatch: Dispatch<DispatchAction>;
}
export default function Options(props: OptionsProps) {
	const [form, setForm] = useState({
		tileSize: 2,
	});
	const handleChange = (event: ChangeEvent) => {
		const { name, value } = event.target as HTMLInputElement;
		props.dispatch({
			type: name,
			payload: { tileSize: parseFloat(value), dispatch: props.dispatch },
		});
		setForm((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};
	return (
		<form className='p-3 font-tahoma absolute bg-neutral-300 -right-full'>
			<fieldset className='border border-zinc-500 p-3'>
				<legend className=' ml-4'>Board</legend>
				<div>
					<input
						type='range'
						id='tile-sze'
						name='tileSize'
						min='1.50'
						max='3'
						step='0.05'
						onChange={handleChange}
						value={form.tileSize}
					/>
					<label htmlFor='volume'>Tile Size: {form.tileSize}</label>
				</div>
			</fieldset>
		</form>
	);
}
