/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length < 2) return false;
    
    let stack = [];
    let parens = {"}": "{", ")": "(", "]": "["};
    
    for (const char of s) {
        if (!parens[char]) {
            stack.push(char);
        } else if (stack.pop() !== parens[char]){
            return false;
        }
    }
    return stack.length === 0;
};
