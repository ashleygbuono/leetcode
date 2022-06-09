/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let greatestMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let tempMax = maxProduct * nums[i];
        let tempMin = minProduct * nums[i];
        
        maxProduct = Math.max(nums[i], tempMin, tempMax);
        minProduct = Math.min(nums[i], tempMin, tempMax);
        
        greatestMax = Math.max(greatestMax, maxProduct)
    }
   return greatestMax;
};