import './header.css';
export default function Header() {
	return (
		<header>
			<a href='https://twitter.com/home' className='home-link'>
				RG
			</a>
			<nav className='main-nav'>
				<a href='https://twitter.com/home' className='nav-element'>
					HOME
				</a>
				<a href='https://twitter.com/home' className='nav-element'>
					GAMES
				</a>
				<a href='https://twitter.com/home' className='nav-element'>
					ABOUT
				</a>
			</nav>
			<span className='not-visible'></span>
		</header>
	);
}
