function train(array) {

    //The first element will be a string containing wagons (numbers). 
    //Each number inside the string represents the number of passengers that are currently in a wagon.
    let wagons = array.shift().split(' '); //превръщаме взетия стринг в масив

    //The second element in the array will be the max capacity of each wagon (single number).
    let maxCapacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let currentFunction = array[i].split(' ');
        let numberToAdd = Number(currentFunction[1]);
        if (currentFunction[0] === "Add") {
            wagons.push(numberToAdd);
        } else {
            for (let j = 0; j < wagons.length; j++) {
                let wagonsSeats = Number(wagons[j]);
                let numberToAdd = Number(currentFunction[0]);
                if (wagonsSeats + numberToAdd <= maxCapacity) {
                    wagons[j] = numberToAdd + wagonsSeats;
                    break;
                } else {
                    continue;
                }
            }
        }
    }
    console.log(wagons.join(' '))  //изпчатваме стринг
}

train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])





function distinctArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let currentNum = Number(array[i])
        if (!newArray.includes(currentNum)) {
            newArray.push(currentNum);
        }
    }
    console.log(newArray.join(' '));
}


function houseParty(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let splittedSymbol = array[i].split(' ');
        let guestName = splittedSymbol[0];
        if (splittedSymbol.length === 3) {
            if (newArray.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                newArray.push(guestName);
            }
        } else {
            if (newArray.includes(guestName)) {
                let indexName = newArray.indexOf(guestName);
                newArray.splice(indexName, 1);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        }
    }
    console.log(newArray.join('\n'));
}





function sorting(array) {

    //няма директно да манипулираме входните данни, ами създаваме ново копие на входния масив;
    let workingArray = array.slice(0)

    workingArray.sort((a, b) => a - b)

    let finalArray = [];
    let counter = 0;

    while (workingArray.length > 0) {
        if (counter % 2 === 0) {
            let lastElement = workingArray.pop();
            finalArray.push(lastElement);
        } else {
            let firstElement = workingArray.shift();
            finalArray.push(firstElement);
        }
        counter++;
    }
    console.log(finalArray.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 32]);


function sortAnArrayByTwoCriteria(arr) {
    let workArr = arr.slice(0)
    let finalArr = workArr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(finalArr.join('\n'))
}
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);




function bombNumbers(arrOne, arrTwo) {
    let workingArr = arrOne.slice(0);
    let bomber = Number(arrTwo[0]);
    let power = Number(arrTwo[1]);
    if (workingArr.includes(bomber)) {
        while (workingArr.includes(bomber)) {
            let indexOfBomb = workingArr.indexOf(bomber);
            let startingIndex = indexOfBomb - power;
            if (startingIndex < 0) {
                startingIndex = 0;
            }

            workingArr.splice(indexOfBomb, power + 1);
            workingArr.splice(startingIndex, power);
        }
    }
    let sum = 0;
    for (const el of workingArr) {
        sum += Number(el);
    }
    console.log(sum)
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);



function searchForANumber(array, functionsToDo) {
    let arrayLength = Number(functionsToDo[0]);
    let elementsToShift = Number(functionsToDo[1]);
    let searchFor = Number(functionsToDo[2]);



    let slicedArray = array.slice(0, arrayLength);



    for (let i = 0; i < elementsToShift; i++) {
        slicedArray.shift();
    }


    let counter = 0;
    for (let j = 0; j < slicedArray.length; j++) {
        if (Number(slicedArray[j]) === searchFor) {
            counter++;
        }
    }
    console.log(`Number ${searchFor} occurs ${counter} times.`)
}