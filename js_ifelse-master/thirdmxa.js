var num=require("readline-sync")
var a=num.questionInt("enter the number:")
var b=num.questionInt("enter the number:")
var c=num.questionInt("enter the number:")
if (a>b && a>c){
    console.log(a,"is greater");
}
if (b>a && b>c){
    console.log(c,"is greater")
}
if(c>a && c>b){
    console.log(c,"is greater")
}
else{
    console.log("not equal")
}