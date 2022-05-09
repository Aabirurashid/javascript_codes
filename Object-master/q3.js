// var mainString=["My", "name", "is", "kumar", "and", "my", "friends" ,"name" ,"is" ,"Dhamu"]
// var subString="is"
// count=0
// for( let i in mainString){
//     if (mainString[i]=="is"){
//     count=count+1
//     }
// }
// console.log("The substring",count,"times in mainstrig")


var str="so in which we have to use higher order function"
var spaces=' '
count=0
for(var i=0;i<str.length;i++){
    if (str[i]==' '){
    count=count+1
    }
}
console.log("The substring",count,"times in mainstrig")


// const str = 'this is a string';
// var str='my nam is kumar and my friends name is dhanu'
// const countSpaces = (str = '') => {
//    let count = 0;
//    for(let i = 0;
//    i < str.length; i++){
//       const el = str[i];
//       if(el !== ' '){
//          continue; };
//          count++; };
//       return count;
// };
// console.log(countSpaces(str));