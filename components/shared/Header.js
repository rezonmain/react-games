import Link from 'next/link';
import NavElement from './NavElement';
import {
	BsFillHouseDoorFill,
	BsFillQuestionCircleFill,
	BsGithub,
} from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';
import styles from './header.module.css';

export default function Header() {
	return (
		<header className={styles['main-header']}>
			<Link href='/'>
				<a className={styles['home-link']}>
					<span>RG</span>
				</a>
			</Link>
			<nav className={styles['nav']}>
				<ul className={styles['main-nav']}>
					<li>
						<Link href='/' passHref>
							<NavElement
								text='home'
								icon={<BsFillHouseDoorFill size='24' />}
							/>
						</Link>
					</li>
					<li>
						<Link href='/games' passHref>
							<NavElement text='games' icon={<IoGameController size='24' />} />
						</Link>
					</li>
					<li>
						<Link href='/about' passHref>
							<NavElement
								text='about'
								icon={<BsFillQuestionCircleFill size='24' />}
							/>
						</Link>
					</li>
					<li>
						{' '}
						<Link href='https://github.com/rezonmain/react-games' passHref>
							<NavElement text='github' icon={<BsGithub size='24' />} />
						</Link>
					</li>
				</ul>
			</nav>
			<span></span>
		</header>
	);
}
