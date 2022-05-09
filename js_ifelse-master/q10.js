var num=require("readline-sync")
var varx=num.question("enter the number:")
var vary=num.question("enter the number:")
if (varx%vary===0){
    console.log("divisble");
}
else{
    console.log("not divisible")
}