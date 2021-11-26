const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const principalAnswer = () => {
  const diaSemana = Object.entries(hours);
  return diaSemana.reduce((acc, dias) => {
    const [dia, horaFuncionamento] = dias;
    let msgHorario = `Open from ${horaFuncionamento.open}am until ${horaFuncionamento.close}pm`;
    let msgExibicao = species
      .filter((specie) => specie.availability.some((day) => day === dia))
      .map((n) => n.name);
    if (dia === 'Monday') {
      msgHorario = 'CLOSED';
      msgExibicao = 'The zoo will be closed!';
    }
    acc[dia] = {
      officeHour: msgHorario,
      exhibition: msgExibicao,
    };
    return acc;
  }, {});
};
function dayExhibition(animal) {
  return species.find((specie) => specie.name === animal).availability;
}
function getSchedule(scheduleTarget) {
  // seu código aqui
  const arrayAnimais = species.map((specie) => specie.name);
  if (!scheduleTarget) return principalAnswer();
  if (Object.keys(hours).includes(scheduleTarget)) {
    const valor = principalAnswer()[scheduleTarget];
    return { [scheduleTarget]: valor };
  }
  if (arrayAnimais.includes(scheduleTarget)) {
    return dayExhibition(scheduleTarget);
  }
  return principalAnswer();
}
module.exports = getSchedule;
