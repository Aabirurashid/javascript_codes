var my_dict = {'C1':[1,2,3],'C2':[5,6,7],'C3':[9,10,11]}
v=Object.values(my_dict)
console.log(v[1][1])
for (var i of v[0]){
    console.log(i)

    // for(var j of v[1][j]){
    //     console.log(j)

        // for(var k of v[2]){
        //     console.log(i,j,k)
        //     // break

        // }
    }
// }

// var a=[1,1,4,5,6,7,4,3,9,2,8,5,3,2,1]
// var i=0
// var j=[]
// while(i<a.length){
//     if (!a.includes(j)){
//         j.push(a[i])
//     }
//     i++
// }
// console.log(j)

// const a=[1,2,[54,[5,4,[6,7]]]]
// var  num = a.flat(Infinity);

// console.log(num);
