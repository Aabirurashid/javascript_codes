var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max_no=0
var sec_max=0
for (i=1;i<numbers.length;i++){
    if (numbers[i]>max_no){
    if (max_no<sec_max){
        sec_max=max_no    
    }
    max_no=numbers[i]
    }
    else{
        if (sec_max<numbers[i]){
            sec_max=numbers[i]
        }
    }
}
console.log(sec_max)