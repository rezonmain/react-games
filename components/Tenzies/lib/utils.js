import { nanoid } from 'nanoid';

// Generate 10 dice objects with random values
export function allNewDice() {
	const diceValues = Array.from({ length: 10 }, () => getRandomDieValue());
	return diceValues.map((number) => ({
		id: nanoid(),
		value: number,
		isHeld: false,
	}));
}

export function getNewDie() {
	return {
		id: nanoid(),
		value: getRandomDieValue(),
		isHeld: false,
	};
}

export function checkWin(dice) {
	// If every die value is the same, and every die is held return true
	const condition = (die) => die.value === dice[0].value && die.isHeld;
	return dice.every(condition);
}

function getRandomDieValue() {
	return Math.ceil(Math.random() * 6);
}
