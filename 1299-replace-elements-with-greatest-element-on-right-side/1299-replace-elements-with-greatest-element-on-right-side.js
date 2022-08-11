/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (arr.length < 2) return [-1];
    let res = new Array(arr.length).fill(-1);
    let maxToRight = arr[arr.length - 1];
    
    for (let i = arr.length - 2; i >= 0; i--) {
        res[i] = maxToRight;
        maxToRight = Math.max(maxToRight, arr[i]);
    }
    return res;
};