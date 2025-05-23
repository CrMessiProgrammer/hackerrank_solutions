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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let caractere = '#';
    let space = ' ';
    let spaces;
    let caracteres;

    for (let index = 1; index <= n; index++) {
        spaces = space.repeat(n - index);
        caracteres = caractere.repeat(index);
        
        console.log(spaces + caracteres);
    }
}

function main() {

    let n;

    do {
        n = parseInt(readLine().trim(), 10);
        if (isNaN(n) || n <= 0 || n > 100) {
            console.log(`ERRO! Fora do range permitido (0 < n <= 100)`);
        }
    } while (isNaN(n) || n <= 0 || n > 100);
    
    staircase(n);
}
