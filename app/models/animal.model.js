"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Diet;
(function (Diet) {
    Diet[Diet["Carnivore"] = 0] = "Carnivore";
    Diet[Diet["Herbivore"] = 1] = "Herbivore";
    Diet[Diet["Omnivore"] = 2] = "Omnivore";
})(Diet = exports.Diet || (exports.Diet = {}));
var Sex;
(function (Sex) {
    Sex[Sex["Male"] = 0] = "Male";
    Sex[Sex["Female"] = 1] = "Female";
})(Sex = exports.Sex || (exports.Sex = {}));
var Animal = (function () {
    function Animal(species, name, age, sex, diet, location, caretakers, likes, dislikes) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.diet = diet;
        this.location = location;
        this.caretakers = caretakers;
        this.likes = likes;
        this.dislikes = dislikes;
    }
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.model.js.map