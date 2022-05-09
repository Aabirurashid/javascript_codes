var name=require("readline-sync")
var a=name.question("enter the string:")
var store=a
var string=" "
for (var i=a.length-1;i>=0;i--){
    string=string=a[i]
}
if (store==string){
    console.log(a,"its palindrome")
}
else{
    console.log(a,"its not palindrome")
}
