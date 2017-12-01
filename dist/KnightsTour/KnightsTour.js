"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cell_1 = require("../Cell/Cell");
var KnightsTour = (function () {
    function KnightsTour(rows, columns) {
        this.board = [];
        for (var i = 0; i < rows; i++) {
            if (!this.board[i]) {
                this.board[i] = [];
            }
            for (var k = 0; k < columns; k++) {
                this.board[i][k] = new Cell_1.Cell();
            }
        }
        console.log(this.board);
    }
    KnightsTour.prototype.start = function (row, column) {
        var currentPositionX = row;
        var currentPositionY = column;
        this.board[currentPositionX][currentPositionY].wasVisited = true;
        console.log(this.board[currentPositionX][currentPositionY]);
    };
    return KnightsTour;
}());
exports.KnightsTour = KnightsTour;
//# sourceMappingURL=KnightsTour.js.map