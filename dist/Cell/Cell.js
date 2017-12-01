"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cell = (function () {
    function Cell() {
        this._wasVisited = false;
    }
    Object.defineProperty(Cell.prototype, "wasVisited", {
        get: function () {
            return this._wasVisited;
        },
        set: function (value) {
            this._wasVisited = value;
        },
        enumerable: true,
        configurable: true
    });
    return Cell;
}());
exports.Cell = Cell;
//# sourceMappingURL=Cell.js.map