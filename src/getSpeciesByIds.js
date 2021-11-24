const data = require("../data/zoo_data");

function getSpeciesByIds(id1, id2) {
  // seu código aqui
  const buscaEpecies = data.species.filter(
    (specie) => specie.id === id1 || specie.id === id2
  );
  return buscaEpecies;
}

module.exports = getSpeciesByIds;
