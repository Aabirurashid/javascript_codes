var a=[
    {"first":"1"}, 
    {"second": "2"}, 
    {"third": "1"}, 
    {"four": "5"}, 
    {"five":"5"}, 
    {"six":"9"},
    {"seven":"7"}
]
var c=[]
for (var i of a){
    for(var j in i){
        if(!c.includes(i[j])){
            c.push(i[j])
        }
    }
}
console.log(c)
