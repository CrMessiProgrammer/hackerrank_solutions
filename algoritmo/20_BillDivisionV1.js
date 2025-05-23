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
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

// bill: uma matriz de inteiros representando o custo de cada item pedido
// k: um inteiro representando o índice de base zero do item que Anna não come
// b: a quantia de dinheiro que Anna contribuiu para a conta

function bonAppetit(bill, k, b) {
    // Write your code here
    
    // Soma o valor total da conta
    let totalBill = 0;
    for (let i = 0; i < bill.length; i++) {
        totalBill += bill[i];
    }

    // Subtrai o valor do item que Anna não comeu
    let annaTotal = totalBill - bill[k];

    // Divide por 2 para saber quanto Anna deveria pagar
    let annaShare = annaTotal / 2;

    // Compara com o que Brian cobrou dela
    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare); // Quanto Brian deve devolver
    }
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
