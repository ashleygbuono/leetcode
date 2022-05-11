/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pTriangle = new Array(numRows);
    
    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1);
        row[0] = 1;
        row[row.length - 1] = 1;
        
        for (let j = 1; j < row.length - 1; j++) {
            let rowAbove = pTriangle[i - 1];
            row[j] = rowAbove[j] + rowAbove[j - 1];
        }
        pTriangle[i] = row;
    }
    return pTriangle;
};