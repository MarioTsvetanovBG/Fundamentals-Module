function  echoType(parameter) {
    const typeOfParameter = typeof(parameter);
    console.log(typeOfParameter);
    if (typeOfParameter === 'string' || typeOfParameter === 'number') {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

function concatenateNames(nameOne, nameTwo, delimiter) {
    console.log(`${nameOne}${delimiter}${nameTwo}`);
}


function rightPlace(stringOne, char, stringTwo) {
    let newStringOne = stringOne.replace('_', char);
    
    if (newStringOne === stringTwo) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

function integerAndFloatFirstVersion(one, two, three) {
    let sum = one + two + three;
    if (sum % 1 === 0) {
        sum += ' - Integer';
    } else {
        sum += ' - Float';
    }
    console.log(sum)
}

function integerAndFloatSecondVersion(one, two, three) {
    let sum = one + two + three;
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum)
}


function amazingNumber(number) {
    let textNumber = String(number); //првръщаме числото в текст;
    let sum = 0;
    let isAmazing = false;
    for (let i = 0; i < textNumber.length; i++) {  //вземаме позицията на всяка една цифра от дължината на числото
        let textNumberToDigit = Number(textNumber[i]);  //понеже е текст, трябва да го превърнем в числова стойност
        sum += textNumberToDigit;
    }

    let textSum = String(sum);
    for (let j = 0; j < textSum.length; j++) {
        if (Number(textSum[j]) === 9) {
            isAmazing = true;
            break;
        }
    }
    console.log(`${number} Amazing? ${isAmazing ? 'True' : 'False'}`);
}



function gramophone(band, album, song) {
    // (albumName.length * bandName.length) * song-name.length / 2
    let lengthOfSong = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(lengthOfSong / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}

function requiredReading(pages, pagesPerHour, daysLeft) {
    let totalTimeReading = pages / pagesPerHour;
    let timePerDay = totalTimeReading / daysLeft;
    console.log(timePerDay)
}

function centuriesToMinutes(centuries) {
    // number of centuries and converts it to years, days, hours, and minutes
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

function specialNumber(n) {
    for (let i = 1; i <= n; i++) {
        let iToText = String(i);
        let sum = 0;
        for (let j = 0; j < iToText.length; j++) {
            let iNum = Number(iToText[j]);
            sum += iNum;
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

function triplesOfLatinLetters(stringNumber) {
    let num = Number(stringNumber);
    // в аски таблица а=97; тоест обхвата на на фор цикъла ще е от 97 до 97+n

    for (let first = 97; first < 97 + num; first++) {
        for (let second = 97; second < 97 + num; second++) {
            for (let third = 97; third < 97 + num; third++) {
                let a = String.fromCharCode(first);
                let b = String.fromCharCode(second);
                let c = String.fromCharCode(third);
                console.log(`${a}${b}${c}`);
            }
        }
    }
}