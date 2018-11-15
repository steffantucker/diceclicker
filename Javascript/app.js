var totalPips = 0;
var storeInterval = null;

var allStats = new Stats();
var allIDs = new IDs();
var dice = new Dice();
var hand = new Hand();
var bag = new DiceBag();
var store = new Store();

// lazy hack to put default dice in bag
bag.addDice(hand.dice[0]);

const inventoryTab = (tab, e, c) => {
  if (storeInterval !== null)
    clearInterval(storeInterval);
  let tabs = document.getElementsByClassName('tab');
  for (let i = 0; i < tabs.length; i++)
    tabs[i].style.display = 'none';
  let tablinks = document.getElementsByClassName('tablink');
  for (let i = 0; i < tablinks.length; i++)
    tablinks[i].style.backgroundColor = '';
  document.getElementById(tab).style.display = 'block';
  document.getElementById(tab + 'store').style.display = 'block';
  e.style.backgroundColor = c;

  storeInterval = window.setInterval(`draw${tab}Store`, 100);
}

const clickRoll = () => {
  let roll = hand.roll();
  document.getElementById('handroll').innerHTML = roll;
  allStats.rollTotal += hand.dice.length;
  allStats.handRolls++;
  addTotal(roll);
}

const addTotal = n => {
  totalPips += n;
  allStats.totalPips += n;
  document.getElementById('total').innerHTML = totalPips;
}

function populateDicebag() {
  document.getElementById('dice').innerHTML = '';
  for (let i = 0; i < bag.dice.length; i++) {
    let t = document.createElement('div');
    t.id = bag.dice[0].id;
    t.className = 'die';
    t.innerHTML += '<div class=\'die\'>';
    t.innerHTML += '<h3>' + bag.dice[i].name + '</h3>'
    t.innerHTML += bag.dice[i].sideCount + ' sides<br />';
    for (let n in bag.dice[i].sides)
      t.innerHTML += n + ' ';
    t.innerHTML += '<br />';
    t.innerHTML += 'Cost: <b>' + bag.dice[i].cost + '</b> pips';
    // TODO: add click listener
    document.getElementById('dice').appendChild(t);
  }
  //  let bagDisplay = document.getElementById('dice');
  //  bagDisplay.innerHTML = '';
  //  for (let i = 0; i < bag.dice.length; i++) {
  //    let t = '<div class=\'die\'>';
  //    t += '<h3>' + bag.dice[i].name + '</h3>'
  //    t += bag.dice[i].sideCount + ' sides<br />';
  //    for (let n in bag.dice[i].sides)
  //      t += n + ' ';
  //    t += '<br />';
  //    t += 'Cost: <b>' + bag.dice[i].cost + '</b> pips';
  //    t += '</div>';
  //    bagDisplay.innerHTML += t;
  //  }
}

const debugAddDice = () => {
  bag.addDice(new Dice());
  populateDicebag();
}

function drawdiceStore() {
  for (let i = 0; i < store.dice.length; i++) {
    let t = document.createElement('div');
    t.id = bag.dice[i].id;
    t.className = 'die';
    t.innerHTML += '<div class=\'die\'>';
    t.innerHTML += '<h3>' + bag.dice[i].name + '</h3>'
    t.innerHTML += bag.dice[i].sideCount + ' sides<br />';
    for (let n in bag.dice[i].sides)
      t.innerHTML += n + ' ';
    t.innerHTML += '<br />';
    t.innerHTML += 'Sell: <b>' + bag.dice[i].sellCost + '</b> pips';
    // TODO: add click listener
    document.getElementById('dicestore').appendChild(t);
    t.addEventListener('click', hand.addDice, bag.dice[i]);
  }
}

document.getElementById('default').click();
window.addEventListener('click', clickRoll);
populateDicebag();
