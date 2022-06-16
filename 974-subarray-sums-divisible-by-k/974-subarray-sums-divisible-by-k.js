/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count = 0, sum = 0, remainder = 0;
    let map = new Map();
    map.set(0, 1);
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        remainder = sum % k;
        if (remainder < 0) remainder += k;
        
        if (map.has(remainder)) {
            count += map.get(remainder);
            map.set(remainder, map.get(remainder) + 1);
        } else {
            map.set(remainder, 1);
        }
    }
    return count;
};