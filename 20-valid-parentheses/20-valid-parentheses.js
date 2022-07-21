/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const charMap = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const stack = [];
    
    for (const char of s) {
        if (charMap[char]) stack.push(charMap[char]);
        else if (stack.length > 0 && stack[stack.length - 1] === char) stack.pop();
        else return false;
    }
    return stack.length === 0;
};
