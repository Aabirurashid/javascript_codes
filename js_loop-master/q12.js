var a=require("readline-sync")
var b=a.questionInt("enter the number:")
var i=1
var fact=1
while (i<=b){
    fact=fact*i
    i++

}
console.log(fact)