function multiplyNumberByTwo(number) {
    console.log(number * 2);
}

multiplyNumberByTwo(4);

function studentInformation(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
studentInformation('John', 15, 5.54678);

function excellentGrade(mark) {
    if (mark >= 5.50) {
        console.log('Excellent');
    } else {
        console.log('Not Excellent');
    }
}
excellentGrade(5.5);

function foreignLanguages(country) {
    switch(country) {
        case 'England':
        case 'USA': console.log('English'); break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico': console.log('Spanish'); break;
        default: console.log('unknown');
    }
}
foreignLanguages('USA');

function monthPrinter(monthNum) {
    switch(monthNum) {
        case 1: console.log('1'); break;
        case 2: console.log('2'); break;
        case 3: console.log('3'); break;
        case 4: console.log('4'); break;
        case 5: console.log('5'); break;
        case 6: console.log('6'); break;
        case 7: console.log('7'); break;
        case 8: console.log('8'); break;
        case 9: console.log('9'); break;
        case 10: console.log('10'); break;
        case 11: console.log('11'); break;
        case 12: console.log('12'); break;
        default: console.log('Error!')
    }
}
// за по-кратко съм написал числото на месеца, вместо името
monthPrinter(333);

function theatrePromo(day, age) {
    let price = 0;
    if (age >= 0 && age <= 18) {
        if (day === 'Weekday') {
            price = 12;
        } else if (day === 'Weekend') {
            price = 15;
        } else if (day === 'Holiday') {
            price = 5;
        }
    } else if (age > 18 && age <= 64) {
        if (day === 'Weekday') {
            price = 18;
        } else if (day === 'Weekend') {
            price = 20;
        } else if (day === 'Holiday') {
            price = 12;
        }
    } else if (age > 64 && age <= 122) {
        if (day === 'Weekday') {
            price = 12;
        } else if (day === 'Weekend') {
            price = 15;
        } else if (day === 'Holiday') {
            price = 10;
        }
    } else {
        console.log('Error!');
    }

    if (price !== 0) {
        console.log(price);
    }
}

theatrePromo('Holiday', 27);

function numbersFromOneToFive() {
    for (let num = 1; num <= 5; num++) {
        console.log(num);
    }
}
numbersFromOneToFive();

function divisibleByThree() {
    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0) {
            console.log(num);
        }
    }
}

divisibleByThree();


function numberNToOne(number) {
    while (number >= 1) {
        console.log(number);
        number--;
    }
}

numberNToOne(25);

function numberMToN(m, n) {
    let mOperator = m; //създаваме променлива равна на "m", защото не е добра практика да се извършват аритметични операции с входните данни;
    while (mOperator >= n) {
        console.log(mOperator);
        mOperator--;
    }
}

numberMToN(25, 12);

function sumOfOddNumbers(n) {
    let sum = 0;
    let iterations = n;
    let number = 1;
    while (iterations > 0) {
        if (number % 2 !== 0) {
            sum += number;
            console.log(number);
            iterations -= 1;
        }
        number += 1;
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3);