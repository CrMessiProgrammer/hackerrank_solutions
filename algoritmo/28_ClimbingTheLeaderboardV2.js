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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // Write your code here

    // Remove duplicatas da lista ranked
    const uniqueRanked = [];
    for (let index = 1; index < ranked.length; index++) {
        if (ranked[index] !== ranked[index - 1]) {
            uniqueRanked.push(ranked[index-1]);
        }
        if (index === ranked.length-1) {
            uniqueRanked.push(ranked[index]);
        }
    }

    const result = [];
    let index = uniqueRanked.length - 1;

    for (let i = 0; i < player.length; i++) {
        const score = player[i];

        while (index >= 0 && score >= uniqueRanked[index]) {
            index--;
        }

        // +2 porque index começa em 0 e rank começa em 1
        result.push(index + 2);
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
