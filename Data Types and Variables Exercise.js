function sumDigit(number) { 
    //дадено е число, ние трябва да сумираме всяка негова цифра и да изведем отговор
    let numberToString = number.toString();
    let numberToStringLength = numberToString.length;
    let sumOfDigits = 0;

    for (let position = 0; position < numberToStringLength; position++) {
        let currentNumber = Number(numberToString[position]);
        sumOfDigits += currentNumber;
    }
    console.log(sumOfDigits)
}
sumDigit(1550);

function charsToString(a, b, c) {
    console.log(a + b + c);
}

function townInfo(town, population, area) {
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
}

function convertMetersToKilometers(meters) {
    let kilometers = meters / 1000;
    console.log(kilometers.toFixed(2));
}

function poundsToDollars(pounds) {
    // 1 British Pound = 1.31 Dollars
    const pound = 1.31;
    let dollars = pounds * pound;
    console.log(dollars.toFixed(3));
}

function reversedChars(a, b, c) {
    console.log(`${c} ${b} ${a}`);
}

function lowerOrUpper(char) {
    let charCode = char.charCodeAt(0)
    if (charCode < 97) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

function calculator(numOne, operator, numTwo) {
    let result = 0;
    if (operator == '+') {
        result = numOne + numTwo;
    } else if (operator == '-') {
        result = numOne - numTwo;
    } else if (operator == '*') {
        result = numOne * numTwo;
    } else if (operator == '/') {
        result = numOne / numTwo;
    }
    console.log(result.toFixed(2));
}

function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let counter = 1; 
    let brokenHelmet = 0;
    let brokenSword = 0;
    let borkenShield = 0;
    let brokenArmor = 0;

    while (counter <= lostFights) {
        let isBroken = false;
        if (counter % 2 === 0) {
            brokenHelmet++;
            isBroken = true;
        }
        if (counter % 3 === 0) {
            brokenSword++;
            if (isBroken) {
                borkenShield++;
                if (borkenShield % 2 === 0) {
                    brokenArmor++;
                }       
            }
        }
        counter++;
    }
    let expenses = brokenHelmet * helmetPrice + brokenSword * swordPrice + borkenShield * shieldPrice + brokenArmor * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

function spiceMustFlow(startingYield) {
    let operationalYield = startingYield;
    let yieldPerDay = 0;
    const workersConsumation = 26;
    let totalExtraction = 0;
    let days = 0;
    while (true) {
        if (operationalYield < 100) {
            if (totalExtraction < 26) {
                totalExtraction = 0;
            } else {
                totalExtraction -= 26;
            }
            break;
        }
        yieldPerDay = operationalYield - workersConsumation;
        totalExtraction += yieldPerDay;
        days++;
        operationalYield -= 10;
    }
    console.log(days);
    console.log(totalExtraction);
}
        

