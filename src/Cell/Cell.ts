

export class Cell {

    public get wasVisited(): boolean {

        return this._wasVisited;

    }

    public set wasVisited(value: boolean) {

        this._wasVisited = value;

    }

    private _wasVisited: boolean = false;


}