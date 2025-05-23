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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year === 1918) {
        months[1] = 15;
    } else if (year < 1918 && year % 4 === 0) {
        months[1] = 29;
    } else if (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) {
        months[1] = 29;
    }

    let totalDays = 0;
    let month = 0;
    let day = 0;

    for (let index = 0; index < months.length; index++) {
        if (totalDays + months[index] >= 256) {
            month = index + 1;
            day = 256 - totalDays;
            break;
        }
        totalDays += months[index];
    }
    
    const formattedDay = day.toString().padStart(2, "0");
    const formattedMonth = month.toString().padStart(2, "0");

    return `${formattedDay}.${formattedMonth}.${year}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
