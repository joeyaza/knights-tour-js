import {Cell} from "../Cell/Cell";

export class KnightsTour {

    private board: Cell[][] = [];

    constructor(rows: number, columns: number) {

        for (let i = 0; i < rows; i++) {

            if (!this.board[i]) {

                this.board[i] = [];
            }

            for (let k = 0; k < columns; k++ ) {

                this.board[i][k] = new Cell();

            }

        }

        console.log(this.board);

    }


    public start(row: number, column: number) {

        const currentPositionX: number = row;
        const currentPositionY: number = column;

        this.board[currentPositionX][currentPositionY].wasVisited = true;


        console.log(this.board[currentPositionX][currentPositionY]);
    }

    public getNextAvailableMoves(row: number, column: number) {

        let testPositons: object = [[0,1], [0,3], [1,4], [3,4], [4,3], [4,1], [1,0], [3,0] ];

        let positions: object = [];

        this.getMove()




    }

    public getMove(firstDirection: number, secondDirection: number) {





    }


}