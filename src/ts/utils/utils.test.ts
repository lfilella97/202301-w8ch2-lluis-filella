import { Clients } from "../types";
import { filterByMinWageSalary, filterByPhone, getWagesAverage } from "./utils";

const clients: Clients = [
  {
    dni: "12345678A",
    name: "Juan",
    firstSurname: "García",
    secondSurname: "Pérez",
    averageAnualBalance: 5000,
    maxAnualBalance: 10000,
    isDirectPaycheque: true,
    mobile: "876544567",
    phone: "098765432",
  },
  {
    dni: "87654321B",
    name: "María",
    firstSurname: "González",
    secondSurname: "López",
    averageAnualBalance: 8000,
    maxAnualBalance: 15000,
    isDirectPaycheque: false,
    phone: "987654321",
    mobile: "678909876",
  },
  {
    dni: "34567891C",
    name: "Pedro",
    firstSurname: "Fernández",
    secondSurname: "Martínez",
    averageAnualBalance: 6000,
    maxAnualBalance: 12000,
    isDirectPaycheque: true,
    mobile: "",
    phone: "",
  },
];

describe("Given filterByPhone function", () => {
  describe("When it recieves a list of 3 clients 2 of them with phone number", () => {
    test("Then it should return a list of 2 dni", () => {
      const expectedResult = ["12345678A", "87654321B"];

      const result = filterByPhone(clients);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});

describe("Given filterByMinWageSalary function", () => {
  describe("When it recieves a list of 3 clients, Juan with an averageBalance below 5001", () => {
    test("Then it should return a list with Juan, its dni and his averageBalance", () => {
      const minWageSalary = 5001;

      const expectedResult = [
        {
          averageBalance: 5000,
          dni: "12345678A",
          nameSurnames: "Juan García Pérez",
        },
      ];

      const result = filterByMinWageSalary(clients, minWageSalary);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});

describe("Given getWagesAverage function", () => {
  describe("When it recieves a list of 2 clients resume with average balance 5000 and 8000", () => {
    test("Then it should return 11000 ", () => {
      const clientsResume = [
        {
          averageBalance: 5000,
          dni: "12345678A",
          nameSurnames: "Juan García Pérez",
        },
        {
          averageBalance: 6000,
          dni: "34567891C",
          nameSurnames: "Pedro Fernández Martínez",
        },
      ];

      const expectedResult = 11000;

      const result = getWagesAverage(clientsResume);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});

describe("Given filterByMinWageSalary and getWagesAverage function", () => {
  describe("When they are called recieving a list of 3 clients and minAverage below 8000", () => {
    test("Then it should return 1100", () => {
      const minWageAverage = 8000;
      const expectedResult = 11000;

      const result = getWagesAverage(
        filterByMinWageSalary(clients, minWageAverage)
      );

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
