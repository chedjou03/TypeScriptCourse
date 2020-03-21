import {Shape} from "./Shape"

export class Circle extends Shape{

    constructor(private theX : number , private theY : number , private _radian: number ){
        super(theX,theY);
    }

    public get radian(): number {
        return this._radian;
    }
    public set radian(value: number) {
        this._radian = value;
    }

    public getInfo() : String {
        return super.getInfo()+" radian="+this._radian ;
    }

    public calculateArea(): number {
        return Math.PI * Math.pow(this._radian,2);
    }

}