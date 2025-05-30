/*
    5) Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;
*/

// String original (pode alterar aqui)
const original = "Desafio Target";

// String que vai guardar a invertida
let invertida = "";

// Percorre a string do último índice até o 0
for (let i = original.length - 1; i >= 0; i--) {
  invertida += original[i];  // concatena caractere na string invertida
}

console.log("Original:", original);
console.log("Invertida:", invertida);