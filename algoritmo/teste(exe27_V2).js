"use strict"

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
    allSubArray.push([...tempArray]);

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

  // const tests = [
  //   [1, 2, 2, 3, 1, 2],  // Expected: 5 (subarray [1,2,2,1,2])
  //   [4, 6, 5, 3, 3, 1],  // Expected: 3 (subarray [3,3,4] when sorted)
  //   [1, 1, 1, 1],        // Expected: 4
  //   [1, 2, 3, 4, 5],     // Expected: 2
  //   [],                  // Expected: 0
  //   [1],                 // Expected: 1
  //   [1, 3, 5]            // Expected: 1
  // ];

  // tests.forEach(test => {
  //   console.log(`Array: [${test}] -> Result: ${pickingNumbers(test)}`);
  // });

  /* -------------------------------------------------------------------- */

  // const a = [1, 3, 3, 4, 5, 6];
  // const a = [1, 3, 3, 4, 6, 8, 9, 11];
  // const a = [1, 2, 2, 3, 1, 2];
  // const a = [4, 6, 5, 3, 3, 1];
  // const a = [1, 1, 1, 1];
  // const a = [1, 2, 3, 4, 5];
  // const a = [];
  // const a = [1];
  // const a = [1, 3, 5];
  // const a = [1,1,2,2,3,3,4];
  // const a = [1,2,4];
   const a = [1,2,2,3,1,2];

  console.log(pickingNumbers(a));
}

main();