export default function Cell(props) {
	return (
		<div style={props.style} className='_2048-cell'>
			<span className='_2048-text centered'>{props.value}</span>
		</div>
	);
}
