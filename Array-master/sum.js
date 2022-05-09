// list1=[1,2,3,4,5,5,6]
// var sum=0;
// for(var i=0;i<list1.length;i++){
//     sum=sum+list1[i];
// }
// console.log(sum)


// const person = {
//     name: 'John',
//     age: 30,

    // accessing name property by using this.name
    // greet: function() { console.log('The name is' + ' ' + this.name); }
// };

// person.greet();

// function add(a, b) {
//     return a + b;
// }
//     // return a + b;
// let a=require("readline-sync")
// let number1 = a.questionInt("Enter first number: ")
// let number2 = a.questionInt("Enter second number: ")
// let result = add(number1,number2);
// console.log("The sum is " + result);


// var a="abacs123"
// var b=[]
// for (var i=a.length;i>0;i--){
//     b.push(i)
// }
// console.log(b)

function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}
 
// take input from the user
let a=require("readline-sync")
const string =a.question ('Enter a string: ');

const result = reverseString(string);
console.log(result);