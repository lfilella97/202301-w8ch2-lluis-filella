import { clients } from "./data/clients.js";
import { filterByMinWageSalary, getWagesAverage } from "./utils/utils.js";

const minWageAverage = 5000;
const wagesAverage = getWagesAverage(
  filterByMinWageSalary(clients, minWageAverage)
);

console.log(
  `El saldo medio promedio de los clientes con nómina y con saldo medio menor a ${minWageAverage}€ es: ${wagesAverage}€`
);
