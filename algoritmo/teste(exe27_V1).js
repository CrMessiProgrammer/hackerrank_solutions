"use strict";

function pickingNumbers(a) {
  // Write your code here

  a.sort((a, b) => a - b);

  const subArr = [];
  const subArrays = [];
  let numberMaxIntegers = 0;
  let i = 0
  let j = 0;

  while(i < a.length) {
    subArr.push(a[i]);

    for (j = i + 1; j < a.length; j++) {
      let valueAbs = Math.abs(a[j] - a[i]);

      if (valueAbs <= 1) {
        subArr.push(a[j]);
      } else {
        subArrays.push([...subArr]);
        subArr.length = 0;
        break;
      }
    }
    i = j;
  }
  subArrays.push([...subArr]);

  console.log(a);
  console.log(subArrays);
  return subArrays;
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
  const a = [1, 3, 3, 4, 6, 8, 9, 11];
  // const a = [1, 2, 2, 3, 1, 2];
  // const a = [4, 6, 5, 3, 3, 1];
  // const a = [1, 1, 1, 1];
  // const a = [1, 2, 3, 4, 5];
  // const a = [];
  // const a = [1];
  // const a = [1, 3, 5];
  // const a = [1, 1, 2, 2, 3, 3, 4];
  // const a = [1, 2, 4];
  // const a = [1, 2, 2, 3, 1, 2];

  console.log(pickingNumbers(a));
}

main();
