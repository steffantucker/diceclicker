function Machine() {
  this.id = allIDs.newMachineID();
  if (this.id === 400000001) {
    this.maxDice = 5;
    this.cheat = 0;
    this.sticky = 0.5;
    this.name = 'n00b machine';
    this.cost = 500;
    this.sellCost = 500;
    this.rate = 1000
    this.timer = null;
  } else {}
  this.dice = [];
}

Machine.prototype.roll = function () {
  this.dice.reduce((a, v) => {
    if (Math.random() > this.sticky)
      return a + v.roll();
    else {
      allStats.numDiceStuck++;
      return a;
    }
  })
}; // TODO: implement cheat
Machine.prototype.addDice = function (die) {
  if (this.maxDice > this.dice.length)
    this.dice.push(die);
}
Machine.prototype.removeDice = function (die) {
  let t = this.dice.indexOf(die);
  if (t !== -1)
    this.dice.slice(t, 1);
}
Machine.prototype.equip = function () {
  return this.timer = window.setInterval(this.roll, this.interval);
}
Machine.prototype.unequip = function () {
  return window.clearInterval(this.timer);
}
