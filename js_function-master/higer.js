const interveiwQuestion=(name)=>{
    if (name==="Aabiru"){
        return function(topic){
            console.log(`hii ${name}.what is the ${topic}.plx explain us.`)
        }
    }
    if (name==="jabeena"){
        return function(topic){
            console.log(`hii ${name}.what is the ${topic}.plx explain us.`)
        }
    }
    if (name==="razia"){
        return function(topic){
            console.log(`hii ${name}.what is the ${topic}.plx explain us.`)
        }
    }
    else{
        return function(){
        console.log("welcome to interview");
        }
    }

}
interveiwQuestion("Aabiru")("api")
interveiwQuestion("jabeena")("calback")
interveiwQuestion("raxia")("promise")