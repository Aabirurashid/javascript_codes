var a=require("readline-sync")
var b=["zero","one","two","three","four","five","six","seven","eight","nine"]
var num=a.question("enter the number:")
var i=0
var m={}
while (i<num.length){
     s=Number(num[i])
     m[s] =(num[i],b[s])
     i++
 }
 console.log(m)
 