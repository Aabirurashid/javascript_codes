// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// callback function
// function callMe() {
//     console.log('I am callback function');
// }

// passing function as an argument
// greet('Peter', callMe);


// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// calling the function
// setTimeout(greet, 2000);
// sayName('John');

// const greet=()=>{
//     setTimeout(function(){
//         console.log("hi")
//     },2000)

// }
// const bye=()=>{
//     console.log("yuiop")
// }
// greet()
// bye()


// const funA=()=>{
//     console.log("welcome funA")
// }
// const funB=()=>{
//     console.log("welcome FunB ")
// }
// funA(funB)
// funB()


// const funA=()=>{
//     setTimeout(function(){
//         console.log("welcome funA")

//     },2000)
//     // console.log("welcome funA")
// }
// const funB=()=>{
//     console.log("welcome FunB ")
// }
// funA()
// funB()


// function sum(list,callback){
//     var i=0
//     var sum=0
//     while (i<list.length){
//         sum=sum+list[i]
//         i+=1
//     }
//     console.log(sum)
//     callback()
// }
// function multiply(){
//     var list=[1,2,4,5,]
//     var i=0
//     var multi=1
//     while (i<list.length){
//         multi=multi*list[i]
//         i+=1
//     }
//     console.log(multi)
// }
// sum([1,2,3,4,5],multiply)

function even(a,b){
    for (i=0;i<a.length;i++){
        if (a[i]%2==0){
            console.log(a[i])
        }
    }
    b()
}
function odd(){
    var c=[1,2,3,4,5]
    for (i=0;i<c.length;i++){
        if (c[i]%2!==0){
            console.log(c[i])
        }
    }
}
even([1,2,3,4,5,6,7,8],odd)