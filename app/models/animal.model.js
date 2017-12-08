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
    Animal.parseSex = function (input) {
        if (input === 'male') {
            return Sex.Male;
        }
        if (input === 'female') {
            return Sex.Female;
        }
    };
    Animal.parseDiet = function (input) {
        if (input === 'carnivore') {
            return Diet.Carnivore;
        }
        if (input === 'herbivore') {
            return Diet.Herbivore;
        }
        if (input === 'omnivore') {
            return Diet.Omnivore;
        }
    };
    Animal.parseStringList = function (input) {
        return input.split(',');
    };
    Animal.prototype.editSpecies = function (input) {
        this.species = input;
    };
    Animal.prototype.editName = function (input) {
        this.name = input;
    };
    Animal.prototype.editAge = function (input) {
        this.age = parseFloat(input);
    };
    Animal.prototype.editSex = function (input) {
        this.sex = Animal.parseSex(input);
    };
    Animal.prototype.editDiet = function (input) {
        this.diet = Animal.parseDiet(input);
    };
    Animal.prototype.editLocation = function (input) {
        this.location = input;
    };
    Animal.prototype.editCaretakers = function (input) {
        this.caretakers = parseInt(input);
    };
    Animal.prototype.editLikes = function (input) {
        this.likes = Animal.parseStringList(input);
    };
    Animal.prototype.editDislikes = function (input) {
        this.dislikes = Animal.parseStringList(input);
    };
    Animal.prototype.getDietAsString = function () {
        if (this.diet === Diet.Carnivore) {
            return "Carnivore";
        }
        if (this.diet === Diet.Herbivore) {
            return "Herbivore";
        }
        if (this.diet === Diet.Omnivore) {
            return "Omnivore";
        }
        return "";
    };
    Animal.prototype.getSexAsString = function () {
        if (this.sex === Sex.Male) {
            return "Male";
        }
        if (this.sex === Sex.Female) {
            return "Female";
        }
        return "";
    };
    Animal.prototype.getLikesAsString = function () {
        var output = "";
        for (var i = 0; i < this.likes.length; i++) {
            output += (i > 0) ? this.likes[i].toLowerCase() : this.likes[i];
            if (i < this.likes.length - 1) {
                output += ", ";
            }
        }
        return output;
    };
    Animal.prototype.getDislikesAsString = function () {
        var output = "";
        for (var i = 0; i < this.dislikes.length; i++) {
            output += (i > 0) ? this.dislikes[i].toLowerCase() : this.dislikes[i];
            if (i < this.dislikes.length - 1) {
                output += ", ";
            }
        }
        return output;
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.model.js.map