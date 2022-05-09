// const pobj1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3,4,5]
//         resolve(roll_no)
//         reject("error while communicating")

//     },2000)

// })
// const getBio=(indexdata)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout((indexdata)=>{
//             let bio={
//                 name:"Aabiru",
//                 age:17
//             }
//             resolve(`my rollno is ${indexdata}.my name is ${bio.name} and my age is ${bio.age}`)
//             reject("nothing")
//         },2000,indexdata)
//     })
// }
// pobj1.then((rollno) =>{
//     console.log(rollno)
//     return getBio(rollno[1])

//     }).then((kuchbi)=>{
//         console.log(kuchbi)

//     }).catch((error) =>{
//     console.log(error)
// })

// async function getdata(){
//     const rollno=await pobj1;
//     console.log(rollno)
//     const data=await getBio(rollno[1])
//     console.log(data)
//     return data;
// }
// const getname=getdata().then((myname)=>{
//     console.log(myname)
// })


function prom(a,b){
    return new Promise((resolve)=>{
        // console.log("fetching data")
        var c=a+b
        setTimeout(()=>{
            if (a,b){
                resolve(`correct ur answer is ${c}`)
            }
            else{
                reject("incorrect")
            }
        },2000)
    })
}

async function num(){
    // console.log("dfg")
    const c=await prom(3,7);
    console.log(c)
}
num()
// prom(5,2).then((ruselt) =>{
//     console.log(ruselt)
 
// }).catch((error)=>{
//     console.log(error)
// })


// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
// asyncCall();
  