function addAndSubtract(array) {
    let arrayLength = array.length;
    let newArray = [];
    let sumBefore = 0;
    let sumAfter = 0;
    let newNum = 0;
    for (let i = 0; i < arrayLength; i++) {
        sumBefore += array[i];
        if (array[i] % 2 === 0) {
            newNum = array[i] + i;
        } else {
            newNum = array[i] - i;
        }
        newArray.push(newNum);
        sumAfter += newNum;
    }
    console.log(newArray);
    console.log(sumBefore);
    console.log(sumAfter);
}

addAndSubtract([5, 15, 23, 56, 35]);

function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
            }
        }
    }
}


function mergeArrays(arr1, arr2) {
    let thirdArr = [];
    let num = "";
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            num = Number(arr1[i]) + Number(arr2[i]);
        } else {
            num = arr1[i] + arr2[i];
        }
        thirdArr.push(num);
    }
    console.log(thirdArr.join(' - '));
}

function arrayRotation(arr, rotation) {
    /*
    За да не обработваме директно входния масив, правим негов клонинг.
    Не може просто да напишем let arrOperation = arr, защото при промяна
    на стойност от единя масив, ще се промени и другия.
    */
    let arrOperation = [];
    for (let i = 0; i < arr.length; i++) {
        arrOperation.push(arr[i]);
    }
    

    /*
    Ако rotation има стойност 50, а масива е 5 елемента, вместо 50 пъти да преминаваме през масива напразно, 
    можем да оптимизираме това, като модулно разделим ротациите на броя елементи от масива, 
    защото на всеки 5 ротации, масива ще е с начален вид. Когато получим този остатък, ще може да видим 
    необходимия минимален брой ротации (завъртания), с които може да получим необходимия отговор.
    В нашият случай 50 % 5 = 0.... тоест ние може да решим задачата с тези стойност, дори без да се налага да 
    завъртаме с фор цикъл през масива.
    */
    let optimization = rotation % arr.length; 
    
    
    for (let i = 0; i < optimization; i++) {
        /*
        създаваме тази променлива (firstElement), за да запазим първия елемент, защото след .shift(), 
        новата първа стойност ще е различна, а ние искаме да запазим тази.
        */
        let firstElement = arrOperation[0]; 
        
        arrOperation.shift();
        arrOperation.push(firstElement); 
    }
    console.log(arrOperation.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);

function maxNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        let isMax = true;
        for (let j = i + 1; j < arr.length; j++) {
            let b = arr[j];
            if (a <= b) {
                isMax = false;
            }
        }
        if (isMax) {
            newArr.push(a)
        }
    }
    console.log(newArr.join(' '));
}
maxNumber([1, 4, 3, 2]);

function equalSums(array) {
    let isHave = false;
    if (array.length === 1) {
        console.log('0');
    } else {
        for (let i = 0; i < array.length; i++) {
            let leftSum = 0;
            let rightSum = 0;
            
            if (i > 0) {
                for (let left = 0; left < i; left++) {
                    let leftNum = array[left];
                    leftSum += leftNum
                }
                for (let right = i + 1; right < array.length; right++) {
                    let rightNum = array[right];
                    rightSum += rightNum;
                }

                if (leftSum === rightSum) {
                    console.log(i)
                    isHave = true;
                }
            }
        }
    }
    if (isHave === false && array.length != 1) {
        console.log('no');
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

//Реши задачата първо на лист! Трябва да си представиш и запишеш стъпките, които са необходими за решението.
function maxSequenceOfEqualElements(arr) {
    let longest = [];
    let safeLongest = [];
    let arrLength = arr.length;
    let i = 0;
    let count = 0;
 
    while (i < arrLength) {
        let first = arr[i];
        let second = arr[i + 1];
        if (first === second) {
            if (count === 0) {
                longest.push(arr[i], arr[i + 1]);
                count++;
            } else {
                longest.push(arr[i + 1]);
            }
        } else {
            count = 0;
            longest = [];
        }
 
        if (safeLongest.length < longest.length) {
            safeLongest = [];
            for (let j = 0; j < longest.length; j++) {
                safeLongest.push(longest[j]);
            }
        }
        i++;
    }
    console.log(safeLongest.join(' '));
}
 
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);


function magicSum(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let b = arr[j];
            let sum = a + b;
            if (sum === number) {
                console.log(a, b);
            }
        }
    }
}