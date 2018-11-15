function Inventory() {
  this.cups = [];
  this.machines = [];
  this.diceBagUpgrades = [];
  this.accessories = [];
}

Inventory.prototype.add = function (item) {
  let t = Math.floor(item.id / 100000000);
  switch (t) {
    case 3:
      if (this.cups.indexOf(item) !== -1)
        this.cups.push(item);
      break;
    case 4:
      if (this.machines.indexOf(item) !== -1)
        this.machines.push(item);
      break;
    case 5:
      if (this.diceBagUpgrades.indexOf(item) !== -1)
        this.diceBagUpgrades.push(item);
      break;
    case 6:
      if (this.accessories.indexOf(item) !== -1)
        this.accessories.push(item);
  }
};
Inventory.prototype.remove = function (item) {
  let t = Math.floor(item.id / 100000000);
  switch (t) {
    case 3:
      if (this.cups.indexOf(item) !== -1)
        this.cups.slice(this.cups.indexOf(item), 1);
      break;
    case 4:
      if (this.machines.indexOf(item) !== -1)
        this.machines.slice(this.machines.indexOf(item), 1);
      break;
    case 5:
      if (this.diceBagUpgrades.indexOf(item) !== -1)
        this.diceBagUpgrades.slice(this.diceBagUpgrades.indexOf(item), 1);
      break;
    case 6:
      if (this.accessories.indexOf(item) !== -1)
        this.accessories.slice(this.accessories.indexOf(item), 1);
  }
};
