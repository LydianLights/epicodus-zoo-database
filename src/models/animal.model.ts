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
