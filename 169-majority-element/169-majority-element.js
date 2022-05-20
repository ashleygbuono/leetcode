/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length < 2) return nums[0];
    
    let map = new Map();
    
    for (const num of nums) {
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
         if (map.get(num) > nums.length / 2) return num;
    }
};
