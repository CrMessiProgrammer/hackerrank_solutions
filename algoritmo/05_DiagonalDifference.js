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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let leftToRightDiagonal = 0;
    let rightToLeftDiagonal = 0;

    for (let index = 0; index < arr.length; index++) {
        leftToRightDiagonal += arr[index][index];        
        rightToLeftDiagonal += arr[index][(arr[0].length-1)-index];
    }
    
    return Math.abs(leftToRightDiagonal - rightToLeftDiagonal);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => {
            const num = parseInt(arrTemp, 10);
            if(num < -100 || num > 100) {
                throw new Error(`ERRO! Elemento ${num} fora do range permitido (-100 <= arr[i][j] <= 100)`);
            }
            return num;
        });
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
