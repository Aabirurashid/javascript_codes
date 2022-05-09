const youtube1={
    name:"Aabiru",
    content:"programing",
    features:function(ratig,support){
        console.log(`very friendly way of teaching ${this.name}.this is my fav ${this.content} chanel.i will love to give ${ratig} star.please ${support} ${this.name} channel.`)
    }
}
const youtube2={
    name:"jabeena",
    content:"kuch bi",
}
youtube1.features.apply(youtube2,[4,"subscribe"]);