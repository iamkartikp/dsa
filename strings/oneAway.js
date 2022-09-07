function oneAway(str1, str2) {
    let count = 0;

    let newString = '';
    let i = 0;
    let j = 0;
    while (i <= str1.length - 1) {
        if (str1[i] === str2[j]) {
            newString += str1[i]
            i++;
            j++;
        } else if (str1.length === str2.length) {
            newString += str1[i]
            i++;
            j++;
        } else {
            newString += "X"
            i++
        }
    }

    // return newString

    for (let i = 0; i < newString.length; i++) {
        if (str1[i] !== newString[i]) {
            count++;
        }
    }

    return count >= 2 ? false : true
}

// oneAway('pale', 'ple') // true
oneAway('pale', 'ple') // false