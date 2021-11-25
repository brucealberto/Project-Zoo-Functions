const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // Parte lógica aqui
  return entrants.reduce(
    (acc, entr) => {
      if (entr.age < 18) {
        acc.child += 1;
      }
      if (entr.age < 50 && entr.age >= 18) {
        acc.adult += 1;
      }
      if (entr.age >= 50) {
        acc.senior += 1;
      }
      return acc;
    },
    { child: 0, adult: 0, senior: 0 },
  );
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult: precoAdult, senior: precoSenior, child: precoChild } = prices;
  const totalAdult = precoAdult * countEntrants(entrants).adult;
  const totalChild = precoChild * countEntrants(entrants).child;
  const totalSenior = precoSenior * countEntrants(entrants).senior;
  const totalTotal = totalAdult + totalChild + totalSenior;
  return totalTotal;
}

module.exports = { calculateEntry, countEntrants };
