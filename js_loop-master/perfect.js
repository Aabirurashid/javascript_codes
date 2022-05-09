var b=require("readline-sync")
var c=b.questionInt("enter the number:")
var sum=0
i=1
while (i<c){
    if (c%i==0){
        sum=sum+i
    }
    i++
}
if (c==sum){
    console.log(c,"itx a perfct number")
}
else{
    console.log(c,"itx not a perfect number")
}



