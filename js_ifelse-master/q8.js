var b=require("readline-sync")
var water=b.question("enter the number")
if (water<=1){
    console.log("more water needs to be fill");
}
else if(water>=1 && water<=10){
    console.log("no need to fill water");
}
else{
    console.log("overflow")
}