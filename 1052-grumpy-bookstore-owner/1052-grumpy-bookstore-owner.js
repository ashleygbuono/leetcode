/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let happy = 0, angry = 0, windowStart = 0, max = 0;
    
    for (let i = 0; i < customers.length; i++) {
        if (i >= minutes) {  //window check
           if (grumpy[windowStart] === 1) angry -= customers[windowStart];
            windowStart++;
        }
        if (grumpy[i] === 0) happy += customers[i];
        else {
            angry += customers[i];
            max = Math.max(angry, max);
        }
    }
    return happy + max;
};
