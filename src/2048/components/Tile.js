export default function Tile(props) {
	return (
		<div className='_2048-tile'>
			<span className='centerd'>{props.value}</span>
		</div>
	);
}
