var b=[]
var word="MISSISSIPPI"
var a={}
for (i of word){
    if(b.includes(i)){
        a[i]=a[i]+1
    }
    else{
        a[i]=1
        b.push(i)
    }
}
console.log(a)