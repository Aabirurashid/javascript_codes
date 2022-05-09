// function sayHello(name) {
//     return "Hello " + name
//     }

const { rejects } = require("assert");
const { resolve } = require("dns");

    
// console.log(sayHello("Aabiru"))


// function sayHello(name) {
//     return "Hello " + name
//     }
//     // Calling function
//     console.log(sayHello("Pragna"))
    

// function sayBye(userName){
//     return "bye","",userName
// }
// console.log(sayBye("Aabiru"))

// function getFullName(firstName,lastName){
//     console.log(firstName+" "+lastName)
//     }
//     getFullName("kumar","nayak");

// function getFullName(firstName,lastName){
//     console.log(firstName+" "+lastName)
//     }
    
//     getFullName("kumar","nayak");

// function displaySum() {
//     var total = num1 + num2;
//     return(total);
//     }
// var a=require("readline-sync")
// var num1=a.questionInt("enter the number")
// var num2=a.questionInt("enter the number")
// console.log(displaySum()); 

// function displayMultiply(num1,num2,num3){
//     var ruselt=num1*num2*num3
//     return (ruselt)
// }
// console.log(displayMultiply(2,3,4))

// function getResult(num1,num2,num3,num4){
//     console.log(num1-num2+num3-num4)
//     }
    
//     getResult(2,3,4,5);


// function displaySubtraction(a,b){
//     console.log(a,b);
//     }
// displaySubtraction(2,3);

// function getSum(num1, num2) {
//     var total = num1 + num2;
//     return total;
//     }
// console.log(getSum(3,5))

// function avrage(math,science){
//     return ((math+science)/2)
// }
// console.log(avrage(90,30))

// function insertingElement(arr){
//     var a=5;
//     arr.push(a);
//     return arr;
//     // console.log(arr);
    
//     }
// console.log(insertingElement([1,2,3,4]));

// function multiplyString(string,num){
//     return string*num;
//     }
    
//     console.log(multiplyString("kumar",2));


// function greetWorld() {
//     var greet = "Hello World!";
//     console.log(greet);
//     }
// greetWorld()
// console.log(greet); // Uncaught ReferenceError: greet is not defined


// function sayBye(userName){
//     return "Bye"+" "+userName
//     }
    
//     console.log(sayBye("Kumar"))

// function displayMultiply(num1,num2,num3){
//     return num1*num2*num3
// }
// console.log(displayMultiply(2,3,2))

// var a="aabiru";
// var b=10
// var c=String(b)
// console.log(a+c)

// var a=function(a,b){
//     console.log(a===b);
// }
// a(2,3)
// function getResult(num1,num2,num3,num4){
//     console.log(num1-num2+num3-num4)
//     }
//     getResult(2,3,4,5);

// (function(str1,str2){
//     console.log(str1===str2)
//     })("kumar","kumar");

// function function_print_lines(str1,str2){
//     console.log(str1);
//     console.log(str2);
// }
// function_print_lines("mrea naam nayak hai","mai navgurukul ka associate hu")


// function isGreaterThen20(num){
//     if (num>20){
//         return true
//     }
// }
// console.log(isGreaterThen20(34))
// count=0
// function students(list_of_marks){
//     for(var i of list_of_marks){
//         var ruselt=isGreaterThen20(i)
//         if (ruselt==true){
//             count++
//         }
//     }
// console.log(count)
// }
// students([20,60,12,56,32,78,90])

// function add_numbers(num1,num2){
//     var total=num1+num2
//     return total
// }
// console.log(add_numbers(56,12))


// var read=require("readline-sync")
// var a=read.questionInt("enter the year:")
// if (a%4===0){
//     if (a%100===0){
//         if (a%400===0){
//             console.log("leap year")
//         }
//         else{
//             console.log("fghj")
//         }
//     }
//     else{
//     console.log("rtui")
//     }


// }
// else{
//     console,log("dfghjk")
// }


// function prom(a,b){
//     return new Promise((resolve,rejects)=>{
//         console.log("dfghj")
//         var c=a+b
//         setTimeout(()=>{
//             if (a,b){
//                 resolve(`ur ansr is ${c}`)
//             }
//             else{
//                 rejects("error while coummnicating")
//             }
//         },2000)
//     })
// }
// prom(9).then((ruselt)=>{
//     console.log(ruselt)
// }).catch((error)=>{
//     console.log(error)
// })

// function sum(list1,b){
//     var i=0
//     var sum=0
//     while (i<list1.length){
//         sum=sum+list1[i]
//         i++
//     }
//     console.log(sum)
//     b()
// }
// function multiply(){
//     var d=[1,2,3,4,5]
//     var i=0
//     var multi=1
//     while (i<d.length){
//         multi=multi*d[i]
//         i++
//     }
//     console.log(multi)
// }
// sum([1,2,3,4,5],multiply)



const age=[18,45,23,12,3,4,98,76]
const ruselt=age.filter((age)=>(age>18))
console.log(ruselt)