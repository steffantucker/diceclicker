export default class Base {
	constructor(name, color, rarity, cost) {
		this.name = name;
		this.color = color;
		this.rarity = rarity;
		this.cost = cost;
	}

	roll = () => {}

	// TODO: paint function in child classes to change rarity?
	paint = newColor => this.color = newColor;
}