const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function todosAnimais() {
  return species.reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {});
}

function filtraAnimal(especie) {
  return species.filter((specie) => specie.name === especie.specie);
}

function sumMale(especie) {
  const pegaAnimal = filtraAnimal(especie)[0];
  return pegaAnimal.residents.reduce(
    (acc, resident) => (resident.sex === 'male' ? acc + 1 : acc),
    0,
  );
}

function sumFemale(especie) {
  const pegaAnimal = filtraAnimal(especie)[0];
  return pegaAnimal.residents.reduce(
    (acc, resident) => (resident.sex === 'female' ? acc + 1 : acc),
    0,
  );
}

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) return todosAnimais();
  if (animal.sex === undefined) return todosAnimais()[animal.specie];
  if (animal.sex === 'male') return sumMale(animal);
  if (animal.sex === 'female') return sumFemale(animal);
}
module.exports = countAnimals;
