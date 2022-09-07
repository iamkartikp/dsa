// check if a number is palindrome

function checkPalindrome(number) {
    let n = number;
    let reverse = 0;
    let x;
    while(number !== 0) {
        x = number % 10;
        reverse = reverse * 10 + x;
        number = Math.round(number / 10);
    }

    return n === reverse;
}

checkPalindrome(121) // true
// checkPalindrome(124) // false
