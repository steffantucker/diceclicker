import Base from "./Base";
import { diceName } from "./names";
import { generateRarity } from "./rarities";
import { getColor } from "./colors";

export default class DiceClass extends Base {
	constructor() {
		// TODO: figure out cost
		super(diceName(), getColor(), generateRarity(), 10);
		this.weights = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 };
		this.sides = [1, 2, 3, 4, 5, 6];
		this.weight = 0;
		// TODO: dice layout so heavy weights prefer opposite side of dice rather than decreasing chance of rolling
		this.sides.forEach(key => {
			if (!this.weights[key]) this.weights[key] = 1;
			this.weight += this.weights[key];
		});
		this.lastRoll = 0;
		this.distribution = {};
	}

	roll = () => {
		console.log(this.distribution);
		let rand = Math.random() * this.weight;
		return this.sides.find(v => {
			if (this.weights[v] > rand) {
				if (this.distribution[v]) this.distribution[v]++;
				else this.distribution[v] = 1;
				this.lastRoll = v;
				return true;
			}
			rand -= this.weights[v];
			return false;
		});
	};
}
