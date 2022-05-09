var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum_even=0
var sum_odd=0
for (var i of elements){
    if (i%2==0){
        sum_even+=i
    }
    else{
        sum_odd+=i
    }
}
console.log(sum_even)
console.log(sum_odd)