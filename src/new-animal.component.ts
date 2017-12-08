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
    let sex: Sex = this.parseSex(formData.sex);
    let diet: Diet = this.parseDiet(formData.diet);
    let location: string = formData.location;
    let caretakers: number = parseFloat(formData.caretakers);
    let likes: string[] = this.parseStringList(formData.likes);
    let dislikes: string[] = this.parseStringList(formData.dislikes);

    let newAnimal = new Animal(species, name, age, sex, diet, location, caretakers, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }

  parseSex(input: string) {
    if (input === 'male') {return Sex.Male;}
    if (input === 'female') {return Sex.Female;}
  }
  parseDiet(input: string) {
    if (input === 'carnivore') {return Diet.Carnivore;}
    if (input === 'herbivore') {return Diet.Herbivore;}
    if (input === 'omnivore') {return Diet.Omnivore;}
  }
  parseStringList(input: string) {
    return input.split(',');
  }
}
