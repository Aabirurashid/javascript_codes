var a=require("readline-sync")
var b=["zero","one","two","three","four","five","six","seven","eight","nine"]
var num=a.question("enter the number:")
var i=0
while (i<num.length){
    s=Number(num[i])
    console.log(b[s])
    i++
}
