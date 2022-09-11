// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

function reverseVowels(str) {
    let newStr = '';
    let vowels = [];
    let x = '';
    for (let i of str) {
        if (i === 'e' || i === 'o' || i === 'a' || i === 'i' || i === 'u') {
            newStr += "_"
            vowels.push(i);
        } else {
            newStr += i
        }
    }

    for (let i of newStr) {
        if (i === "_") {
            x += vowels.pop();
        } else {
            x += i;
        }
    }

    return x;
}

reverseVowels('leetcode'); // leotcede