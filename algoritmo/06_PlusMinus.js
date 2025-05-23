'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let arrayElements = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let num of arr) {
        if (num > 0) {
            positive++;
        } else if (num < 0) {
            negative++;            
        } else {
            zero++;            
        }
    }

    let positiveCalc = positive / arrayElements;
    let negativeCalc = negative / arrayElements;
    let zeroCalc = zero / arrayElements;

    console.log(positiveCalc.toFixed(6));
    console.log(negativeCalc.toFixed(6));
    console.log(zeroCalc.toFixed(6));
}

function main() {
    let n;

    do {
        n = Number.parseInt(readLine().trim(), 10);
    } while(isNaN(n) || n <= 0 || n > 100);

    const inputLine = readLine().replace(/\s+$/g, '').split(' ');

    if(inputLine.length !== n) {
        throw new Error(`The array has to have exactly ${n} elements.`);
    }

    const arr = inputLine.map(arrTemp => {
        const num = Number.parseInt(arrTemp, 10);

        if(isNaN(num)) {
            throw new Error(`Invalid element: '${arrTemp}' is not a number.`);
        }
        if(num < -100 || num > 100) {
            throw new Error (`Element ${num} out of the range (-100 to 100).`);
        }
        return num;
    });

    plusMinus(arr);
}
