import Base from "./Base";

export default class Tower extends Base {
  constructor(
    { dice, maxDice },
    name = null,
    color = null,
    rarity = null,
    cost = null
  ) {
    if (!color || !rarity || !cost || !name) {
      // generate color, rarity, cost
    }
    super(name, color, rarity, cost);

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
	
	removeDie = die => {
		
	}
}
