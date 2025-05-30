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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let highestScore = scores[0];
    let lowestScore = scores[0];
    let maxScore = 0;
    let minScore = 0;

    /*
        -------- Outra Opção --------
        for (const score of scores) {
            if (score > highestScore) {
                highestScore = score;
                maxScore++;
            }
            if (score < lowestScore) {
                lowestScore = score;
                minScore++;
            }        
        }
    */

    for (let index = 0; index < scores.length; index++) {
        if (scores[index] > highestScore) {
            highestScore = scores[index];
            maxScore++;
        }
        if (scores[index] < lowestScore) {
            lowestScore = scores[index];
            minScore++;
        }
    }
    return [maxScore, minScore];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
