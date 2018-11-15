function IDs() {
  this.dice = 100000000;
  this.diceRing = 200000000;
  this.cups = 300000000;
  this.machines = 400000000;
  this.bagUpgrades = 500000000;
  this.accessories = 600000000;
}

IDs.prototype.newDiceID = function () {
  return this.dice++;
}
IDs.prototype.newDiceRingID = function () {
  return this.diceRing++;
}
IDs.prototype.newCupID = function () {
  return this.cups++;
}
IDs.prototype.newMachineID = function () {
  return this.machines++;
}
IDs.prototype.newBagUpgradeID = function () {
  return this.bagUpgrades++;
}
IDs.prototype.newAccessoryID = function () {
  return this.accessories++;
}

IDs.prototype.generatedDiceCount = function () {
  return this.dice - 100000000;
}
IDs.prototype.generatedDiceRings = function () {
  return this.diceRing - 200000000;
}
IDs.prototype.generatedCupCount = function () {
  return this.cups - 300000000;
}
IDs.prototype.generatedMachines = function () {
  return this.machines - 400000000;
}
IDs.prototype.generatedBagUpgrades = function () {
  return this.bagUpgrades - 500000000;
}
IDs.prototype.generatedAccessoriesCount = function () {
  return this.accessories - 600000000;
}

