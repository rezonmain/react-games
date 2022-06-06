export default function Die(props) {
	const styles = {
		backgroundColor: props.isHeld ? '#F2CB05' : 'white',
	};
	return (
		<div
			style={styles}
			onClick={props.handleClick}
			className='die-box bordered'>
			<span className='die-text'>{props.value}</span>
		</div>
	);
}
