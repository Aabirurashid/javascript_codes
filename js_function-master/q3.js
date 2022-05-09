// function add(){
//     var list1=['a','b','c','d','e'];
//     var list2=['f','g','h','i','j'];
//     var i=0;
//     var t={}
//     while (i<list1.length){
//         t[i]=list1[i]+list2[i]
//         i++
//     }
//     console.log(t)
// }
// add()

function addNumbers(a,b,c,...other){
    console.log(arguments)
    return a+b+c
}
const res=addNumbers(2,3,4,4,5,6,7,8,8,9,)
console.log(res)