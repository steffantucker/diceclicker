function Dice() {
  this.id = allIDs.newDiceID();
  if (this.id === 100000001) {
    this.sideCount = 6;
    this.sides = [1, 2, 3, 4, 5, 6];
    this.name = 'n00b die';
    this.rarity = 'super common';
    this.cost = 1;
    this.sellCost = 1;
  } else { // TODO: finish generation
    this.sideCount = [6, 8, 10, 12, 20, 100][Math.floor(Math.random() * 6)];
    this.sides = Array(this.sideCount.length);
    this.name
    this.rarity
    this.cost
    this.sellCost = Math.ceil(this.cost * 0.9);
  }
}

Dice.prototype.roll = function () {
  return this.sides[Math.floor(Math.random() * this.sideCount)];
}
Dice.prototype.next = function (num) {
  return this.sides[this.sides.indexOf(num) + 1];
}
Dice.prototype.rollHighest = function () {
  return Math.max(...this.sides);
}
