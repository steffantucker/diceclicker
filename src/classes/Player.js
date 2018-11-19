import Dice from "./Dice";

export default class PlayerClass {
	constructor() {
		// TODO: attach to playerDie in DiceInterface
		this.playerDie = new Dice();
		this.pips = 0;
		this.clicks = 0;
	}

	click = () => {
		this.pips += this.playerDie.roll();
		this.clicks++;
	};
}
