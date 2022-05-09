var readline=require("readline-sync")
var a=readline.question("enter the day:")
var b=readline.question("enter your choice:")
switch(a){
    case ("monday"):
        switch (b){
            case "breakfast":
                console.log("poha")
                break
            case "launch":
                console.log("rajma chawal")
                break
            case "dinner":
                console.log("pulaw")
                 break
            
        }
        break
    case("tuesday"):
        switch(b){
            case "Breakfast":
                console.log("itly")
                break
            case "launch":
                console.log("chawal bindi")
                break
            case "dinner":
                console.log("roti sabji")
                break

        }
    case ("Wednesday"):
        switch(b){
            case "Breakfast":
                console.log("daliyah")
                break
            case "lunch":
                console.log("chawal aur karela")
                break
            case "dinner":
                console.log("rajma puri")
                break

        }
        break
    case ("thursday"):
        switch(b){
            case "Breakfast":
                console.log("sabudana")
                break
            case "lunch":
                console.log("choule bhature")
                break
            case "dinner":
                console.log("puri baji")
                break
        }
        break
    case("friday"):
        switch(b){
            case "Breakfast":
                console.log("maggie")
                break
            case "lunch":
                console.log("peele chawal")
                break
            case "dinner":
                console.log("paneer ")
                break

        }
        break
    case("saturday"):
        switch(b){
            case "Breakfast":
                console.log("pasta")
                break
            case "lunch":
                console.log("shimla mirch")
                break
            case "dinner":
                console.log("allu puri")
                break

        }
        break
    case("sunday"):
        switch(b){
            case "Breakfast":
                console.log("utappa")
                break
            case "lunch":
                console.log("roti bengan")
                break
            case "dinner":
                console.log("allu tamater")
                break
        }
        break
    default:
        console.log("nothing")
        break
}          