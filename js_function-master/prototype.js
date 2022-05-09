// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// creating objects
// const person1 = new Person();
// const person2 = new Person();

// adding a method to the constructor function
// Person.prototype.greet = function() {
//     console.log('hello' + ' ' +  this.name);
// }

// person1.greet(); // hello John
// person2.greet(); // hello Joh

// var mobile=function (model_no){
//     this.model=model_no
//     this.price=3000
// }
// var samsang=new mobile('glaxy')
// var nokia=new mobile(3333)
// samsang.colour='white'
// console.log(samsang.colour)
// console.log(nokia)

// function Person () {
    // this.name = 'John'
// }

// adding a prototype
// Person.prototype.age = 24;

// creating object
// const person = new Person();

// accessing prototype property
// console.log(person.__proto__);   // { age: 24 }

// constructor function
// function Person() {
    // this.name = 'John'
// }

// add a property
// Person.prototype.age = 20;

// creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// changing the property value of prototype
// Person.prototype = { age: 50 }

// creating new object
// const person3 = new Person();

// console.log(person3.age); // 50
// console.log(person1.age); // 20

// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();

// checking the prototype value
// console.log(Person.prototype);

// var samsang=new mobile('glaxy')
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eyecolor;
  }
var tyu=new person('glaxy')
console.log(Person.prototype.nationality = "English")