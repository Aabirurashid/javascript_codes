// function  check_numbers(num1,num2){
//     if (num1%1==0 && num2%2==0){
//         console.log("both are even");
//     }
//     else{
//         console .log("both are not even")
//     }
// }
// check_numbers(20,22)


// function check_numbers(a){
//     for (var i=0;i<=a.length;i++){
//         if (a[i]%2==0){
//             console.log("both are even");
//         }
//         else{
//             console.log("both are not even");
//         }
//     }
// }
// check_numbers([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])


// function eligibleforvote(age){
//     if(age>=18){
//         console.log("she is eligble for vote")
//     }
//     else{
//         console.log("she is not eligible for vote")
//     }

// }
// eligibleforvote(12)

// function  perfect(c){
//     // var b=require("readline-sync")
//     // var c=b.questionInt("enter the number:")
//     var sum=0
//     i=1
//     while (i<c){
//         if (c%i==0){
//             sum=sum+i
//         }
//         i++
//     }
//     if (c==sum){
//         console.log(c,"itx a perfct number")
//     }
//     else{
//         console.log(c,"itx not a perfect number")
//     }
// }
// perfect(28)

// function perfect(num){
//     sum=0
//     for(var i=1;if(num%i === 0)){
//     sum+=i
//     }
//     }
//     if(sum === num){
//     console.log(num," is a perfect number");
//     }
//     else{
//     console.log(num," is not a perfect number");
//     }
//     }
//     perfect(6);


// function average(a,b,c){
//     console.log(a+b+c)
//     console.log("average_three numbers",(a+b+c)/3)
// } 
// average(3,4,5)

// function average(num1,num2,num3){
//     console.log("sum of three numbers -",num1+num2+num3);
//     console.log("Average of three numbers -",(num1+num2+num3)/3);
//     }
    
//     const input = require('readline-sync');
//     let number1 = input.questionInt('Enter the number1 :- ');
//     let number2 = input.questionInt('Enter the number2 :- ');
//     let number3 = input.questionInt('Enter the number3 :- ');
// average(number1,number2,number3);


// function  showNumbers(limt){
//     for(i=0;i<=limt;i++){
//         if(i%2==0){
//             console.log(i,"Even");
//         }
//         else{
//             console.log(i," Odd")
//         }
//     }
// }
// showNumbers(10)

// function multiplesOfNumbers(limt){
//     var sum=0
//     for(i=0;i<=limt;i++){
//         if(i%3===0){
//             sum+=i
//         }
//         if (i%5==0){
//             sum+=i
//         }
//     }
// console.log(sum)

// }
// multiplesOfNumbers(10)


// function multiplesOfNumbers(limit){
//     var sum=0
//     for(i=0;i<=limit;i++){
//     if(i%3 ===0){
//     sum+=i;
//     }
//     if(i%5 ==0){
//     sum+=i;
//     }
//     }
//     console.log(sum);
//     }
//     multiplesOfNumbers(10);


// function license_checker(speed){
//     if(speed<=70){
//         console.log("ok");
//     }
//     if (speed>70){
//         point=0
//     }
//     for(i=70;i points+=1){

//     }
// }


// function driver(speed){
//     if (speed<70){
//         console.log("ok")
//     }
//     if (speed>70){
//         a=speed-70
//         // b=a//5
//         console.log(b,"points")
//         if (b>=12){ 
//             console.log("lisence suspend")
//         }
// // n=int(input("enter the number"))
// }
// driver(135)
    



// // function license_checker(speed){
// //     if(speed < 70){
// //     console.log("ok");
// //     }
// //     if(speed > 70){
// //     points=0
// //     }
// //     for(var i=70;i points+=1){
// //     if(points>12){
// //     console.log("License suspended");
// //     }
// //     else{
// //     console.log(points);
// //     }
// //     }
// //     }
    
// //     license_checker(135);


// // function isequallenth(str1,str2){


// // }

// function squre(num){
//     c={}
//     for (i=1;i<num;i++){
//         c[i]=i*i
//     }
// console.log(c)
// }
// squre(10)


// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// }); 

// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// }); 

// var fs = require('fs');

// fs.writeFile('mynewfile1.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// }); 


// var fs = require('fs');

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// }); 


// const data = {
//   "name": "John",
//   "age": 22,
//   "hobby": {
// "reading" : true,
// "gaming" : false,
// "sport" : "football"
//   },
//   "class" : ["JavaScript", "HTML", "CSS"]
// }

// accessing JSON object
// console.log(data.name); // John
// console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

// console.log(data.hobby.sport); // football
// console.log(data.class[1]); // HTML

// //json object
// const jsonData = '{ "name": "John", "age": 22 }';

// // converting to JavaScript object
// const obj = JSON.parse(jsonData);

// // accessing the data
// console.log(obj.name); // John

// const jsonData = { "name": "John", "age": 22 };

// converting to JSON
// const obj = JSON.stringify(jsonData);

// accessing the data
// console.log(obj); // "{"name":"John","age":22}"

// function calculator(number1,number2,operator){
//     if (operator=="+"){
//         return number1+number2
//     }
//     else if (operator=="-"){
//         return number1-number2
//     }
//     else if (operator=="*"){
//         return number1*number2
//     }
//     else if (operator=="/"){
//         return number1/number2
//     }
// var num=require("readline-sync")
// var a=num.questionInt("enter first number")
// var b=num.questionInt("enter second number")
// var o=num.question("enter operator")
// var n=calculator(a,b,o)
// console.log(n)
// m=calculator(6,4,"-")
// console.log(m)
// b=calculator(6,4,"*")
// console.log(b)
// x=calculator(6,4,"/")
// console.log(x)
//   }
// calculator()


// import json
// import re
// import os
// file=os.path.exists("user.json")
// print(file)
// if file==False:
//     dic2={}
//     list1=[]
//     dic1={}
//     print("***welcome to login and sign usigp page***")
//     user=input("what u want to do login or sign up:")
//     if user=="signup":
//         user_name=input("enter the user_name :")
//         password1=input("enter ur password:")
//         if re.search("[A-Z]",password1) and re.search("[a-z]",password1) and re.search("[0-9]",password1) and  re.search("[#$%&@]",password1):
//             password2=input("confirm ur password:")
//             # with open("user.json","w")as file :
//             #     data=json.dump()
//             if password1==password2:
//                 print("congrates",user_name)
//                 description=input("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
//                 dob=input("enter ur dob:")
//                 hobbies=input("enter ur hobbies:")
//                 gender=input("enter ur gender f/m: ")
//                 l1=["name","password","describtion","DOB","Hobbies","Gender"]
//                 l2=[user_name,password1,description,dob,hobbies,gender]
//                 for i in range(0,len(l1)):
//                     dic2.update({l1[i]:l2[i]})
//                 list1.append(dic2)
//                 dic1.update({password2:list1})
//                 with open("user.json","w")as injson :
//                     json.dump(dic1, injson,indent=4)
//             else:
//                 print("Passwords didn't match.")                                                                                                                                    
//         else:
//             print("weak password")
// if file==True:
//     list1=[]
//     user=input("what u want to do login or sign up:")
//     if user=="signup":
//         user_name=input("enter the user_name: ")
//         password1=input("enter ur password:")
//         with open("user.json","r")as n :
//             data=json.load(n)
//         for data in password1:
//             print(data)
//             if i["password"]==password1:
//                 print("this account is areleay existst")
//                 print(data[i])
//                 break
//             if re.search("[A-Z]",password1) and re.search("[a-z]",password1) and re.search("[0-9]",password1) and  re.search("[#,$,%,&,@]",password1):
//                 password2=input("confirm ur password:")
//                 if password1==password2:
//                     print("congrates",user_name)
//                     description=input("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//                     dob=input("enter ur dob:")
//                     hobbies=input("enter ur hobbies:")
//                     gender=input("enter ur gender f/m :")
//                     print("congress",user_name,"u have successfully signup")
//                     l1=["name","password","describtion","DOB","Hobbies","Gender"]
//                     l2=[user_name,password2,description,dob,hobbies,gender]
//                     dic2={}
//                     for i in range(0,len(l1)):
//                         dic2.update({l1[i]:l2[i]})
//                     list1.append(dic2)
//                     data.update({password2:list1})
//                     with open("user.json","w")as injson :
//                         json.dump(data, injson,indent=2)
//                 else:
//                     print("Passwords didn't match.")                                                                                                                                    
//             else:
//                 print("weak password")

//     elif user=="login":
//         name=input("enter the usee_name:")
//         password=input("enter the password:")
//         with open("user.json","r")as file :
//             data=json.load(file)
//         for i in data:
//             if i==password:
//                 print("ur given information is correct")
//                 print(data[i])
//                 break
//         else:
//             print("sorry ur password is wrong")

