import './header.css';
export default function Header() {
	return (
		<header>
			<a href='https://twitter.com/home' className='home-link'>
				<span>RG</span>
			</a>
			<nav>
				<ul className='main-nav'>
					<li>
						<a href='https://twitter.com/home' className='nav-element'>
							HOME
						</a>
					</li>
					<li>
						<a href='https://twitter.com/home' className='nav-element'>
							<svg
								className='nav-icon'
								width='24'
								height='18'
								viewBox='0 0 24 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M17.622 0C15.709 0 15.064 1.382 11.999 1.382C8.99 1.382 8.253 0 6.376 0C1.167 0 0 10.375 0 14.348C0 16.493 0.817 18 2.469 18C5.927 18 5.395 13 9.384 13H14.614C18.603 13 18.071 18 21.529 18C23.181 18 24 16.494 24 14.349C24 10.376 22.831 0 17.622 0ZM7 10C5.343 10 4 8.657 4 7C4 5.343 5.343 4 7 4C8.657 4 10 5.343 10 7C10 8.657 8.657 10 7 10ZM17 4C17.552 4 18 4.447 18 5C18 5.553 17.552 6 17 6C16.448 6 16 5.553 16 5C16 4.447 16.448 4 17 4ZM15 8C14.448 8 14 7.553 14 7C14 6.447 14.448 6 15 6C15.552 6 16 6.447 16 7C16 7.553 15.552 8 15 8ZM17 10C16.448 10 16 9.553 16 9C16 8.447 16.448 8 17 8C17.552 8 18 8.447 18 9C18 9.553 17.552 10 17 10ZM19 8C18.448 8 18 7.553 18 7C18 6.447 18.448 6 19 6C19.552 6 20 6.447 20 7C20 7.553 19.552 8 19 8ZM8.75 7C8.75 7.965 7.965 8.75 7 8.75C6.035 8.75 5.25 7.965 5.25 7C5.25 6.035 6.035 5.25 7 5.25C7.965 5.25 8.75 6.035 8.75 7Z' />
							</svg>
							<span>GAMES</span>
						</a>
					</li>
					<li>
						<a href='https://twitter.com/home' className='nav-element'>
							<svg
								className='nav-icon'
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M9.997 19.995C15.515 19.995 19.995 15.515 19.995 9.997C19.995 4.479 15.515 0 9.997 0C4.48 0 0 4.479 0 9.997C0 15.515 4.48 19.995 9.997 19.995ZM9.997 11.995C9.583 11.995 9.247 11.659 9.247 11.245V5.745C9.247 5.331 9.583 4.995 9.997 4.995C10.411 4.995 10.747 5.331 10.747 5.745V11.245C10.747 11.659 10.411 11.995 9.997 11.995ZM9.995 14.995C9.443 14.995 8.995 14.547 8.995 13.995C8.995 13.443 9.443 12.995 9.995 12.995C10.547 12.995 10.995 13.443 10.995 13.995C10.995 14.547 10.547 14.995 9.995 14.995Z' />
							</svg>
							<span>ABOUT</span>
						</a>
					</li>
					<li>
						<a
							href='https://github.com/rezonmain/react-games'
							className='nav-element'>
							<svg
								className='nav-icon'
								width='20'
								height='19'
								viewBox='0 0 20 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M10 0C4.47833 0 0 4.36116 0 9.74016C0 14.0437 2.865 17.6946 6.83917 18.9828C7.33833 19.0729 7.5 18.7709 7.5 18.5144V16.7011C4.71833 17.2904 4.13917 15.5518 4.13917 15.5518C3.68417 14.426 3.02833 14.1265 3.02833 14.1265C2.12083 13.5218 3.0975 13.5348 3.0975 13.5348C4.10167 13.6029 4.63 14.5388 4.63 14.5388C5.52167 16.0274 6.96917 15.5972 7.54 15.3481C7.62917 14.719 7.88833 14.2888 8.175 14.0461C5.95417 13.7986 3.61917 12.9633 3.61917 9.23205C3.61917 8.16794 4.01 7.29944 4.64917 6.61763C4.54583 6.37169 4.20333 5.38063 4.74667 4.03973C4.74667 4.03973 5.58667 3.77837 7.4975 5.0381C8.295 4.82219 9.15 4.71424 10 4.71018C10.85 4.71424 11.7058 4.82219 12.505 5.0381C14.4142 3.77837 15.2525 4.03973 15.2525 4.03973C15.7967 5.38144 15.4542 6.3725 15.3508 6.61763C15.9925 7.29944 16.38 8.16875 16.38 9.23205C16.38 12.9731 14.0408 13.7969 11.8142 14.038C12.1725 14.34 12.5 14.9325 12.5 15.8416V18.5144C12.5 18.7734 12.66 19.0777 13.1675 18.982C17.1383 17.6922 20 14.0421 20 9.74016C20 4.36116 15.5225 0 10 0Z' />
							</svg>
							<span>GITHUB</span>
						</a>
					</li>
				</ul>
			</nav>
			<span></span>
		</header>
	);
}
