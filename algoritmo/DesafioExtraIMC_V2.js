/*
    Dasenvolva uma lógica que leia o peso e a altura de uma pessoa, calcule seu IMC e mostre seu status, de acordo com a tabala abaixo:
    - Abaixo de 18.5: Abaixo do Peso
    - Entre 18.5 e 25: Peso ideal
    - 25 até 30: Sobrepeso
    - 30 até 40: Obesidade
    - Acima de 40: Obesidada mórbida
*/

// const leia = require('readline-sync');

// Usar a versão mais estrita e segura do javaScript
// Impossibilita possíveis vulnerabilidades da linguagem
"use strict"

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function imprimirIMC(peso, altura) {
  const imc = calcularIMC(peso, altura);

  if (imc < 18.5) {
    console.log(`${imc.toFixed(2)} - Abaixo do Peso`);
    return `${imc.toFixed(2)} - Abaixo do Peso`;
  } else if (imc <= 25) {
    console.log(`${imc.toFixed(2)} - Peso Ideal`);
    return `${imc.toFixed(2)} - Peso Ideal`;
  } else if (imc <= 30) {
    console.log(`${imc.toFixed(2)} - Sobrepeso`);
    return `${imc.toFixed(2)} - Sobrepeso`;
  } else if (imc <= 40) {
    console.log(`${imc.toFixed(2)} - Obesidade`);
    return `${imc.toFixed(2)} - Obesidade`;
  } else {
    console.log(`${imc.toFixed(2)} - Obesidada Mórbida`);
    return `${imc.toFixed(2)} - Obesidada Mórbida`;
  }
}

function main() {
  console.log("\n");
  console.log("--- Calcule seu IMC ---");

  let altura = 1.7;
  let peso = 65.5;
  // let altura = leia.questionFloat("\nDigite sua altura (ex: 1.75): ");
  // let peso = leia.questionFloat("\nDigite seu peso (ex: 90.30): ");

  imprimirIMC(peso, altura);
}

main();