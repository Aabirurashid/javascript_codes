// var list1=[1,2,3]
// var list2=[1.2,3]
// var list2=[...list1,4,5]
// console.log(list2)
// console.log(list1)

function sum(a,b,c){
    console.log(a+b+c)
}
var arry=[5,3,1,7]
sum(...arry)

// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8]
// arr1=arr1.concat (arr2)//es5
//  arr1=[...arr1,...arr2]//es6
// console.log(arr1)


//replace copy
// let a=[1,2,3,4]
// let b=[...a, 9,6]
// b.push(9,8,6)
// console.log(a)

// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : 3 };

// // add members obj1 and obj2  to obj3
// const obj3 = {...obj1, ...obj2};

// console.log(obj3); // {x: 1, y: 2, z: 3}


// function sum(a,b,c){
//     var arry=[5,3,1]
//     console.log(a+b+c)
// }
// // var arry=[...5,3,1]
// console.log(arry,5,7,8)

// function sum(...numbers) {
// 	return numbers.reduce((accumulator, current) => {
// 		return accumulator += current;
// 	});
// };
 
// sum(1,2) 
// sum(1,2,3,4,5) 

// function sum(... numbers) {
//     return numbers. reduce((accumulator, current) => {
//     return accumulator += current;
// });
// };
// console.log(sum(1,2)) // 3.
// console.log(sum(1,2,3,4,5,5)) // 15.

// var a=[1,2,3]
// var b=[4,5,6]
// var c=[...a,7,8,9,...b]
// console.log(c)