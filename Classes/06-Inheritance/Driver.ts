import {Shape} from "./Shape";
import {Circle} from "./Circle"
import {Rectangle} from "./Rectangle"

let myShape = new Shape(5,10);
let myCircle = new Circle(15,30, 40);
let myRectangle = new Rectangle(40,50,60,70);

let myArray : Shape[] = [];
myArray.push(myShape);
myArray.push(myCircle);
myArray.push(myRectangle);

for(let aShape of myArray){
    console.log(aShape.getInfo());
}

