// var prime={0:1,1:1,2:3,3:5,4:7,5:11}
// var n=require("readline-sync");
// const num=n.question("enter number: ");
// dict={}
// var i=2
// var count=0;
// while (i<num) {

//        if (num%i===0) {

//        count=count+1
//        }
//     i++
       
// }



// var n=require("readline-sync");
// const num=n.question("enter number: ");
// var i=2
// var count=0;
// while (i<num) {
//        if (num%i===0) {
//         count+=1
//        }
//     i++
//     }
// console.log({count})

// else {

//    console.log("not prim")
// }
// var n=require("readline-sync");
// const num=n.question("enter number: ");
// var i=2
// var count=0;
// while (i<num) {

//        if (num%i!==0) {
//        count=count+1
//        }
//        i++;
// }
// console.log({num})
// if (count===0) {
//        console.log("prime number")
// }
// else {

//    console.log("not prim")
// }


// var a=require("readline-sync")
// var b=a.questionInt("enter the number:")
// if (b==0 || b==1){
//     return 1;
// }
// else{
//     return n*(b-1)
// }

// console.log()
// var a=require("readline-sync")
// var number=a.questionInt("enter the number:")
// if (number < 0) {
//     console.log("is not exist");
// }
// else {
//     var fact = 1;
//     for (i = 1; i>=1; i++) {
//         fact *= i;
//     }
//     console.log("The factorial of" ,number ,"is", fact);
// }

// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
// factorialize(5)

// function factorialize(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return num;
//   }
// factorialize(5);

// var Name="python is very easy"
// count=0
// space=""
// for (i in Name){
//     if (Name[i]==" "){
//         count=count+Name[i]
//     }
// }
// console.log(i)

// var new_list=[]
// // words=Name.split()
// for (i=Name.length-1;i>=0;i--){
//     new_list.push(Name[i])
// }
// console.log(new_list)


// function reversestring(Name){
//     var words=[]
//     words=Name.split("\s+");
//     var a=""
//     for (var i=0;i>words.length-1;i--){
//         return a += words[i].split('');
  
//     }
// }
// console.log(reversestring("python is a very easy"))

// var a=require("readline-sync")
// var strig=a.questionInt("enter the number:")
// b=''
// i=0
// while (i<strig.length){
//     b+=strig[i]
//     j=1
//     while (j<=strig.length-(i+1)){

    
//         b+='0'
//         j+=1
//     }
//     if (i==strig.length-1){
//         break
//     }
//     else{
//         b+='+'
//     }
//     i+=1
// }
// console.log(b)



// strig=input("enter the number:")
// b=''
// i=0
// while i<len(strig):
//     b+=strig[i]
//     j=1
//     while j<=len(strig)-(i+1):
//         b+='0'
//         j+=1
//     if i==(len(strig)-1):
//         break
//     else:
//         b+='+'
//     i+=1
// print(b)


// for (num in range(2,101):
//     if num>1:
//         for i in range(2,num):
//             if (num%i)==0:
//                 break
//         else:
//             print(num)