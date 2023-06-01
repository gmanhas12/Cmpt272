"use strict";
exports.__esModule = true;
exports.Pig = exports.Category = void 0;
var Category;
(function (Category) {
    Category[Category["black"] = 0] = "black";
    Category[Category["white"] = 1] = "white";
    Category[Category["grey"] = 2] = "grey";
    Category[Category["chestnut"] = 3] = "chestnut";
})(Category = exports.Category || (exports.Category = {}));
var Pig = /** @class */ (function () {
    function Pig(name, category, breed, height, weight, personality) {
        this.name = name;
        this.category = category;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
    }
    return Pig;
}());
exports.Pig = Pig;
