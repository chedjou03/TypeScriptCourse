import{Shape} from "./Shape"

export class Rectangle extends Shape{
   
    constructor(private theX : number , private theY : number, private _width : number,private _length : number){
        super(theX,theY);
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    public getInfo() : String{
        return super.getInfo()+" length="+this._length+" width="+this._width;
    }

    public calculateArea(): number {
        return this._length * this._width;
    }
}