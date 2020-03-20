for(let i = 0 ; i < 5 ; i++){
    //console.log(i);
}

let reviews : number [] = [5, 10, 25, 4,6, 30, 13, 7];
let sportOne : String [] = ["Soccer", "Football", "Tennis", "Golf", "BasketBall"];
let total : number = 0;
let avarage : number = 0;
for(let i = 0 ; i < reviews.length ; i++){
    console.log(reviews[i]);
    total +=  reviews[i];
}
avarage = total/reviews.length;
console.log("total: "+total);
console.log("avarage: "+avarage);
for(let tempSport of sportOne){
    if(tempSport == "Soccer"){
        console.log("this is favorite "+tempSport);
    }else{
        console.log(tempSport);
    }
    
}
