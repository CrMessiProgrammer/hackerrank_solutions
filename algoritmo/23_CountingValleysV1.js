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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here

    // Validação extra (opcional)
    if (steps <= 0 || path === '') {
        return 0;        
    }

    // Divide a String em uma lista ordenada de substrings,  coloca essas substrings em um array e retorna o array
    const breakPath = path.split('');

    // Varre o array com o map(), e passa a função de callback
    const pathValue = breakPath.map((value) => {
        if (value === 'U') {
            return 1;
        } else if (value === 'D') {
            return -1;
        }
    })
    
    const seaLevel = 0;   // Nível do mar
    let altitude = 0;   // Altitude atual
    let valley = 0; // Quantidade de valleys totais

    for (let index = 0; index < pathValue.length; index++) {
        if (altitude === seaLevel && pathValue[index] === -1) {
            valley++;
        }
        altitude += pathValue[index];
    }

    return valley;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
