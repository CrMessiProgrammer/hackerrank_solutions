'use strict';

const fs = require('fs');

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function maxTypeOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function migratoryBirds(arr) {
    // Write your code here
    arr.sort((a, b) => a - b); // Ordena o array para facilitar a contagem

    let maxCount = 1; // Contagem máxima
    let currentCount = 1; // Contagem atual
    let mostFrequent = arr[0]; // Mais frequente

    for (let index = 1; index < arr.length; index++) {
        if (arr[index] === arr[index - 1]) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            mostFrequent = arr[index];
        }
        // Se a quantidade for igual, pega o menor ID
        else if (currentCount === maxCount && arr[index] < mostFrequent) {
            mostFrequent = arr[index];
        }
    }

    return mostFrequent;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
