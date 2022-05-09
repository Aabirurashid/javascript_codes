var chr=[ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
a=""
i=0
while (i<chr.length){
    j=0
    while (j<chr[i].length){
        a=a+chr[i][j]
        j++
    }
    i++
}
console.log(a)