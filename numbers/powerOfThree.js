// check if number is valid power of three

function powerOfThree(n) {
    let res = 1;
    let result = false;
    while (res <= n) {
        if (res === n)
            result = true;
        res = res * 3;
    }

    return result;
}

powerOfThree(37) // false
// powerOfThree(27) // true