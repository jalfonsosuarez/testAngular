/*
  ACCEDIENDO A UN SERVICIO CON PATRON SINGLETON
*/

import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from './services/servicio1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  // Variable que contrandrá el acceso al servicio.
  public servicio;

  // Variable para los datos en el componente
  public data;

  constructor() {

    // Cargamos la instancia del servicio en la variable local
    this.servicio = Servicio1Service.instance;

  }

  ngOnInit() {
    // Accedemos a los métodos del servicio como siempre.
    this.servicio.getData().then( data => {
      this.data = data;
      console.log( this.data );
    });
  }

}
