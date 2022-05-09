const fun2=()=>{
    console.log("fun2 is starting")

}
const fun1=()=>{
    console.log("fun1 is starting")
    fun2()
    console.log("fun1 is ending")
}
fun1()

// my_dict = {'C1':[1,2,3],'C2':[5,6,7],'C3':[9,10,11]}
// v=Object.values(my_dict)
// console.log("C1","C2","C3")
// var i=0
// while (i<C1.length){
//   var j=0
//   while (j<C2.length){
//     var k=0
//     while (k<C3.length){
//       if (i==j && j==k){
//         console.log(c1[i],c2[j],c[3])
//       }
//       k+=1
//     }
//     j+=1

//   }
//   i+=1
// }