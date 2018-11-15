function DiceBag() {
  this.maxDice = 10;
  this.dice = [];
  this.upgrade = null;
}

DiceBag.prototype.addDice = function (die) {
  if (this.maxDice > this.dice.length) {
    this.dice.push(die);
    return true;
  }
  return false;
};
DiceBag.prototype.removeDice = function (die) {
  let t = this.dice.indexOf(die);
  if (t !== -1) {
    this.dice.splice(t, 1);
    return true;
  }
  return false;
};
DiceBag.prototype.upgrade = function (u) {
  if (this.upgrade !== null) {
    this.maxDice -= this.upgrade.maxDice;
    this.upgrade = u;
    this.maxDice += this.upgrade.maxDice;
  } else {
    this.upgrade = u;
    this.maxDice += this.upgrade.maxDice;
  }
};
DiceBag.prototype.downgrade = function (u) {
  if (this.upgrade !== null) {
    this.maxDice -= this.upgrade.maxDice;
    this.upgrade = null;
  }
};
