
// https://jsfiddle.net/selva3murugan_R/cdkhav02/

var numbers = [9, 40, 12, 13, 20, 8, 1];
var count = 0


// inthis method to using recursion 
// and avoiding array methods and

function fun(numbers, count) {

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i + 1] !== undefined) {
            if (numbers[i] > numbers[i + 1]) {
                [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
            }
        }
    }
    if (count == numbers.length) {
    } else {
        count = count + 1
        fun(numbers, count)
    }
// to get second output largest number of array 

    return numbers[numbers.length - 2]
}

console.log(fun(numbers, count))