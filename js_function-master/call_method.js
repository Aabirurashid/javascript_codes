// const youtube1={
//     name:"Aabiru",
//     content:"programing",
//     features:function(ratig,support){
//         console.log(`very friendly way of teaching ${this.name}.this is my fav ${this.content} chanel.i will love to give ${ratig} star.please ${support} ${this.name} channel.`)
//     }
// }
// const youtube2={
//     name:"jabeena",
//     content:"kuch bi",
// }
// youtube1.features.call(youtube1,4,"subscribe");


// const person = {
//     firstName:"Aabiru",
//     lastName:"rashid",
//     fullName: function() {
//         console.log (this.firstName + " " + this.lastName)
//     }
//   }
// const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
// const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
  // This will return "John Doe":
// person.fullName.call(person2);

// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       console.log(this.firstName + " " + this.lastName)
//     }
//   }
  
// //   This will return "John Doe": 
// myObject.fullName.call(myObject);  


// const person = {
//     fullName: function(city, country) {
//       console.log(this.firstName + " " + this.lastName + "," + city + "," + country)
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.call(person1, "Oslo", "Norway");