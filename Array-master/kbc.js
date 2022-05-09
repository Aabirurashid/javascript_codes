var question_list=[
    "how many continents are there",
    "what is the capital of india",
    "NG mai kon se course padhaya jata hai",
]
var option_list=[
    ["four","nine","seven","eight"],
    ["chandigarh","bhopal","chennai","delhi"],
    ["software engineering","counseling","tourism","agriculture"]
]
var solution_list=[3,4,1]
var answer_list=[
    ["1.four","3.seven"],
    ["2.bhopal","4.delhi"],
    ["1.software engineering","4.agriculture"]
]
function kbc_game(){
console.log("koun bnega crorepati(kbc)")
i=0
s=0
count=0
while (i<question_list.length){
    console.log(question_list[i])
    j=0
    k=i
    while (j<option_list[i].length){
        var p=(option_list[i][j])
        console.log(j+1,p)
        j++;
    }
    var a=require("readline-sync")
    var num=a.question("do u want 50 50 lifeline:")
    if (num=="yes"){
        console.log("50 50 lifeline");
        if (count<1){
            console.log(answer_list[i]);
            var num2=a.questionInt("enter the answer:")
            if (num2==solution_list[i]){
                s=s+10000
                console.log("ur answr is correct");
                console.log("u win RS/-",s);
            }
            else{
                console.log("ur answer is incorrect")
                break
            }
            count=count+1
        }
        else{
            console.log("u already use lyfline")
            var m=a.questionInt("enter ur answer:")
            if (m==solution_list[i]){
                console.log("congrats ur answer is right");
                s=s+1000
                console.log("u win",s);
            }
            else{
                console.log("ur answer is wrong")
                console.log("u can play again")
                console.log("u win ",s)
                break
            }
        }
    }
    else{
        k=a.questionInt("enter ur answer:")
        if (k==solution_list[i]){
            console.log("right answer")
            s=s+100000
            console.log("u win RS/-",s)
            console.log("congrats")
        }
        else{
            console.log("no chance")
            console.log("ur answer is wrong")
        }
        
    }
    i++;
}
}
kbc_game()
