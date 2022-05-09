// const youtube1={
//     name:"Aabiru",
//     content:"programing",
//     features:function(ratig){
//         console.log(`very friendly way of teaching ${this.name}.this is my fav ${this.content} chanel.i will love to give ${ratig} star.`)
//     }
// }

// let youtube2=youtube1.features.bind(youtube1);
// youtube2(5)

// var sum = function(a, b) {
//     return a + b;
//   };
  
// var add5 = sum.bind(null,5);
// console.log(add5(10));


const youtube1={
    name:"Aabiru",
    content:"programing",
    
}
youtube2={
    name:"poojA",
    content:"programing",
}

function features(ratig){
    console.log(`very friendly way of teaching ${this.name}.this is my fav ${this.content} chanel.i will love to give ${ratig} star.`)
}
let youtube9=features.bind(youtube1);
youtube9(5)
let youtube8=features.bind(youtube2);
youtube9(9)