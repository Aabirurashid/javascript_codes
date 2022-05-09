var a=require("readline-sync")
var num=a.questionInt("enter the number:")
var temp=num
var cube=0
var sum=0
while (temp>0){
    cube=temp%10
    sum=sum+cube**3
    temp=Math.floor(temp/10)
}
if (num==sum){
    console.log("itx amstrong nmbr")
}
else{
    console.log("itx not amstrong numbr")
}
   
// var a=require("readline-sync")
// var num=a.questionInt("enter the number:")
// var temp=num
// var cube=0
// var sum=0
// for(i=0;temp>0;i++){
//     cube=temp%10
//     sum=sum+cube**3
//     temp=Math.floor(temp/10)
// }
// if (num==sum){
//     console.log("its amstrong number")
// }
// else{
//     console.log("its not amstrong number")
// }

// var a=require("readline-sync")
// var num=a.questionInt("enter the number:")
// var temp=num
// var cube=0
// var sum=0

// do{
//     cube=temp%10
//     sum=sum+cube**3
//     temp=Math.floor(temp/10)
//     if (num==sum){
//         console.log("its amstrong number")
//     }
//     else{
//         console.log("its not amstrong number")
//     }
// }
// while (temp>0)

// var a=[1,2,3,4,5,6,7,8,8,9,10,12]
// var i=2
// var c=20
// while(i<a.length){
//     a.insert(i,c)
//     i+=3+1
// }
// console.log(a)


var a=require("readdirSync")
var num=a.questionInt("enter the number:")
for (i=0;i<num;i++){
    var i=2
    
}
