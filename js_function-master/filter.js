const age=[18,45,23,12,3,4,98,76]
const ruselt=age.filter((age)=>(age%2!=0))
console.log(ruselt)


//map()

// const age=[18,45,23,12,3,4,98,76]
// for (let i=0;i<age.length;i++){
//     age[i]=age[i]-3
// }
// console.log(age)

// var myFriend=["Aabiru",'jabeena','iflah','anisha']
// console.log(myFriend.indexOf('Aabiru',1))

// const price=[200,32,345,788,422,098,300,900,600]
// const newTag=price.filter((elm,index)=>{
//     return elm%2==0;
// })
// console.log(newTag)

// const employees = [
//     { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
//     { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
//     { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
//     { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
// ];

// calculate the net amount to be given to the employees
// const calcAmt = (obj) => {
//     newObj = {};
//     newObj.name = obj.name;
//     newObj.netEarning = obj.salary + obj.bonus - obj.tax;
//     return newObj;
// };

// let newArr = employees.map(calcAmt);

// console.log(newArr);


// let numbers = [2, 4, 6, 8, 10];

// function to return the square of a number
// function square(number) {
//   return number * number;
// }

// apply square() function to each item of the numbers list
// let square_numbers = numbers.map(square);

// console.log(square_numbers);





// const a=["Aabiru","kirti","jabeena","pooja","karan","kumar"]
// let b=a.filter((c)=>{
//     if (c.includes("k")){
//         return c
//     }
// })
// console.log(b)
