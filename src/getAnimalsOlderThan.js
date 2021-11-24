const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui

  const animalVelho = species
    .filter((specie) => specie.name === animal)[0]
    .residents.every((resident) => resident.age > age);
  return animalVelho;
  // return pegaAnimal[0].residents.every( (resident) => resident.age > age)
}

module.exports = getAnimalsOlderThan;
