for (var i = 0; i < 5; i++) {
    //console.log(i);
}
var reviews = [5, 10, 25, 4, 6, 30, 13, 7];
var sportOne = ["Soccer", "Football", "Tennis", "Golf", "BasketBall"];
var total = 0;
var avarage = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
avarage = total / reviews.length;
console.log("total: " + total);
console.log("avarage: " + avarage);
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var tempSport = sportOne_1[_i];
    if (tempSport == "Soccer") {
        console.log("this is favorite " + tempSport);
    }
    else {
        console.log(tempSport);
    }
}
