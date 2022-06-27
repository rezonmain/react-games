import styles from '../tenzies.module.css';
export default function Die(props) {
	const conditionalStyle = {
		backgroundColor: props.isHeld ? '#F2CB05' : 'white',
	};
	return (
		<div
			style={conditionalStyle}
			onClick={props.handleClick}
			className={styles['die-box']}>
			<span className={styles['die-text']}>{props.value}</span>
		</div>
	);
}
