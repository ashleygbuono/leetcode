/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let firstValue = 0;
    let secondValue = 0;
    let targetValue = 0;
    
    function helper(str, numValue) {
        for (let i = 0; i < str.length; i++) {
            numValue += (str.charCodeAt(i) - 97);
        }
        return parseInt(numValue);
    }
    
    firstValue = helper(firstWord, "");
    secondValue = helper(secondWord, "");
    targetValue = helper(targetWord, "");
    
    return firstValue + secondValue === targetValue;
};