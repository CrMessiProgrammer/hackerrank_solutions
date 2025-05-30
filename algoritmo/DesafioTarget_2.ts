/*
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function testFibonacci(number: number): boolean {
    // Se o número for 0 ou 1, pertence à sequência de Fibonacci (casos base)
    if (number === 0 || number === 1) return true;
    
    // Inicializa os dois primeiros números da sequência
    let a = 0;
    let b = 1;

    // Loop para gerar a sequência até encontrar ou ultrapassar o número
    while (true) {
        const next = a + b;

        // Se o próximo número for igual ao número informado, pertence à sequência
        if (next === number) return true;

        // Se o próximo número ultrapassar o informado, ele não pertence à sequência
        if (next > number) return false;

        // Atualiza os valores para continuar a sequência
        a = b;
        b = next;        
    }
}

const numTest = 21;

if (testFibonacci(numTest)) {
    console.log(`${numTest} pertence à sequência de Fibonacci.`);    
} else {
    console.log(`${numTest} NÃO pertence à sequência de Fibonacci.`);
}