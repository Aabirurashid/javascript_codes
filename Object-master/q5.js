dict={"name":"Raju", "marks":56}
var a=require("readline-sync")
var b=a.question("enter the string:")
for (i in dict){
    if (i==b){
        console .log("exist")
        break
    }
    else{
        console.log("not exist")
        break
    }
}

