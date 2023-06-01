"use strict";
exports.__esModule = true;
var pigAttributes_1 = require("./pigAttributes");
var blackPig_1 = require("./blackPig");
var whitePig_1 = require("./whitePig");
var greyPig_1 = require("./greyPig");
var chestnutPig_1 = require("./chestnutPig");
localStorage;
function deletePig(a) {
    var _a, _b, _c;
    var tar = a.target;
    var pigInfo = tar.closest("tr");
    var pP = tar.parentElement;
    var pigKey = ((_c = (_b = (_a = pP.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.nextSibling) === null || _c === void 0 ? void 0 : _c.textContent);
    if (a.target) {
        if (!a.target.classList.contains('deleteButton')) {
            return;
        }
        localStorage.removeItem(pigKey);
        pigInfo.remove();
    }
}
window.onload = loadPigs;
var clicked = false;
var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', addPig, false);
var moreInfoSection = document.getElementById('pigTable');
moreInfoSection === null || moreInfoSection === void 0 ? void 0 : moreInfoSection.addEventListener('click', deletePig, false);
moreInfoSection === null || moreInfoSection === void 0 ? void 0 : moreInfoSection.addEventListener('click', Info, false);
var category = document.getElementById('category');
category.addEventListener('change', dynamicAtrr, false);
function addPig() {
    var name = document.getElementById('name').value;
    var height = document.getElementById('height').valueAsNumber;
    var weight = document.getElementById('weight').valueAsNumber;
    var breed = document.getElementById('breed').value;
    var personality = document.getElementById('personality').value;
    var p = new pigAttributes_1.Pig(name, pigAttributes_1.Category.grey, breed, +height, +weight, personality);
    if (category.value == 'black') {
        var strength = document.getElementById('strength').valueAsNumber;
        p = new blackPig_1.BlackPig(name, breed, +height, +weight, personality, +strength);
    }
    if (category.value == 'white') {
        var running = document.getElementById('Running').valueAsNumber;
        p = new whitePig_1.WhitePig(name, breed, +height, +weight, personality, +running);
    }
    if (category.value == 'grey') {
        var swimming = document.getElementById('Swimming').valueAsNumber;
        p = new greyPig_1.GreyPig(name, breed, +height, +weight, personality, +swimming);
    }
    if (category.value == 'chestnut') {
        var language = document.getElementById('language').value;
        p = new chestnutPig_1.ChestnutPig(name, breed, +height, +weight, personality, language);
    }
    var piggy = JSON.stringify(p);
    localStorage.setItem(name, piggy);
    var tableInfo = document.getElementById("pigInfo");
    tableInfo.insertAdjacentHTML('beforeend', "\n      <tr>\n        <td>".concat(name, "</td>\n        <td>").concat(category.value, "</td>\n        <td><button class=\"moreInfo\">More Info</button></td>\n        <td><button class=\"deleteButton\">Delete</button></td>\n      </tr>\n    "));
}
function loadPigs() {
    localStorage.removeItem("remove");
    var storageLength = localStorage.length;
    var tableInfo = document.getElementById("pigInfo");
    for (var i = 0; i < storageLength; i++) {
        var name = localStorage.key(i);
        var val = JSON.parse(localStorage.getItem(name));
        var kat = val.category;
        var cat = "";
        if (kat == 0) {
            cat = 'Black';
        }
        if (kat == 1) {
            cat = 'White';
        }
        if (kat == 2) {
            cat = 'Grey';
        }
        if (kat == 3) {
            cat = 'Chestnut';
        }
        tableInfo.insertAdjacentHTML('beforeend', "  <tr>\n        <td>\n        ".concat(name, "\n        </td>\n        <td>\n        ").concat(cat, "\n        </td>\n        <td>\n        <button class=\"moreInfo\">More Info</button>\n        </td>\n        <td>\n        <button class=\"deleteButton\">Delete Pig</button>\n        </td>\n      </tr>\n    "));
    }
}
function Info(a) {
    var _a, _b, _c;
    var tar = a.target;
    var pP = tar.parentElement;
    var name = ((_c = (_b = (_a = pP.parentElement) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.nextSibling) === null || _c === void 0 ? void 0 : _c.textContent);
    var dynamic = JSON.parse(localStorage.getItem(name));
    var dynamicAttr1 = "";
    var dynamicAttr2 = "";
    var dynamicCater = dynamic.category;
    if (a.target) {
        if (!a.target.classList.contains('moreInfo')) {
            return;
        }
        if (dynamicCater == 0) {
            dynamicAttr1 = 'Strength';
            dynamicAttr2 = dynamic.strength;
        }
        if (dynamicCater == 1) {
            dynamicAttr1 = 'Running';
            dynamicAttr2 = dynamic.running;
        }
        if (dynamicCater == 2) {
            dynamicAttr1 = 'Swimming';
            dynamicAttr2 = dynamic.swimming;
        }
        if (dynamicCater == 3) {
            dynamicAttr1 = 'Language';
            dynamicAttr2 = dynamic.language;
        }
        var infoTable = document.getElementById('info');
        infoTable.innerHTML =
            "\n      <thead>\n        <tr><th>More Info</th><th></th></tr>\n      </thead>\n      <tableInfo>\n        <tr><td>Name</td><td>".concat(dynamic.name, "</td></tr>\n        <tr><td>Breed</td><td>").concat(dynamic.breed, "</td></tr>\n        <tr><td>Height(Hocks)</td><td>").concat(dynamic.height, "</td></tr>\n        <tr><td>Weight(Stones)</td><td>").concat(dynamic.weight, "</td> </tr>\n        <tr><td>Personality</td><td>").concat((dynamic.personality), "</td></tr>\n        <tr><td>").concat(dynamicAttr1, "</td><td>").concat(dynamicAttr2, "</td></tr>\n    ");
    }
}
function dynamicAtrr() {
    var form = document.querySelector('form');
    if (clicked) {
        var a = form.getElementsByClassName('specialOption');
        var al = a.length;
        var b = form.getElementsByClassName('specialOptionAttr');
        var bl = b.length;
        for (var i = 0; i < al; i++) {
            form.removeChild(a[i]);
        }
        for (var i = 0; i < bl; i++) {
            form.removeChild(b[i]);
        }
    }
    if (category.value == 'black') {
        form.insertAdjacentHTML('beforeend', "\n    <label for=\"strength\" class=\"specialOption\">Strength</label>\n    <input type=\"number\" class = \"specialOptionAttr\" id =\"strength\">\n    ");
    }
    if (category.value == 'white') {
        form.insertAdjacentHTML('beforeend', "\n    <label for=\"Running\" class=\"specialOption\">Running</label>\n    <input type=\"number\" class = \"specialOptionAttr\" id =\"Running\">\n    ");
    }
    if (category.value == 'grey') {
        form.insertAdjacentHTML('beforeend', "<label for=\"Swimming\" class=\"specialOption\">Swimming</label>\n    <input type=\"number\" class = \"specialOptionAttr\" id =\"Swimming\">\n    ");
    }
    if (category.value == 'chestnut') {
        form.insertAdjacentHTML('beforeend', "\n    <label for=\"language\" class=\"specialOption\">Language</label>\n    <input type=\"text\" class = \"specialOptionAttr\" id =\"language\">\n    ");
    }
    clicked = true;
}
