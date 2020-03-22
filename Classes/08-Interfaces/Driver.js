"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CriketCoach_1 = require("./CriketCoach");
var GolfCoache_1 = require("./GolfCoache");
var myCricketCoach = new CriketCoach_1.CriketCoach();
console.log(myCricketCoach.getDailyWorkout());
var myGolfCoach = new GolfCoache_1.GolfCoach();
console.log(myGolfCoach.getDailyWorkout());
