var a=require("readline-sync")
var num=a.questionInt("enter the number:")
if(num>0){
    console.log(num,"is positive number")
}
else if (num<0){
    console.log(num,"is negative")
}
else{
    console.log("nothing")
}