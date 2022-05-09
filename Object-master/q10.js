// i=0
// dict={}
// while i<3:
//     name=input("enter the name:")
//     marks=int(input("enter the marks"))
//     dict.update({name:marks})
//     i=i+1
// print(dict,"\n")
    

var a=require("readline-sync")
var dict={}
for (i=0;i<10;i++){
    var student=a.question("enter the name:")
    var marks=a.questionInt("enter the marks:")
    dict[student]=marks
}
console.log(dict)

// var readline = require('readline-sync');
// var students={}
// for (let step = 0; step <3; step++){
// var name =readline.question("Enter your name:");
// var marks=readline.questionInt("Enter the marks");
// students[name]=marks;
// }
// console.log(students);