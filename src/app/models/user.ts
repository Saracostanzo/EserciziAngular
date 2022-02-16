import{Order} from "./order";
export interface User {
  nome: string,
  cognome: string,
  via: string,
  citta: string,
  orario: Date,
  order?:any
}
