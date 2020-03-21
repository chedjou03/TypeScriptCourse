"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(15, 30, 40);
var myRectangle = new Rectangle_1.Rectangle(40, 50, 60, 70);
var myArray = [];
myArray.push(myCircle);
myArray.push(myRectangle);
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var aShape = myArray_1[_i];
    console.log(aShape.getInfo());
    console.log("area=" + aShape.calculateArea());
}
