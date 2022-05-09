var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
    }

a=[]
for(i in my_dict){
    a.push(my_dict[i])
}
// console.log(a)
var max=0
var b=[]
var  x=0
while (x<a.length){ 
    j=0
    while (j<a.length){
        if (a[j]>a[j+1]){
            a[j],a[j+1]=a[j+1],a[j]
        j=j+1
        }
    }
    x=x+1
}
// console.log(a)
y=1
while (y<=3){
    b.push(a[-y])
    y=y+1
// console.log(b)
}
console.log(b)