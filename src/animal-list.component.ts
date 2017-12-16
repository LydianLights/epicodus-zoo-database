import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal, Diet, Sex} from './models/animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: 'src/templates/animal-list.html'
})

export class AnimalListComponent {
  @Input() animalList: Animal[];
  filterType: string = "all-ages";
}
