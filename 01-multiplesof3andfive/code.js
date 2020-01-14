/* 
Problem 1
Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

// var limit = 1000
// var sum = 0


function getMultiplesSum(multipleOne, multipleTwo, limit) {
    var sum = 0
    for (let i = 0; (i) < limit; i++) {

        if (i % multipleOne === 0 || i % multipleTwo === 0) {
            sum += i
        }

    }
    return sum

}


console.log(getMultiplesSum(3, 5, 1000))



