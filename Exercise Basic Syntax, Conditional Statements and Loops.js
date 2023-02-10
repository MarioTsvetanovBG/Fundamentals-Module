function age(number) {
    if (number < 0) {
        console.log('out of bounds');
    } else if (number >= 0 && number <= 2) {
        console.log('baby');
    } else if (number >= 3 && number <= 13) {
        console.log('child');
    } else if (number >= 14 && number <= 19) {
        console.log('teenager');
    } else if (number >= 20 && number <= 65) {
        console.log('adult');
    } else {
        console.log('elder');
    }
}

age(15);

function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let result = parseFloat(number.toFixed(precision));
    console.log(result);
}

rounding(10.5,3);

function division(num) {
    let numOpp = Number(num);
    if (numOpp % 10 == 0) {
        console.log('The number is divisible by 10');
    } else if (numOpp % 7 === 0) {
        console.log('The number is divisible by 7');
    } else if (numOpp % 6 === 0) {
        console.log('The number is divisible by 6');
    } else if (numOpp % 3 === 0) {
        console.log('The number is divisible by 3');
    } else if (numOpp % 2 === 0) {
        console.log('The number is divisible by 2');
    } else {
        console.log('Not divisible');
    }
}

division(1643);


function vacation(group, groupType, day) {
    
    let price = 0;
    let groupOpp = group;

    if (groupType === 'Students') {
        if (day === 'Friday') {
            price = 8.45;
        } else if (day === 'Saturday') {
            price = 9.80;
        } else if (day === 'Sunday') {
            price = 10.46;
        }
    } else if (groupType === 'Business') {
        if (day === 'Friday') {
            price = 10.90;
        } else if (day === 'Saturday') {
            price = 15.60;
        } else if (day === 'Sunday') {
            price = 16;
        }
    } else if (groupType === 'Regular') {
        if (day === 'Friday') {
            price = 15.00;
        } else if (day === 'Saturday') {
            price = 20;
        } else if (day === 'Sunday') {
            price = 22.50;
        }
    }

    let discount = 0;

    if (groupType === 'Students') {
        if (groupOpp >= 30) {
            discount = price * 0.15;
        }
    } else if (groupType === 'Business') {
        if (groupOpp >= 100) {
            groupOpp -= 10;
        }
    } else if (groupType === 'Regular') {
        if (groupOpp >= 10 && groupOpp <= 20) {
            discount = price * 0.05;
        }
    }
    let totalPrice = (price - discount) * groupOpp;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(100,
    "Business",
    "Sunday" 
    )

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(1984);


function printAndSum(a, b) {
    let sum = 0;
    let result = "";
    for (let i = a; i <= b; i++) {
        result += i + " ";
        sum += i;
    }
    console.log(result);
    console.log(sum);
}
printAndSum(50, 60);

function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += i + " ";
        }
        console.log(result);
    }
}
triangleOfNumbers(6);

function multiplication(n) {

    for (let times = 1; times <= 10; times += 1) {
        let product = n * times;
        console.log(`${n} X ${times} = ${product}`);
    }
}
multiplication(2);




