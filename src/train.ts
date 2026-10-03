
// R TASK 

function calculate(fig) {
  const numbers = fig.split("+");
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + Number(numbers[i]);
  }

  return sum;
}

console.log(calculate("9+9+9")); // 27


// Q TASK

// function hasProperty(obj, propertyName) {
//   for (let key in obj) {
//     if (key === propertyName) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(hasProperty({ name: "Tesla", model: "I4" }, "model")); // true
// console.log(hasProperty({ name: "Tesla", model: "I4" }, "year")); // false


// // P TASK

// function objectDanArrayGa(obj) {
//   let a = [];

//   for (let key in obj) {
//     a.push([key, obj[key]]);
//   }

//   return a;
// }

// console.log(objectDanArrayGa({ a: 45, b: 85 }));
// // [["a", 45], ["b", 85]]


// O TASK

// function calculateSumOfNumbers(elementsName) {
//   let total = 0;

//   for (let i = 0; i < elementsName.length; i++) {
//     let currentElement = elementsName[i];

//     if (typeof currentElement === "number") {
//       total = total + currentElement;
//     }
//   }

//   return total;
// }

// console.log(calculateSumOfNumbers([50, "50", { son: 50 }, true, 35])); // 85


/*
Traditional API (API)
Rest API
GraphQL API
*/


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

