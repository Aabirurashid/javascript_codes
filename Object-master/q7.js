myDict= {
    1: 'NAVGURUKUL',
    2: 'IN',
    3:{
    'A' : 'WELCOME',
    'B' : 'To',
    'C' : 'DHARAMSALA'
    }
    }
delete myDict[3]['A']
console.log(myDict)

for (i in myDict){
    if(typeof[i]=='object'){
        delete myDict[i]['A']
    }
}
console.log(myDict)