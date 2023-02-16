function digitsWithWords(digitWord) {
    switch (digitWord) {
        case 'zero': console.log(0); break;
        case 'one': console.log(1); break;
        case 'two': console.log(2); break;
        case 'three': console.log(3); break;
        case 'four': console.log(4); break;
        case 'five': console.log(5); break;
        case 'six': console.log(6); break;
        case 'seven': console.log(7); break;
        case 'eight': console.log(8); break;
        case 'nine': console.log(9); break;
    }
}

function primeNumberChecker(isPrime) {
    let isNotPrime = false;
    for (let divisor = 2; divisor < isPrime; divisor++) {
        if (isPrime % divisor === 0) {
            isNotPrime = true;
            break;
        }
    }
    if (isNotPrime) {
        console.log('false');
    } else {
        console.log('true');
    }
}

function cone(radius, height) {  //конус
    let volume =  1 / 3 * Math.PI * Math.pow(radius, 2) * height;  //V = (1/3)πr2h
    let area = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));   //A = πr(r + √(r2 + h2))
    console.log(`volume = ${volume.toFixed(4)} \narea = ${area.toFixed(4)}`);
}

function biggestOfThreeNumbers(one, two, three) {
    let biggest = Number.MIN_SAFE_INTEGER;
    if (one > biggest) {
        biggest = one;
    }

    if (two > biggest) {
        biggest = two;
    }

    if (three > biggest) {
        biggest = three;
    }

    console.log(biggest);
}

function binaryToDecimal(binaryNumber) {
    let decimal = parseInt(binaryNumber, 2);
    console.log(decimal);
}

function binaryToDecimalVersionTwo(binaryNumber) {  
    let stringBinary = binaryNumber.toString(); // входните данни(каквито и да са като вид), трябва да ги представим като стринг;
    let binaryLength = stringBinary.length;
    let sum = 0;
    let count = 0;
    for (let i = binaryLength - 1; i >= 0; i--) {  // така ще започнем да взимаме стойности от последната позиция на бинарното число;
        let binaryDigit = Number(stringBinary[i])   // стринга stringBinary го ползваме като масив и започваме от последната му позиция в низходящ ред;
        let binryFormula = binaryDigit * Math.pow(2, count);  //формулата за конвертиране на бинарно число в число от десетичната бройна система. Със всяка позиция на ляво, count се увеличва с 1;
        sum += binryFormula;
        count++;
    }
    console.log(sum);
}

binaryToDecimalVersionTwo(11110000);


function chessBoard(number) {
    console.log('<div class="chessboard">');
    isColor = false
    for (let i = 1; i <= number; i++) {
        console.log('   <div>');
        for (let j = 1; j <= number; j++) {
            if (number % 2 !== 0) {   
                if (isColor === false) {
                    console.log('    <span class="black"></span>');
                    isColor = true;
                } else {
                    console.log('    <span class="white"></span>');
                    isColor = false;
                }
            } else {
                if (i % 2 !== 0) {
                    if (isColor === false) {
                        console.log('    <span class="black"></span>');
                        isColor = true;
                    } else {
                        console.log('    <span class="white"></span>');
                        isColor = false;
                    }
                } else {
                    if (isColor === true) {
                        console.log('    <span class="black"></span>');
                        isColor = false;
                    } else {
                        console.log('    <span class="white"></span>');
                        isColor = true;
                    }
                }
            } 
        }
        console.log('  </div>');
    }
    console.log('</div>');
}

{/* 
ПРИМЕРНИ изходи на задача chessBoard;



При number = 3;
<div class="chessboard">
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
</div>


При number = 6:

<div class="chessboard">
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
<div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
</div> */}


function triangleArea(a, b, c) {
    let p = (a + b + c) / 2;  // p = half the perimeter;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));  // Herons Formula
    console.log(area);
}
