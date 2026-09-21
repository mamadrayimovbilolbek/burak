//  M Task 

function getSquareNumbers(numbersList) {
    let result = [];

    for (let i = 0; i < numbersList.length; i++) {
        let currentNumber = numbersList[i];
        let squaredValue = currentNumber * currentNumber;

        result.push({
            number: currentNumber,
            square: squaredValue,
        });
    }
    return result;
}

console.log(getSquareNumbers([5, 10, 20, 90, 700]));

