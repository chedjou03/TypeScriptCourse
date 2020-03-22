import {Coach} from "./Coach";
export class CriketCoach implements Coach{
    getDailyWorkout(): String {
       return "practice your spin bowling technique";
    }

}