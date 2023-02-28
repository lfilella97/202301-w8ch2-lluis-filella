import { type Dnis, type Clients, type ClientsResume } from "./../types";

export const filterByPhone = (clients: Clients): Dnis =>
  clients.filter((client) => client.phone).map((client) => client.dni);

export const filterByMinWageSalary = (
  clients: Clients,
  minWageSalary: number
): ClientsResume =>
  clients
    .filter((client) => client.averageAnualBalance < minWageSalary)
    .map((client) => ({
      dni: client.dni,
      nameSurnames: `${client.name} ${client.firstSurname} ${client.secondSurname}`,
      averageBalance: client.averageAnualBalance,
    }));

export const getWagesAverage = (clientsResume: ClientsResume): number =>
  clientsResume
    .map((client) => client.averageBalance)
    .reduce((total, clientBalance) => total + clientBalance, 0);
