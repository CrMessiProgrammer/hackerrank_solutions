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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here

    // Ordena o array
    a.sort((a, b) => a - b);

    let numberMaxIntegers = 0;  // Maior quantidade de elementos de um subarray válido
    let subArray = [];  // Subarray com o maior tamanho
    let allSubArray = []; // Todos os subarrays válidos encontrados

    for (let i = 0; i < a.length; i++) {
    let tempArray = [];

    // Para cada elemento, cria um subarray com números que têm diferença de 1 ou 0
    for (let j = i; j < a.length; j++) {
        if (Math.abs(a[j] - a[i]) <= 1) {
            tempArray.push(a[j]);
        } else {
            // Quando a diferença for maior que 1, para de adicionar
            break;
        }
    }

    // Armazena todos os subarrays válidos
    allSubArray.push(...tempArray);

    // Atualiza o maior subarray encontrado
    if (tempArray.length > numberMaxIntegers) {
        numberMaxIntegers = tempArray.length;
        subArray = tempArray;
        }
    }

    console.log("Array ordenado:", a);
    console.log("Subarrays válidos:", allSubArray);
    console.log("Maior subarray:", subArray);
    console.log("Tamanho:", numberMaxIntegers);
    return numberMaxIntegers;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
