/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;
    let left = Infinity, mid = Infinity;
    
    for (const num of nums) {
        if (num <= left) left = num;
        else if (num <= mid) mid = num;
        else return true;
    }
    return false;
};