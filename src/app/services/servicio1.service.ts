/*
IMPLEMENTANDO EL PATRON SINGLETON EN UN SERVICIO DE ANGULAR 2+
*/

import { Injectable } from '@angular/core';

@Injectable()
export class Servicio1Service {

  // Variable private static donde se almacena la instancia a la clase
  // Uan variable o un método static puede ser accedido a través del nombre de la clase sin haber sido instanciada.
  private static _instance: Servicio1Service;

  private data = [
    { 'nombre': 'Pepe Lopez',
      'edad': 40 },
    { 'nombre': 'Juan González',
      'edad': 33 },
    { 'nombre': 'Jeremías Frunch',
      'edad': 25 },
    { 'nombre': 'Gregorio Díaz',
      'edad': 54 }
  ];

  // Se declara el constructor como private
  private constructor() { }

  // Getter public stacic que retorna la instancia de la clase (si no existe la crea).
  public static get instance() {
    return this._instance || ( this._instance = new this() );
  }

  public getData() {

    return new Promise( (resolve ) => {
          resolve( this.data );
    });
  }

}
