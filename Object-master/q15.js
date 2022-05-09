// var list1=['a','b','c','d','e'];
// var list2=['f','g','h','i','j'];
// var i=0;
// var t={}
// while (i<list1.length){
//     b=list1[i]
//     t[b]=list2[i]
//     i++
// }
// console.log(t)

var list1=['a','b','c','d','e'];
var list2=['f','g','h','i','j'];
var i=0;
var t={}
while (i<list1.length){
    t[i]=list1[i]+list2[i]
    i++
}
console.log(t)
