function Hand() {
  this.maxDice = 1;
  this.maxRings = 8;
  this.dice = [new Dice()]; // TODO: move to game startup function
  this.diceRings = [];
  this.cup = null;
}

Hand.prototype.roll = function () {
  return this.dice.reduce((a, v) => a + v.roll(), 0) + this.diceRings.reduce((a, v) => a + v.roll(), 0);
}
Hand.prototype.removeDice = function (die) {
  let t = this.dice.indexOf(die);
  if (t !== -1)
    this.dice.splice(t, 1);
}
Hand.prototype.addDice = function (die) {
  if (this.maxDice > this.dice.length)
    this.dice.push(die);
};
Hand.prototype.removeRing = function (ring) {
  let t = this.diceRings.indexOf(ring);
  if (t !== -1)
    this.dicerings.splice(t, 1);
};
Hand.prototype.addRing = function (ring) {
  if (this.maxRings > this.diceRings.length)
    this.dicerings.push(ring);
};
Hand.prototype.upgrade = function (cup) {
  if (this.cup !== null) {
    this.maxDice -= this.cup.maxDice;
    this.cup = cup;
    this.maxDice += this.cup.maxDice;
  } else {
    this.cup = cup;
    this.maxDice += this.cup.maxDice;
  }
};
Hand.prototype.downgrade = function (cup) {
  if (this.cup !== null) {
    this.maxDice -= this.cup.maxDice;
    this.cup = null;
  }
};
