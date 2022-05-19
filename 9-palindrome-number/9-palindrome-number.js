/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = "".concat(x);
    let revStr = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return str === revStr;
};