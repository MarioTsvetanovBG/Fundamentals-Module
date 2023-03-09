//1. Print N-th Element
function nthElement(arr) {
    let arrLength = arr.length;
    let arrayStep = Number(arr[arrLength - 1]);
    let newArr = [];
    for (let i = 0; i < arrLength - 1; i = i + arrayStep) {
        newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));
}
nthElement(["5", "20", "31", "14", "20", "2"]);

function addAndRemove(array) {
    let ourArr = [];
    let count = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add') {
            ourArr.push(count);
        } else {
            ourArr.pop()
        }
        count++;
    }
    if (ourArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(ourArr.join(' '));
    }
}

function rotateArray(arr) {
    let rotation = Number(arr[arr.length - 1]);

    let modifiedArrayWithoutNumber = [];
    for (let j = 0; j < arr.length - 1; j++) {
        modifiedArrayWithoutNumber.push(arr[j]);
    }
    

    for (let i = 0; i < rotation; i++) {
        let savedElement = modifiedArrayWithoutNumber[modifiedArrayWithoutNumber.length - 1];
        modifiedArrayWithoutNumber.pop();
        modifiedArrayWithoutNumber.unshift(savedElement);
    }

    console.log(modifiedArrayWithoutNumber.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

//4. Non-Decreasing Subset
function nonDecreasing(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            biggest = arr[i];
            newArr.push(biggest);
        }
    }
    console.log(newArr.join(' '));
}
nonDecreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);