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