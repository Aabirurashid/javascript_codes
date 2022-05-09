// var isTrue = "True"

// if(isTrue){

//    console.log("Output should show")

//  }

//  if(isTrue === "False"){

//    console.log("Both are same")

//  }

// else {

//   console.log("Please run it. if all conditions false")

//  }

// var number = 12;
var num=require("readline-sync")
var number=num.questionInt("enter the number")
if (number%3==0 && number%7==0) {
   console.log("Chocolate")
}
else if(number%3 === 0){
   console.log("choco");
}
else if (number % 7==0){
   console.log("late");
}
else {
   console.log("Not divisible by 3 , 7")
}