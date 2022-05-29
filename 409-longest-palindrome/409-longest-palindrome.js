/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let set = new Set();
    let longest = 0;
    
    for (const char of s) {
        if (set.has(char)) {
            longest += 2;
            set.delete(char);
        } else {
            set.add(char);
        }
    }
    return longest + (set.size > 0 ? 1 : 0);
};