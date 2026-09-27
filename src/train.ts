

// O TASK

function calculateSumOfNumbers(elementsName) {
  let total = 0;

  for (let i = 0; i < elementsName.length; i++) {
    let currentElement = elementsName[i];

    if (typeof currentElement === "number") {
      total = total + currentElement;
    }
  }

  return total;
}

console.log(calculateSumOfNumbers([50, "50", { son: 50 }, true, 35])); // 85


/* Project Standards:
  - Logging standards
  - Naming standards:
      function, method, variable => CAMEL
      class => PASCAL
      folder, file => KEBAB
      css => SNAKE
  - Error handling
*/

// // N Task

// function palindromCheck(word) {
//     const teskariSoz = word.split("").reverse().join("");
//     return word === teskariSoz;
// }

// console.log(palindromCheck("aka")); // true
// console.log(palindromCheck("uka")); // false
// console.log(palindromCheck("booloob")); // true
// console.log(palindromCheck("mexanik")); // false


//  M Task 

// function getSquareNumbers(numbersList) {
//     let result = [];

//     for (let i = 0; i < numbersList.length; i++) {
//         let currentNumber = numbersList[i];
//         let squaredValue = currentNumber * currentNumber;

//         result.push({
//             number: currentNumber,
//             square: squaredValue,
//         });
//     }
//     return result;
// }

// console.log(getSquareNumbers([5, 10, 20, 90, 700]));

