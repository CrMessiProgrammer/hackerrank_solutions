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
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function isMagicSquare(square) {
    const magicSum = 15;

    // Checa linhas
    for (let i = 0; i < 3; i++) {
        const rowSum = square[i][0] + square[i][1] + square[i][2];
        if (rowSum !== magicSum) return false;
    }

    // Checa colunas
    for (let j = 0; j < 3; j++) {
        const colSum = square[0][j] + square[1][j] + square[2][j];
        if (colSum !== magicSum) return false;
    }

    // Checa diagonais
    const diag1 = square[0][0] + square[1][1] + square[2][2];
    const diag2 = square[0][2] + square[1][1] + square[2][0];
    if (diag1 !== magicSum || diag2 !== magicSum) return false;

    return true;
}

function formingMagicSquare(s) {
    // Write your code here

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let minCost = Infinity;

    function permute(arr, l) {
        if (l === arr.length) {
            // Constrói um quadrado 3x3
            const square = [
                [arr[0], arr[1], arr[2]],
                [arr[3], arr[4], arr[5]],
                [arr[6], arr[7], arr[8]],
            ];
            if (isMagicSquare(square)) {
                // Calcula o custo
                let cost = 0;
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        cost += Math.abs(s[i][j] - square[i][j]);
                    }
                }
                minCost = Math.min(minCost, cost);
            }
        } else {
            for (let i = l; i < arr.length; i++) {
                [arr[i], arr[l]] = [arr[l], arr[i]];
                permute(arr, l + 1);
                [arr[i], arr[l]] = [arr[l], arr[i]]; // backtrack
            }
        }
    }

    permute(nums, 0);
    return minCost;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}
