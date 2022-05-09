const a=[1,2,3,4,5,6]
let b=a.reduce((acc,curr)=>{
    return acc*curr
})
console.log(b)

// const a=[1,2,3,4,5]
// let b=a.reduce((acc,curr)=>{
//     return acc+curr
// })
// console.log(b)


// const a=[1,2,3,4,5]
// let b=a.reduce((acc,curr)=>{
//     return acc-curr
// })
// console.log(b)

// const array = [15, 16, 17, 18, 19];
// function reducer(previous, current, index, array) {
//   const returns = previous + current;
//   console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//   return returns;
// }
// array.reduce(reducer);
