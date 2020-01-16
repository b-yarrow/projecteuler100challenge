/*
Problem 3
Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

// isPrime function : returns true if value given is prime, false if not

function isPrime(value) {

    if (value <= 1) {
        return false
    }
    else if (value % 2 === 0 && value !== 2) {
        return false
    } else {

        for (let i = 3; i * i <= value; i += 2) {

            if (value % i === 0) {

                return false
            }

        }

        return true
    }
}

var testValue = 600851475143
var prime = false
var largestPrimeFactor = 0

// Start from largest possible factor ( testValue / 2 ) then step through

for (let i = 2; i < testValue / 2; i++) {

    if (testValue % i === 0) {
        // if result is a whole number, test if it is prime
        prime = isPrime(testValue / i)
    }
    if (prime) {
        // store number and break out of loop
        largestPrimeFactor = testValue / i
        break
    }
}

// print the result
console.log(largestPrimeFactor)
