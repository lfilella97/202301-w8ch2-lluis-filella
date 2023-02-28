import { clients } from "./data/clients.js";
import { type Dnis, type Clients } from "./types";

const index = "empty";

const filterByphone = (clients: Clients) =>
  clients.filter((client) => client.phone).map((client) => client.dni);

console.log(filterByphone(clients));
