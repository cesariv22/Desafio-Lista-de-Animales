import Propietario from "./Propietario.js";

export default class Animal extends Propietario {
  constructor(tipo, telefono, direccion, nombreP) {
    super(telefono, direccion, nombreP);
    this._tipo = () => tipo;
  }
  get tipo() {
    return `${this._tipo()}`;
  }
}