function stringRotation(str1, str2) {
    let newStr = str1;
    let i = 0;
    while (i < str1.length) {
        newStr = newStr.substring(1, str1.length) + newStr.substring(0, 1)

        if (newStr === str2) return true
        else i++
    }
    return false;
}

stringRotation('abc', 'cab')