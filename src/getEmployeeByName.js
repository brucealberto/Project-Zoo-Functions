const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const pegaEmpregado = employees.find(
    (employe) =>
      employeeName.includes(employe.firstName)
      || employeeName.includes(employe.lastName),
  );
  return pegaEmpregado;
}

module.exports = getEmployeeByName;
