/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set(), col = new Set(), box = new Set();
        for (let j = 0; j < 9; j++) {
            let rowCell = board[i][j];  
            let colCell = board[j][i];
            let boxCell = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + (j%3)]
      
          if (rowCell !== ".") {
            if (row.has(rowCell)) return false;
            row.add(rowCell);
          }
          if (colCell !== ".") {
            if (col.has(colCell)) return false;
            col.add(colCell);
          }

          if (boxCell !== ".") {
            if (box.has(boxCell)) return false;
            box.add(boxCell);
          } 
        }
      }
      return true
};
