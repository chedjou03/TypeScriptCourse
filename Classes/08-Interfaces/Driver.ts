import {Coach} from "./Coach";
import {CriketCoach} from "./CriketCoach";
import {GolfCoach} from "./GolfCoache"


let myCricketCoach = new CriketCoach();
console.log(myCricketCoach.getDailyWorkout());

let myGolfCoach = new GolfCoach();
console.log(myGolfCoach.getDailyWorkout());


