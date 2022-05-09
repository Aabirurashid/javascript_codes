var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var Crorepati=0
var Lakhpati=0
var Dilwale=0
for (var i of kitna_paisa_hai){
    if (i>=10000000){
        Crorepati+=1
    }
    else if (i>=100000){
        Lakhpati+=1
    }
    else{
        Dilwale+=1

    }
}
console.log(Crorepati);
console.log(Lakhpati)
console.log(Dilwale)
