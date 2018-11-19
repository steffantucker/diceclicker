const rarities = {
	common: 1,
	"less common": 0.9,
	"somewhat uncommon": 0.8,
	"slightly uncommon": 0.7,
	uncommon: 0.6,
	"more uncommon": 0.5,
	"rare-ish": 0.4,
	"kinda rare": 0.3,
	rare: 0.2,
	"mega rare": 0.1,
	"ultra rare": 0.01,
	legendary: 0.001
};

const rarityCount = Object.keys(rarities).reduce((a, v) => a + rarities[v]);

export const generateRarity = () => {
	let rand = Math.random() * rarityCount;
	return Object.keys(rarities).filter(v => {
		if (rarities[v] < rand) return true;
		rand -= rarities[v];
		return false;
	});
};
