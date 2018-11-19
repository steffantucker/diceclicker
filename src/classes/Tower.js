import Base from "./Base";
import { towerName } from "./names";
import { generateRarity } from "./rarities";
import { getColor } from "./colors";

export default class Tower extends Base {
	constructor() {
		// TODO: generate cost
		super(towerName(), getColor(), generateRarity(), 10);

		this.dice = dice || [];

		this.maxDice = maxDice || 5;
	}

	roll = () => this.dice.reduce((a, die) => a + die.roll(), 0);

	// Takes in a dice object
	// returns true if the die was added to the tower
	// return false if the die couldn't be added
	addDie = die => {
		if (this.dice.length < this.maxDice) {
			this.dice.push(die);
			return true;
		}
		return false;
	};

	removeDie = die => {};
}
