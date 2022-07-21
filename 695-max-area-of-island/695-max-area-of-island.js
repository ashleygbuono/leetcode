/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                let currArea = maxAreaHelper(grid, i, j);
                maxArea = Math.max(currArea, maxArea);
            }
        }
    }
    
    function maxAreaHelper(grid, i, j) {
        let currArea = 1;
        
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return 0;
        
        grid[i][j] = 0;
        
        currArea += maxAreaHelper(grid, i - 1, j);
        currArea += maxAreaHelper(grid, i + 1, j);
        currArea += maxAreaHelper(grid, i, j - 1);
        currArea += maxAreaHelper(grid, i, j + 1);
        
        return currArea;
    }
    return maxArea
};

/*
Will have to iterate through whole matrix

Two loops, init a maxArea var (0) and currArea var (0)
    If matrix[i][j] = 1, call helper function with matrix, i, j, currArea(?) passed in
    Helper should return currArea, and we can update maxArea with max of currArea or maxArea
        Helper checks if i and j are within bounds, or if matrix[i][j] is 0
        To avoid checking same space twice, change matrix[i][j] to 0
        Make recursive call in each direction, and append returned value to currArea
        Return currArea
    
Return maxArea


*/