import { useEffect, useState } from 'react';
import { allNewDice, checkWin, getNewDie } from './lib/utils';
import Die from './components/Die';
import Confetti from 'react-confetti';
import './tenzies.css';
import { useWindowSize } from 'react-use';

export default function Tenzies() {
	const [dice, setDice] = useState(() => allNewDice());
	const [rollCount, setRollCount] = useState(0);
	const [tenzies, setTenzies] = useState(false);
	const { width, height } = useWindowSize();

	useEffect(() => {
		setTenzies(checkWin(dice));
	}, [dice]);

	const diceElements = dice.map((die) => (
		<Die
			key={die.id}
			value={die.value}
			handleClick={() => holdDice(die.id)}
			isHeld={die.isHeld}
		/>
	));

	function handleRoll() {
		setRollCount((oldCount) => oldCount + 1);
		rollDice();
	}

	// get new die if isHeld is false
	function rollDice() {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.isHeld ? die : getNewDie();
			})
		);
	}

	function holdDice(id) {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	}

	function newGame() {
		setDice(allNewDice());
		setTenzies(false);
	}

	return (
		<section className='bordered section'>
			<h3 className='section-title'>Tenzies</h3>
			<div className='tenzies-container'>
				{tenzies && <Confetti width={width} height={height} />}
				<span>{`ROLLS: ${rollCount}`}</span>
				<div className='dice-container'>{diceElements}</div>
				<button
					onClick={tenzies ? newGame : handleRoll}
					className='roll-button'>
					{tenzies ? 'NEW GAME' : 'ROLL'}
				</button>
			</div>
		</section>
	);
}
