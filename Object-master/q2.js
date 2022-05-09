var a=require("readline-sync")
var num=a.questionInt("enter the number:")
var dic={}
for (i=0;i<=num;i++){
    dic[i]=i*i
}
console.log(dic)
