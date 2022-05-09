var i=1
var string=""
while (i<=5){
    var j=1
    while (j<=i){
        string=string+i
        j++
    }
    i++
    string=string+"\n"
}
console.log(string)

// var result = Math.floor('20.01');
// console.log(result); 

// function add_nos(l1,l2){
//     var i=0
//     var sum=0
//     while (i<l1.length){
//         sum=sum+l1[i]+l2[i]
//         i++
//     }
// console.log(sum)
// }
// add_nos([1,2,3],[4,5,6])