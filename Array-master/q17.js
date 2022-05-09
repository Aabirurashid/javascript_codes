var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var new_no=[]
for (var i of char_list){
    if(!new_no.includes(i)){
        new_no.push(i)
    }
}
for (var j of new_no){
    count=0
    for (var k of char_list){
        if(j==k){
            count+=1
        }
    }
console.log(j,count,"times")
}
