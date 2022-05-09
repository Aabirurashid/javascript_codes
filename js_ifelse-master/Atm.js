console.log("WELCOME TO MY ATM")
var num=require("readline-sync")
var card=num.question("enter the card:")
if (card=="creidt card"||"debitcard"){
    console.log("card sucessfully inserted");
    var language=num.question("enter the language:")
    if (language=="english"||"hindi"){
        console.log("yes");
        var pincode=num.questionInt("enter the 4 digit pin:")
        if (pincode=="2580"){
            console.log("correct");
            var transaction=num.question("chose the transction:")
            if (transaction=="deposite"||"transfer"||"withdrawal"){
                console.log("next");
                var account=num.question("enter the account type:")
                if (account=="saving account"||"current account"){
                    console.log("next");
                    var amount=num.questionInt("enter the amount:")
                    if (amount<=15000){
                        console.log("next");
                        var receipt=num.question("take the recipt if needed:")
                        if (receipt=="yes"||"no"){
                            console.log("thanku");
                        }
                        else{
                            console.log("no need");
                        }
                    }
                    else{
                        console.log("nothing");
                    }
                }
                else{
                    console.log("nothing")
                }
            }
            else{
                console.log("nothing");
            }
        }
        else{
            console.log("nothing")
        }
    }
    else{
        console.log("nothing");
    }

}
else{
    console.log("wrong")
}


