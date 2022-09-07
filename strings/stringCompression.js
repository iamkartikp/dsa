function stringCompression(str) {
    let count = 1;
    let i = 0;
    let j = 1;
    let newString = '';
    while(i <= str.length-1) {
        if(str[i] === str[j]) {
            count ++;
            i++;
            j++;
        } else {
            newString += `${str[i]}${count}`
            count = 1;
            i++;
            j++;
        }
    }
    return newString.length > str ? str : newString;
}

stringCompression('aabbbbccccdd') // a2b4c4d2