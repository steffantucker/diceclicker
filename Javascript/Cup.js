function Cup() {
  this.id = allIDs.newCupID();
  if (this.id === 300000001) {
    this.maxDice = 1;
    this.name = 'n00b cup';
    this.rarity = 'super common';
    this.cost = 100;
    this.sellCost = 100;
  } else { // TODO: finish generation
    this.maxDice
    this.name
    this.rarity
    this.cost
    this.sellCost = this.cost * 0.9;
  }
}
