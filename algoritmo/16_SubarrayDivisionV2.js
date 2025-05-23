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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here

    // Segmentos que somam o dia de nascimento, d = 3
    // Comprimento igual ao mês de seu nascimento, m = 2
    //let segmentCount = 0; // Total de segmentos contíguo (barra) de chocolate

    let segmentCount = 0;

    for (let index = 0; index <= s.length - m; index++) {
        // Comprimento igual ao mês de seu nascimento, m = 2
        const squaresSum = s.slice(index, index + m).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        if (squaresSum === d) {
            segmentCount++;
        }
    }
    return segmentCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
