/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = [];

    for (let i = 0; i < n; i++) {
        res.push([]);
    }

    let startRow = 0,
        endRow = n - 1,
        startCol = 0,
        endCol = n - 1,
        count = 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            res[startRow][i] = count;
            count++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            res[i][endCol] = count;
            count++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            res[endRow][i] = count;
            count++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            res[i][startCol] = count;
            count++;
        }
        startCol++;
    }
    return res;
};
