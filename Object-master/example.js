// var vegetables ={
//     veg1:"potato",
//     veg2:"brinjal",
//     veg3:"bottle gourd"
//     }
// console.log(vegetables.veg2)
// console.log(vegetables.veg1)
// console.log(vegetables.veg3)
// var a=10
// while(a<=100){
//     console.log(a)
//     a+=10
    
// }

// var i=1
// while (i<=10){
//     c=i*i
//     console.log(i+"*"+i+"="+c)
//     i++
// }


// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//     };
    
    
//     myHome["name"]="my Villa";
    
//     console.log(myHome);

// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//     };
// myHome["Good"]="true"
// console.log(myHome)    

// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//     };
// delete myHome.Colour
// console.log(myHome)

// var myDetails={
//     "name":"kumar",
//     "age":24
//     }

// console.log(myDetails.hasOwnProperty("key"))

// var cars = ["Maruti", "Mercedes", "BMW"];
// for (car of cars){
// console.log(cars[car])
// }


// const campus_list=["Bangalore","Dharamshala","Pune","Bangalore_another"]
// for(let campus in campus_list){
// console.log(campus_list[campus])
// }

var a=['dog','dog','dog','cat','cat','elephant','pearot','pearot','pearot','pearot','pearot']
const data=(array)=>{
    const obj={};
    a.forEach(item=>{
        if(obj[item]){
            obj[item]++;
        }else{
            obj[item]=1;
        }
    });
    return obj;
}
console.log(data(a))