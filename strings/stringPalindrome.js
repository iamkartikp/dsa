function checkStringPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < str.length) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true
}

checkStringPalindrome('madam') // true
// checkStringPalindrome('hello') // false