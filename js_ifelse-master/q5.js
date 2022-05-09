var a=require("readline-sync")
var num=a.question("enter the number")
if (num<10){
    console.log(num,"is lessthan 10");
}
else if (num>10 && num<20){
    console.log(num,"is lessthan 20");
}
else {
    console.log(num,"greater than 20");
} 


