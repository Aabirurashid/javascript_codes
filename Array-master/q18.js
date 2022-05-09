// var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// var num=[]
// for(var i of n){
//     if(!num.includes(i)){
//         num.push(i)
//     }
// }
// console.log(num)

var binary_number = [1, 0, 0, 1, 1] 
var i=0
var sum=0
while (i<binary_number.length){
    a=binary_number[-i-1]
    sum=sum+a*(2**i)
    i=i+1
}
console.log(sum)
