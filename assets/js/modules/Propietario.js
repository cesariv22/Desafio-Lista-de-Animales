export default class Propietario {
  constructor(telefono, direccion, nombre) {
    this._telefono = () => telefono;
    this._nombreP = () => nombre;
    this._direccion = () => direccion;
  }
  datosPropietario() {
    const datos = `El nombre del dueño es: ${this._nombreP()} El domicilio es: ${this._direccion()} y el número teléfonico de contacto es: ${this._telefono()}  `;
    return datos;
  }
}