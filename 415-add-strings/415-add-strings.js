/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry = 0, res = "", i1 = num1.length - 1, i2 = num2.length - 1;
    
    while (i1 >= 0 || i2 >= 0) {
        const val1 = num1[i1--] || 0;
        const val2 = num2[i2--] || 0;
        const sum = +val1 + +val2 + carry;
        res = sum % 10 + res;
        carry = Math.trunc(sum / 10); 
    }

    if (carry) res = carry + res;
    
    return res;
};