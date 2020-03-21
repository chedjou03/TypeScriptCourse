"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var theCustomer = new Customer_1.Customer("Florence", "Kuissu");
console.log(theCustomer.firstName);
console.log(theCustomer.lastName);
console.log(theCustomer.getFullName());
