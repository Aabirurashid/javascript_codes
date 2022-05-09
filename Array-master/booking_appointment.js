var fs=require("fs")
const start="0900"
const ending_time="1730"
var readline=require("readline-sync")  
time=()=>{
    var user="/home/aabirurashid/Desktop/js_list/booking.json"
    var user1="/home/aabirurashid/Desktop/js_list/meeting_start_time"
    exist=fs.existsSync(user)
    exist2=fs.existsSync(user1)
    if (exist==false && exist2==false){
        var booking=readline.question("submission time format YYYY-MM-DD HH:MM:SS:")
        var meeting_start_time=readline.question("meeting start in the format YYYY-MM-DD HH:MM:")
        var employe=readline.question("enter the employee number:")
        var dic1={}
        var dic2={}
        var list=[]
        var list1=[]
        list.push(booking)
        list1.push(meeting_start_time)
        dic1[employe]=list
        dic2[employe]=list1
        fs.writeFileSync("booking.json",JSON.stringify(dic1,null,3));
        fs.writeFileSync("meeting_start_time",JSON.stringify(dic2,null,3));

    }
    else if (exist==true && exist2==true){
        y=fs.readFileSync("booking.json","utf8");
        office=JSON.parse(y)
        t=fs.readFileSync("meeting_start_time.json","utf8");
        office1=JSON.parse(t)
        var booking=readline.question("submission time format YYYY-MM-DD HH:MM:SS:")
        var meeting_start_time=readline.question("meeting start in the format YYYY-MM-DD HH:MM:")
        var employe=readline.question("enter the employee number:")
        var list=[]
        var list1=[]
        list.push(booking)
        list1.push(meeting_start_time)
        dic1[employe]=list
        dic2[employe]=list1
        fs.writeFileSync("booking.json",JSON.stringify(dic1,null,3));
        fs.writeFileSync("meeting_start_time",JSON.stringify(dic2,null,3));

    }
}
r=true
while(r){
    console.log(time());
    var n=readline.question("do  u want meeting")
    if (n=="yes"){
        r=true
    }
    else{
        r=false
    }
}
console.log(time())

    

    

