/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    
    let strictlyIncr = false;
    let strictlyDecr = false;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) return false;
        else if (arr[i] < arr[i + 1]) {
            strictlyIncr = true;
            if (strictlyDecr) return false;
        } else {
            strictlyDecr = true;
            if (!strictlyIncr) return false;
        }
    }
    return strictlyIncr && strictlyDecr;
};