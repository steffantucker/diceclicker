import Base from "./Base";
import { diceNames } from "./names";
import { generateRarity } from "./rarities";
import { getColor } from "./colors";

export default class Dice extends Base {
  constructor() {
    super(name, color, rarity, cost);
    this.sides = sides;
    this.weight = 0;
    // TODO: weight will be object with which side is weighted more and the ratio
    // it is weighted more, with 1 being a normal ratio
    // i.e. 20: 0.9 - more likely to roll 20 because it has less weight
    // 20: 1.4 - less likely to roll a 20 because it weighs more
    this.weights = sides.foreach(key => {
      if (!weights[key]) weights[key] = 1;
      this.weight += weights[key];
    });
  }

  roll = () => {
    let rand = Math.random() * this.weight;
    return this.sides.filter(v => {
      if (this.weights[v] < rand) return true;
      rand - this.weights[v];
      return false;
    });
    // TODO: take into account weight
  };
}
