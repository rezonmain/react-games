import Image from 'next/image';
import styles from './GameCard.module.css';
import React from 'react';

const GameCard = React.forwardRef(
	({ onClick, href, title, desc, src }, ref) => {
		return (
			<a onClick={onClick} href={href} ref={ref} className={styles.container}>
				<Image className={styles.img} src={src} layout='responsive'></Image>
				<div className={styles.bar}>
					<div className={styles.text}>
						<h2>{title}</h2>
						<hr></hr>
						<p>{desc} &rarr;</p>
					</div>
				</div>
			</a>
		);
	}
);

export default GameCard;
