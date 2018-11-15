function Store() {
  this.dice = [];
  this.cups = [];
  this.machines = [];
  this.stockDice();
  this.stockCups();
  this.stockMachines();
}

Store.prototype.restockDice = function (n) {
  Array.prototype.splice(this.dice, n, 1);
  if (Math.random() < 0.25) {
    Array.prototype.push(this.dice, new DiceRing());
  } else {
    Array.prototype.push(this.dice, new Dice());
  }
  window.setTimeout(this.restockDice, 3000, this.dice.length - 1);
}
Store.prototype.restockCups = function (n) {
  this.cups.splice(n, 1);
  this.cups.push(new Cup());
  window.setTimeout(this.restockCups, 3000, this.cups.length - 1);
}
Store.prototype.restockMachines = function (n) {
  this.machines.splice(n, 1);
  this.machines.push(new Machine());
  window.setTimeout(this.restockMachines, 3000, this.machines.length - 1);
}

Store.prototype.stockDice = function () {
  for (let i = 0; i < 4; i++) {
    this.dice.push(new Dice());
    window.setTimeout(this.restockDice, 3000, i);
  }
  for (let i = 0; i < 2; i++) {
    this.dice.push(new DiceRing());
    window.setTimeout(this.restockDice, 3000, i + 4);
  }
}
Store.prototype.stockCups = function () {
  for (let i = 0; i < 6; i++) {
    this.cups.push(new Cup());
    window.setTimeout(this.restockCups, 3000, i);
  }
}
Store.prototype.stockMachines = function () {
  for (let i = 0; i < 6; i++) {
    this.machines.push(new Machine());
    window.setTimeout(this.restockMachines, 3000, i);
  }
}
