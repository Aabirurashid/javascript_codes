var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var even=0;
var odd=0;
for (i of elements){
    if (i%2==0){
        even+=1;
    }
    else{
        odd+=1
    }
}
console.log(even)
console.log(odd)