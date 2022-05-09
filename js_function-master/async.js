const fun2=()=>{
    setTimeout(()=>{
        console.log("fun2 is startng")
    },2000)
}
const fun1=()=>{
    console.log("fun1 is stating")
    fun2()
    console.log("fun1 is ending")
}
fun1()