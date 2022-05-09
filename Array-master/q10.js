// var marks = [ 
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49],
// ]
// var sum=0
// for (i=0;i<marks.length;i++){
    
//     for (j=0;j<marks[i].length;j++){
//         sum=sum+marks[i][j]
//     }
// }
// console.log(sum)

var marks = [ 
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49],
]
var sum=0
for (var i of marks){
    for (var j of i){
        sum+=j
    }
}
console.log(sum)