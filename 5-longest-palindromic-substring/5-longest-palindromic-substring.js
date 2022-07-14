/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';
    
    for (let i = 0; i < s.length; i++) {
        expandFromCenter(i, i); //palindrome is an odd number length
        expandFromCenter(i, i + 1); //palindrome is an even number length
    }
    
    function expandFromCenter(left, right) {
        while (left >=0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest.length) {
                longest = s.slice(left, right + 1);
            }
            left--;
            right++;
        }
    };
    return longest;
};

