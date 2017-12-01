

export class Cell {

    private _wasVisited: boolean = false;

    public get wasVisited(): boolean {

        return this._wasVisited;

    }

    public set wasVisited(value: boolean) {

        this._wasVisited = value;

    }

}