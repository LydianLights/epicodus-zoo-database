export enum Diet {
  Carnivore,
  Herbivore,
  Omnivore
}

export enum Sex {
  Male,
  Female
}

export class Animal {
  constructor(
    public species: string,
    public name: string,
    public age: number,
    public sex: Sex,
    public diet: Diet,
    public location: string,
    public caretakers: number,
    public likes: string[],
    public dislikes: string[]) {}
}
