import Head from 'next/head';
import CardContainer from '../components/HomePage/CardContainer';
import Hero from '../components/HomePage/Hero';

export default function Home() {
	return (
		<>
			<Head>
				<title>React Games</title>
			</Head>
			<Hero />
			<CardContainer />
		</>
	);
}
