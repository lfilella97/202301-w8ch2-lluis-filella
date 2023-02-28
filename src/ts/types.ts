export interface Client {
  dni: string;
  name: string;
  firstSurname: string;
  secondSurname: string;
  averageAnualBalance: number;
  maxAnualBalance: number;
  isDirectPaycheque: boolean;
  phone: string;
  mobile: string;
}

export type Clients = Client[];
export type Dnis = Array<Client["dni"]>;
