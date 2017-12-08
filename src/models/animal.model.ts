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

    static parseSex(input: string) {
      if (input === 'male') {return Sex.Male;}
      if (input === 'female') {return Sex.Female;}
    }
    static parseDiet(input: string) {
      if (input === 'carnivore') {return Diet.Carnivore;}
      if (input === 'herbivore') {return Diet.Herbivore;}
      if (input === 'omnivore') {return Diet.Omnivore;}
    }
    static parseStringList(input: string) {
      return input.split(',');
    }

    editSpecies(input: string) {
      this.species = input;
    }
    editName(input: string) {
      this.name = input;
    }
    editAge(input: string) {
      this.age = parseFloat(input);
    }
    editSex(input: string) {
      this.sex = Animal.parseSex(input);
    }
    editDiet(input: string) {
      this.diet = Animal.parseDiet(input);
    }
    editLocation(input: string) {
      this.location = input;
    }
    editCaretakers(input: string) {
      this.caretakers = parseInt(input);
    }
    editLikes(input: string) {
      this.likes = Animal.parseStringList(input);
    }
    editDislikes(input: string) {
      this.dislikes = Animal.parseStringList(input);
    }

    getDietAsString() {
      if (this.diet === Diet.Carnivore) {return "Carnivore";}
      if (this.diet === Diet.Herbivore) {return "Herbivore";}
      if (this.diet === Diet.Omnivore) {return "Omnivore";}
      return "";
    }
    getSexAsString() {
      if (this.sex === Sex.Male) {return "Male";}
      if (this.sex === Sex.Female) {return "Female";}
      return "";
    }
    getLikesAsString() {
      let output: string = "";
      for (let i = 0; i < this.likes.length; i++) {
        output += (i > 0) ? this.likes[i].toLowerCase() : this.likes[i];
        if (i < this.likes.length - 1) {
          output += ", ";
        }
      }
      return output;
    }
    getDislikesAsString() {
      let output: string = "";
      for (let i = 0; i < this.dislikes.length; i++) {
        output += (i > 0) ? this.dislikes[i].toLowerCase() : this.dislikes[i];
        if (i < this.dislikes.length - 1) {
          output += ", ";
        }
      }
      return output;
    }
}
