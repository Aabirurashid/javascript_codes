console.log("**WELCOME TO FACEBOOK LOGIN SIGNUP PAGE**")
var readline=require("readline-sync")
var user=readline.question("do u want login or signup:")
if (user=="signup"){
    console.log("next");
    var language=readline.question("choose the language:")
    if (language=="Engish"||"hindi"){
        console.log("next");
        var email=readline.question("enter the email:")
        if (email.includes("@gmail.com")){
            console.log("next");
            var number=readline.questionInt("enter the number:")
            if (number>1000000000||number<10000000000){
                console.log("ok");
                var firstname=readline.questionInt("enter the firstname:")
                if (firstname==firstname){
                    console.log("next");
                    var lastname=readline.question("enter the lastname:")
                    if (lastname==lastname){
                        console.log("ok next");
                        var creatpswrd=readline.questionInt("create a password:")
                        if (creatpswrd==letters && creatpswrd=="$@" && creatpswrd==number){
                            console.log("strong pawrd");
                            console.log("signup sucessfully");
                        }
                        else{
                            console.log("week paswrd");
                        }           
                    }
                    else{
                        console.log("not now");
                    }
                }
                else{
                    console.log("not");
                }
            }
            else{
                console.log("wrong number");
            }
        }
        else{
            console.log("try again");
        }
    }
    else{
        console.log("wrong");
    }
}
else{
    if(user=="login"){
        var name=readline.question("enter the name:")
        var password=readline.questionInt("enter the password:")
        
        if (password==creatpswrd){
            console.log("ur account has been logged sucessfully")        
        }
        else{
            console.log("try again");
        }
    }
    else{
        console.log("try after sometime")
    }
}

