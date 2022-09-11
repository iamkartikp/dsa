// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

function longestPalindrome(str) {
    let obj = {};
    let answer = 0;
    for (let i of str) {
        obj[i] = obj[i] ? obj[i] + 1 : 1
    }

    for (let key in obj) {
        if (obj[key] % 2 === 0) {
            answer += obj[key]
        } else {
            answer += Math.round(obj[key] / 2)
        }
    }

    return str.length % 2 === 0 ? answer : answer + 1;
}

longestPalindrome('aaabccccdd')