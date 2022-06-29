import Head from 'next/head';
import GameMenu from '../components/HomePage/GameMenu';
import Hero from '../components/HomePage/Hero';

export default function Home() {
	return (
		<>
			<Head>
				<title>React Games</title>
			</Head>
			<Hero />
			<GameMenu />
		</>
	);
}
