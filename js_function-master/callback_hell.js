// const getrolln=()=>{
//     setTimeout(()=>{
//         console.log("api is getting")
//         let roll_no=[1,2,3,4,5]
//         console.log(roll_no)
//         setTimeout((rollno)=>{
//             const bio={
//                 name:"Aabiru",
//                 age:17
//             }
//             console.log(`my rollno is ${rollno}.my name is ${bio.name} and my age is ${bio.age}`)
//             setTimeout((name)=>{
//                 bio.gender="female"
//                 console.log(`my rollno is ${rollno}.my name is ${bio.name} and my age is ${bio.age} i am ${bio.gender}`)
                
//             },1000,bio.name)
//         },1000,roll_no[1])
//     },1000)
// }
// getrolln()


// function question(){
//     setTimeout (()=>{
//         function sum(list1){
//             var sum1=0
//             var i=0
//             while(i<list1.length){
//                 sum1=sum1+list1[i]
//                 i++
//             }
//             console.log(sum1,"sum")
//         }
//         sum([1,2,3,4,5])
//         setTimeout(()=>{
//             function mul1(list2){
//                 var i=0
//                 var mul=1
//                 while(i<list2.length){
//                     mul=mul*list2[i]
//                     i++
//                 }
//                 console.log(mul,"mul")
//             }
//             mul1([1,23,4,5,6,7])
//         },2000)
//     },3000)
// }
// question();


function question(){
    setTimeout (()=>{
        function even(list1){
    
            var i=0
            while(i<list1.length){
                if (list1[i]%2==0){
                    console.log(list1[i])
                }
                i++
            }
        }
        even([1,2,3,4,5])
        setTimeout(()=>{
            function odd(list2){
                var i=0
                while(i<list2.length){
                    if (list2[i]%2!==0){
                        console.log(list2[i])
                    }
                    i++
                }
            }
            odd([1,23,4,5,6,7])
        },2000)
    },3000)
}
question();

