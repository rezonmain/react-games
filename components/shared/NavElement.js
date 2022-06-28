import styles from './header.module.css';
import React from 'react';

const NavElement = React.forwardRef(({ onClick, href, text, icon }, ref) => {
	return (
		<a
			className={styles['nav-element']}
			href={href}
			onClick={onClick}
			ref={ref}>
			<div className={styles['nav-icon']}>{icon}</div>
			<span>{text}</span>
		</a>
	);
});

export default NavElement;
