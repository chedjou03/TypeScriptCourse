import {Shape} from "./Shape";
import {Circle} from "./Circle"
import {Rectangle} from "./Rectangle"


let myCircle = new Circle(15,30, 40);
let myRectangle = new Rectangle(40,50,60,70);

let myArray : Shape[] = [];

myArray.push(myCircle);
myArray.push(myRectangle);

for(let aShape of myArray){
    console.log(aShape.getInfo());
    console.log("area="+aShape.calculateArea());
}

