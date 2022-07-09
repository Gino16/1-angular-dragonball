import { Component } from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {


  personajes: Personaje[] = [{
    nombre: 'Goku',
    poder: 9001,
  },
  {
    nombre: 'Vegeta',
    poder: 9002,
  },
  {
    nombre: 'Trunks',
    poder: 9003,
  }];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar(personaje: Personaje) {
    this.personajes.push(personaje);
  }

}
