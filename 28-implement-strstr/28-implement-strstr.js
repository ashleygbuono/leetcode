/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let sliced = haystack.slice(i, i + needle.length);
        if (sliced === needle) return i;
    }
    return -1;
};

/*
Brute force:
* If needle is empty, return 0
* Iterate through length of haystack
    * Create a slice of haystack, from current i to needle.length
    * If sliced matches needle, return i
* Return -1

*/