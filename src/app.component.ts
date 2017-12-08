import {Component} from '@angular/core';
import {Animal, Diet, Sex} from './models/animal.model';

@Component({
  selector: 'app-root',
  templateUrl: 'src/templates/app-root.html'
})

export class AppComponent {
  masterAnimalList: Animal[] = [];
  constructor() {
    this.initializeAnimalList();
  }

  initializeAnimalList() {
    this.masterAnimalList[0] = new Animal(
      'Arctic Fox',
      'Moon',
      2,
      Sex.Female,
      Diet.Carnivore,
      'Northern Trail',
      5,
      ["Cool shade", "Belly rubs"],
      ["Loud noises", "Hot weather"]);

    this.masterAnimalList[1] = new Animal(
      'Ocelot',
      'Prince',
      4,
      Sex.Male,
      Diet.Carnivore,
      'Tropical Rain Forest Building',
      6,
      ["Laying in the sunshine", "Rope-based toys"],
      ["Non-rope-based toys", "Belly Rubs"]);

    this.masterAnimalList[2] = new Animal(
      'Northwest Black Tailed Deer',
      'Tinkerbell',
      8,
      Sex.Female,
      Diet.Herbivore,
      'Northern Trail',
      2,
      ["Delicate roots and leaves"],
      ["Loud noises"]);
  }
}
