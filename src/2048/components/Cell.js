export default function Cell(props) {
	return (
		<div className='_2048-cell'>
			<span className='_2048-text centered'>{props.value}</span>
		</div>
	);
}
