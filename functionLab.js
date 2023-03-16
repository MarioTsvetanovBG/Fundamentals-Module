function formatGrade(grade) {
    if (grade < 3) {
        return "Fail (2)"
    } else if (grade < 3.5) {
        return `Poor (${grade.toFixed(2)})`
    } else if (grade < 4.5) {
        return `Good (${grade.toFixed(2)})`
    } else if (grade < 5.5) {
        return `Very good (${grade.toFixed(2)})`
    } else {
        return `Excellent (${grade.toFixed(2)})`
    }
}
let formatedGrade = formatGrade(3)
console.log(formatedGrade)


function mathPower(number, power) {
    return Math.pow(number, power);
}

function repeatString (text, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += text;
    }
    return result;
}

function orders(products, orders) {
    /*
    · coffee - 1.50
    · water - 1.00
    · coke - 1.40
    · snacks - 2.00
    */
    let price = 0;
    switch (products) {
        case "coffee": price = 1.5; break;
        case "water": price = 1; break;
        case "coke": price = 1.4; break;
        case "snacks": price = 2; break;
    }
    let result = (price * orders).toFixed(2);
    return result;
}


function simpleCalculator(a, b, operator) {
    
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;  
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;  

    switch (operator) {     //след return, не се стига до break;
        case "multiply": return multiply(a, b);
        case "divide": return divide(a, b); 
        case "add": return add(a, b); 
        case "subtract": return subtract(a, b);
    }
}


function signCheck(a, b, c) {
    //Try to do this WITHOUT multiplying the 3 numbers.

    if (a >= 0 && b >= 0 && c >= 0) {
        return "Positive";
    } else if (a < 0) {
        if (b < 0 && c >= 0) {
            return "Positive";
        } else if (b >= 0 && c < 0) {
            return "Positive";
        } else {
            return "Negative";
        }
    } else if (b < 0) {
        if (a < 0 && c >= 0) {
            return "Positive";
        } else if (a >= 0 && c < 0) {
            return "Positive";
        } else {
            return "Negative";
        }
    } else if (c < 0) {
        if (a < 0 && b >= 0) {
            return "Positive";
        } else if (a >= 0 && b < 0) {
            return "Positive";
        } else {
            return "Negative";
        }
    }   
}