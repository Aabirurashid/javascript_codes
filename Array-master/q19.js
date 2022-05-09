// mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// subStr = "over"
// replacementStr = "on" 
// l=mainStr.split()
// i=0
// while i<len(l):
//     if l[i]=="over":
//         x=mainStr.replace("over","on")
//     i=i+1
// print(x)

var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
subStr = "over"
var l=mainStr.split()
str=""
for(var i of l){
    str=str+i+" "

}
console.log(str)


// var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// var result=mainStr.replace(/over/g,"on")`
// console.log(result)
// var subStr = "over";
// replacemainstr="on"
// var c = mainStr.split(" ");
// output="";
// for(var i of c){
//     if (c[i]=="over"){
//         output=mainStr.replace(/over/g,"on")
//     }
// }
// console.log(output);

// var x=12345678;var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// var subStr = "over";
// replacemainstr="on"
// var c = mainStr.split(" ");
// output="";
// for(var i of c){
//     if (c[i]=="over"){
//         output=mainStr.replace("over","on")
//     }
// }
// console.log(output);

// var z=x+1n
// console.log(z)
// var value1 = 900719925124740998n;
// var result1 = value1 + 1n;
// console.log(result1);