import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './../models/animal.model';

@Pipe({
  name: 'filterAnimalList',
  pure: false
})

export class AnimalListFilterPipe implements PipeTransform {
  transform(input: Animal[], filterType: string) {
    let output: Animal[] = [];
    if (filterType === "all-ages") {
      output = input;
    }
    else {
      input.forEach(function(animal: Animal) {
        if (filterType === "less-than-2" && animal.age < 2 || filterType === "greater-than-2" && animal.age >= 2) {
          output.push(animal);
        }
      });
    }
    return output;
  }
}
