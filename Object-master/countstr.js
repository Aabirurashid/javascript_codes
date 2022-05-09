var c="Aabirurashid"
var u={}
var l=[]
for (i of c){
    if (l.includes(i)){
        u[i]=u[i]+1
    }
    else{
        l.push(i)
        u[i]=1
    }
}
console.log(l)

// var a='w3resource'
// var count=0
// var dic={}
// for (i in a){
//     if (!a.includes(i)){
//         dic[i]=dic[i]+1
//     }     
//     else{
//         dic[i]=1
//      }
//     }
// console.log(dic)


