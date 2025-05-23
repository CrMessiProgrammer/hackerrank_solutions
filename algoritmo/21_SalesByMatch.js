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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    let pairsNumber = 0;
    let socks = [];

    for (let index = 0; index < n; index++) {
        let sockColor = ar[index];

        // Se ainda não tem nenhuma meia dessa cor no array, inicializa com 0
        if (!socks[sockColor]) {
            socks[sockColor] = 0;
        }

        // Soma 1 meia dessa cor
        socks[sockColor]++;

        // Se tiver 2, forma um par
        if (socks[sockColor] === 2) {
            pairsNumber++;
            socks[sockColor] = 0; // Remove as 2 meias, pois já se formou um par
        }
    }

    return pairsNumber;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
