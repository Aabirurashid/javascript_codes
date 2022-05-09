var calculator=require("readline-sync")
var number1=calculator.questionInt("enter the number:");
var number2=calculator.questionInt("enter the secound number:");
var operator=calculator.question("enter the operator (+,-,*,/,%:)");
switch(operator){
    case "+":
        var result=parseFloat (number1)+parseFloat(number2)
        console.log(`${number1}+${number2}=${result}`)
        break
    case "-":
        var result=(number1)-(number2)
        console.log(`${number1}-${number2}=${result}`)
        break
    case "*":
        var result=(number1)*(number2)
        console.log(`${number1}*${number2}=${result}`)
        break
    case "/":
        var result=(number1)/(number2)
        console.log(`${number1}/${number2}=${result}`)
        break
    case "%":
        var result=(number1)%(number2)
        console.log(`${number1}%${number2}=${result}`)
        break

    default:
        console.log("invalid operator")

}
