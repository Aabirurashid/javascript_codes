// var i=0
// var sum=0
// while (i<10){
//     var user=require("readline-sync")
//     var name=user.questionInt("enter the number:")
//     sum=sum+name
//     i++
// }
// console.log(sum)

// var sum=0
// for (i=1;i<10;i++){
//     var user=require("readline-sync")
//     var number=user.questionInt("enter the number:")
//     sum=sum+number
// }
// console.log(sum)
var i=1
var sum=0
do{
    var name=require("readline-sync")
    var a=name.questionInt("enter the number:")
    sum=sum+a
    console.log(sum)
    i++
}
while (i<=10)
