function sumFirstAndLast(arrayOfStrings) {
    let firstEl = Number(arrayOfStrings.shift());
    let lastEl = Number(arrayOfStrings.pop());
    let sum = firstEl + lastEl;
    console.log(sum);
}


function negativeOrPositiveNumers(array) {
    let newArr = [];
    for (let el in array) {
        let numOfElement = Number(array[el]);
        if (numOfElement < 0) {
            newArr.unshift(numOfElement);
        } else {
            newArr.push(numOfElement);
        }
    } 
    console.log(newArr.join('\n'))
}
negativeOrPositiveNumers([3, 5, 10, -2])


function firstAndLastKNumbers(array) {

    //с тази команда освен, че присвояваме нулевия индекс от масива,
    //също така мутираме целия масив и го скъсяваме с един елемент;
    let k = Number(array.shift()); 

    let firstArr = array.slice(0, k);
    let secondArr = array.slice(array.length - k);
    console.log(firstArr.join(' '));
    console.log(secondArr.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9])


function lastKNumbersSequence(lengthOfSeq, kElements) {
    let array =  [1];
    for (let el = 1; el < lengthOfSeq; el++) {
        let sumOfK = 0;
        for (let sum = 0; sum < kElements; sum++) {
            let newNum = Number(array[el - kElements + sum])
            if ((el - kElements + sum) >= 0) {
                sumOfK += newNum;
            } else {
                continue;
            } 
        }
        array.push(sumOfK);
    }
    console.log(array.join(' '));
}

function processOddNumbers(array) {
    /*
    You are given an array of numbers. 
    Write a function that prints the elements at odd positions from the array, 
    doubled and in reverse order.
    */

   let newArr = array
   .filter((x, i) => i % 2 !== 0)
   .map(x => x * 2)
   .reverse();
   console.log (newArr.join(' '));
}
processOddNumbers([5, 10, 20, 30, 40, 50, 60])

function smallestTwoNumbers(array) {
    let smallest = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    let secondSmallest = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < secondSmallest && array[i] !== smallest) {
            secondSmallest = array[i];
        }
    }
    console.log(smallest, secondSmallest);
}



function listOfProducts(array) {

    //The sort function rearranges the array in ascending order, 
    //тоест няма да добавяме нищо в сорт(), а ще използваме неговата default фунция
    let sorted = array.sort();
    for(let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`)
        //console.log(`${i + 1}.${array[i]}`) -- и това работи, защото 'сорт()' мутира и оригиналния масив;
    }
}