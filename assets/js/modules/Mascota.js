import Animal from "./Animal.js";

export default class Mascota extends Animal {
  constructor(nombre, enfermedad, tipo, telefono, direccion, nombreP) {
    super(tipo, telefono, direccion, nombreP);
    this._nombre = () => nombre;
    this._enfermedad = () => enfermedad;
  }
  get nombre() {
    return this._nombre();
  }
  set nombre(nombre) {
    this._nombre = () => nombre;
  }
  get enfermedad() {
    return this._enfermedad();
  }
  set enfermedad(enfermedad) {
    this._enfermedad = () => enfermedad;
  }
}
