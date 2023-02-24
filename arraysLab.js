function sumFirstAndLastArrayElements(array) {
    let firstEl = Number(array[0]);
    let lastEl = Number(array[array.length - 1]);
    let sum = firstEl + lastEl;
    console.log(sum);
}

function dayOfWeek(number) {
    let array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (number > 0 && number <= 7) {
        console.log(array[number - 1]);
    } else {
        console.log('Invalid day!');
    }
}

function reverseAnArrayOfNumbers(number, array) {
    //3, [10, 20, 30, 40, 50] ----> 30 20 10

    let newArray = [];
    for (i = 0; i < number; i++) {
        newArray.push(array[number - 1 - i]);
    }
    console.log(newArray.join(' '));  // представя масива нагледно
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])


function reverseInPlace(array) {
    //Write a program, which receives an array of strings. 
    //Your task is to reverse the array without creating a new array. 
    //Print the resulting elements on a single line, space-separated
    //['a', 'b', 'c', 'd', 'e'] ----> e d c b a
    let arrayLength = array.length / 2;
    for (i = 0; i < arrayLength; i++) {
        let firstElement = array[i];
        let lastIndex = array.length - i - 1; 
        array[i] = array[lastIndex];
        array[lastIndex] = firstElement;
    }
    console.log(array.join(' '));
}
reverseInPlace([10, 20, 30, 40, 50]);


function sumEvenNumbers(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        let newNum = Number(array[i]);
        if (newNum % 2 === 0) {
            result += newNum;
        }
    }
    console.log(result);
}


function evenAndOddSubstraction(array) {
    let evenSum = 0;
    let oddSum = 0;
    for (let num of array) {
        let numNum = Number(num);
        if (numNum % 2 === 0) {
            evenSum += numNum;
        } else {
            oddSum += numNum
        }
    }
    let result = evenSum - oddSum;
    console.log(result);
}



function equalArrays(arrayOne, arrayTwo) {
    let arraySum = 0;
    let indexCollection = 0;
    isTrue = false;
    for (let i = 0; i < arrayOne.length; i++) {
        let numOne = Number(arrayOne[i]);
        if (arrayOne[i] === arrayTwo[i]) {
            arraySum += numOne;
        } else {
            isTrue = true;
            indexCollection = i;
            break
        }
    }

    if (isTrue === false) {
        console.log(`Arrays are identical. Sum: ${arraySum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexCollection} index`);
    }
}


function condenseArrayToNumber(array) {
    let condensed = [];
    if (array.length <= 1) {
        console.log(array[0]);
    } else {
        while (true) {
            for (let i = 0; i < array.length - 1; i++) {
                let firstNumber = array[i];
                let secondNumber = array[i + 1];
                let result = firstNumber + secondNumber;
                condensed.push(result);
            }
            if (condensed.length === 1) {
                console.log(condensed[0])
                break;
            } else if (condensed.length !== 1) {
                array = condensed;
                condensed = [];
            }
        }
    }
}