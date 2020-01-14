/*
Problem 2
Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

2+8+34

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.


*/

var limit = 4000000

// var limit = 100

var evenSum = 0

var term = 2
var prevTerm = 1

do {
    if (term % 2 === 0) {
        evenSum += term
    }

    term = term + prevTerm
    prevTerm = term - prevTerm

    // console.log(prevTerm)
    // console.log(term)
    // console.log('')

} while (term < limit)

console.log(evenSum)





