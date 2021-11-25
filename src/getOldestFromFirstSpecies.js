const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function primeiroFunc(id) {
  const procuraFunc = employees.find((employee) => employee.id === id);
  const firstAnimal = procuraFunc.responsibleFor[0];
  return firstAnimal;
}

function primeiroAnimalSpecie(idAnimal) {
  const procuraAnimal = species.find((specie) => specie.id === idAnimal);
  const residents = procuraAnimal.residents.sort((a, b) => b.age - a.age)[0];
  return residents;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const idFirstAnimal = primeiroFunc(id);
  const objAnimal = primeiroAnimalSpecie(idFirstAnimal);
  return Object.values(objAnimal);
}

module.exports = getOldestFromFirstSpecies;
