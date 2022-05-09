// const outerfun=(a)=>{
//     let b=10
//     const innerfun=()=>{
//         let sum =a+b
//         console.log(sum)
//     }
//     innerfun()
// }
// outerfun(5)

// global scope
// var e = 10;
// function sum(a){
//   return function(b){
//     return function(c){
      // outer functions scope
    //   return function(d){
        // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }

// console.log(sum(1)(2)(3)(4))



// without annyomsfunction
// global scope
// var e = 10;
// function sum(a){
//   return function sum2(b){
//     return function sum3(c){
//       // outer functions scope
//       return function sum4(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }

// var sum2 = sum(1);
// var sum3 = sum2(2);
// var sum4 = sum3(3);
// var result = sum4(4);
// console.log(result)


function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();
  
  
  