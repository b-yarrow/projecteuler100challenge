/*
Problem 4
Largest palindrome product

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

function isPalindrome(array) {
    let palindrome = true
    for (let i = 0; i < array.length / 2; i++) {
        const element = array[i];
        const element2 = array[array.length - 1 - i];

        if (element !== element2) {
            palindrome = false
            break
        }
    }
    return palindrome
}

var largestPalindrome = 0

for (let i = 999; i > 0; i--) {
    for (let j = 999; j > 0; j--) {
        let testProduct = String(i * j).split('')

        if (isPalindrome(testProduct) && (i * j > largestPalindrome)) {
            largestPalindrome = i * j
        }
    }
}


console.log(largestPalindrome)





