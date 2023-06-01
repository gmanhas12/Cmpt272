"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ChestnutPig = void 0;
var pigAttributes_1 = require("./pigAttributes");
var pigAttributes_2 = require("./pigAttributes");
var ChestnutPig = /** @class */ (function (_super) {
    __extends(ChestnutPig, _super);
    function ChestnutPig(name, breed, height, weight, personality, language) {
        var _this = _super.call(this, name, pigAttributes_2.Category.chestnut, breed, height, weight, personality) || this;
        _this.language = language;
        return _this;
    }
    return ChestnutPig;
}(pigAttributes_1.Pig));
exports.ChestnutPig = ChestnutPig;
