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
        if (filterType === "less-than-3" && animal.age < 3 || filterType === "greater-than-3" && animal.age >= 3) {
          output.push(animal);
        }
      });
    }
    return output;
  }
}
