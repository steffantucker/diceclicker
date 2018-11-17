const diceNames = [
  "simple dice",
  "regular dice",
  "round dice",
  "barrel dice",
  "used dice",
  "bad dice",
  "great dice",
  "okay dice",
  "big dice",
  "tiny dice",
  "hollow dice",
  "glass dice",
  "stone dice"
];

export const diceName = () => diceNames[Math.floor(Math.random() * diceNames.length)]

const towerNames = [
	"Lichtenstein castle",
	"London tower",
	"simple tower",
	"tall tower",
	"short tower",
	"wide tower",
	"famous tower",
	"silent tower",
	"lighthouse",
	"radio tower"
];

export const towerName = () => towerNames[Math.floor(Math.random() * towerNames.length)]