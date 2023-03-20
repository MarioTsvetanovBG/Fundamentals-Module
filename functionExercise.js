function smallestOfThreeNumbers(a, b, c) {
    console.log(Math.min(a, b, c));
}
smallestOfThreeNumbers(1, -9999, 0.93)

function addAndSubtract(first, second, third) {
    function add(a, b) {
        let sumOfTwo = a + b;
        return sumOfTwo;
    }
    let sum = add(first, second);

    function subtract(sumOfTwo, third) {
        return sumOfTwo - third;
    }
    let result = subtract(sum, third);
    console.log(result)
}
addAndSubtract(10, 20, 50)


function addAndSubtractOptimizated(a, b, c) {
    function add(first, second) {
        return first + second;
    }
    let sum = add(a, b);
    function subtract(sumOfFirstAndSecond, third) {
        return sumOfFirstAndSecond - third;
    }
    let result = subtract(sum, c);
    return result;
}



function charactersInRange(one, two) {
    //пишем това, защото не е сигурно при подадените данни, кое ще е по-голяма стойност. Така се подсигуряваме.
    let first = Math.min(one.charCodeAt(), two.charCodeAt());
    let second = Math.max(one.charCodeAt(), two.charCodeAt());
    let newArray = [];
    for (let index = first + 1; index < second; index++) {
        let newSymbol = String.fromCharCode(index);
        newArray.push(newSymbol)
    }
    return newArray.join(' ');
}

function oddAndEvenSum(num) {
    let numToString = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numToString.length; i++) {
        let stringToNum = Number(numToString[i]);
        if (stringToNum % 2 !== 0) {
            oddSum += stringToNum
        } else {
            evenSum += stringToNum
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
 
function palindromeIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        //подсигуряваме се, че числото от масива ще е число
        let arrayNum = Number(array[i]); 
        
        //подсигуряваме се, че числото от масива ще е стринг
        let a = array[i].toString(); 
 
         //стринга го превръщаме в масив, за да може да обърнем позициите на елементите в него
        let b = a.split('').reverse();
 
        //обратно в стринг
        let c = b.join(''); 
 
        //от стринг към число;
        let reversedArrayNum = Number(c); 
        if (arrayNum === reversedArrayNum) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
 
function palindromeIntegersSecondVersion(array) {
    for (let i = 0; i < array.length; i++) {
        let firstNum = Number(array[i]);
        let stringNum = array[i].toString();
        let reversedStringNum = ""
        for (let j = stringNum.length - 1; j >= 0; j--) {
            reversedStringNum += stringNum[j];
        }
        let secondNum = Number(reversedStringNum);
        if (firstNum === secondNum) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

function passwordValidator(password) {
    /*
    · "Password must be between 6 and 10 characters"
    · "Password must consist only of letters and digits"
    · "Password must have at least 2 digits" 
    */
    
    let isTrueFirst = false;
    let isTrueSecond = true;
    let isTrueThird = false;

    //първа проверка
    let passwordLength = password.length;
    if (passwordLength >= 6 && passwordLength <= 10) {
        isTrueFirst = true;
    }
    
    //втора проверка
    for (let i = 0; i < passwordLength; i++) {
        let elementFromPassword = password[i].charCodeAt();
        if ((elementFromPassword >= 48 && elementFromPassword <= 57) || 
        (elementFromPassword >= 65 && elementFromPassword <= 90) || 
        (elementFromPassword >= 97 && elementFromPassword <= 122)) {

        } else {
            isTrueSecond = false;
            break;
        }
    }
   
    //трета проверка
    let counter = 0;
    for (let i = 0; i < passwordLength; i++) {
        let elementFromPassword = password[i].charCodeAt();
        if (elementFromPassword >= 48 && elementFromPassword <= 57) {
            counter++;
            if (counter >= 2) {
                isTrueThird = true;
            }
        }
    }

    if (isTrueFirst === true && isTrueSecond === true && isTrueThird === true) {
        console.log(`Password is valid`);
    } 
    if (isTrueFirst === false) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (isTrueSecond === false) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (isTrueThird === false) {
        console.log(`Password must have at least 2 digits`)
    }
}


function nXNMatrix(num) {
    for (let i = 0; i < num; i++) {
        let array = [];
        for (let j = 0; j < num; j++) {
            array.push(num);
        }
        console.log(array.join(' '));
    }
}


function perfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        return 'We have a perfect number!'
    } else {
        return "It's not so perfect."
    }
}


function loadingBar(num) {
    if (num === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        let moduleRep = num / 10;
        let dotRep = (100 - num) / 10;
        let total = '%'.repeat(moduleRep) + '.'.repeat(dotRep);
        console.log(`${num}% [${total}]`);
        console.log("Still loading...");
    }
}
loadingBar(30)


function factorialDivision(a,b) {
    let sumA = 1;
    let sumB = 1;
    for (let i = 1; i <= a; i++) {
        sumA *= i;
    }
    for (let j = 1; j <= b; j++) {
        sumB *= j;
    }
    let total = (sumA / sumB).toFixed(2)
    return total;
}
factorialDivision(5, 2)