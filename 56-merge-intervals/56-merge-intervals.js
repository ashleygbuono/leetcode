/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    
    for (const [start, end] of intervals) {
        if (start <= res[res.length - 1][1]) {
            const [startPrev, endPrev] = res.pop();
            res.push([startPrev, Math.max(end, endPrev)]);
        } else {
            res.push([start, end]);
        }
    }
    return res;
};