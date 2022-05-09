var a=require("readline-sync")
var num=a.questionInt("enter the number:")
var rem=sum=0
var temp=num
while(num>0){
    rem=num%10
    sum=sum+rem
    num=Math.floor(num/10);
}
if (temp%sum==0){
    console.log("it is a hurshad nmbr");
}
else{
    console.log("it is not a hurshad number")
}
