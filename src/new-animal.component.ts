import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal, Diet, Sex} from './models/animal.model';

@Component({
  selector: 'new-animal',
  templateUrl: 'src/templates/new-animal.html'
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitNewAnimal(formData) {
    let species: string = formData.species;
    let name: string = formData.name;
    let age: number = parseFloat(formData.age);
    let sex: Sex = Animal.parseSex(formData.sex);
    let diet: Diet = Animal.parseDiet(formData.diet);
    let location: string = formData.location;
    let caretakers: number = parseInt(formData.caretakers);
    let likes: string[] = Animal.parseStringList(formData.likes);
    let dislikes: string[] = Animal.parseStringList(formData.dislikes);

    let newAnimal = new Animal(species, name, age, sex, diet, location, caretakers, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
