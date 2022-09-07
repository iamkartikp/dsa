function validParentheses(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            arr.push(returnMatchingBracket(str[i]))
        } else if(arr.pop() !== str[i]) {
            return false;
        }
    }

    return arr.length === 0;
}

function returnMatchingBracket(char) {
    if(char === "(") return ")"
    if(char === "[") return "]"
    if(char === "{") return "}"
}

validParentheses("()");
// validParentheses("()[]{}");