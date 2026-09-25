

// N Task

function palindromCheck(word) {
    const teskariSoz = word.split("").reverse().join("");
    return word === teskariSoz;
}

console.log(palindromCheck("aka")); // true
console.log(palindromCheck("uka")); // false
console.log(palindromCheck("booloob")); // true
console.log(palindromCheck("mexanik")); // false


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

