function DiceRing() {
  this.id = allIDs.newDiceRingID();
  if (this.id = 200000001) {
    this.name = 'n00b ring';
    this.sideCount = 10;
    this.sides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.rarity = 'super common';
    this.cost = 600;
    this.sellCost = 600;
    this.sticky = 0;
  } else { // TODO: finish generation
    this.name
    this.sideCount
    this.sides
    this.rarity
    this.cost
    this.sellCost
    this.sticky
  }
}

DiceRing.prototype.roll = function () { // TODO: implement sticky
  return this.sides[Math.floor(Math.random() * this.sideCount)];
}
