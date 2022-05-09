var magic_square = [
    [8, 3, 4],    
    [1, 5, 9],
    [6, 7, 2],
]
var i=0;
while (i<magic_square.length){
    var j=0
    var sum=0
    while (j<magic_square.length){
        sum=sum+magic_square[i][j]
        j=j+1  
    }
    console.log("row",i+1,sum)   
    var m=0
    var sum1=0
    while (m<magic_square.length){
        sum1=sum1+magic_square[m][i]
        m=m+1
    }    
    console.log("coulmn",i+1,sum1)
    i=i+1
}
var n=0
var sum2=0
while (n<magic_square.length){
    sum2=sum2+magic_square[n][n]
    n=n+1
}console.log("diagnolal 1 ",sum2)
var k=0;
var sum3=0;
while (k<magic_square.length){
    p=((magic_square.length)-1)-k
    while (p<(magic_square.length)-k){
        sum3=sum3+magic_square[k][p]
        p=p+1
    k=k+1
    }
}    
console.log("diagnolal 2",sum3)
if (sum===sum1 && sum2===sum3 && sum1===sum2){
    console.log("its magic square")
}    
else{
    console.log("its not magic square")
}