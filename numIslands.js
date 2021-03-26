/*given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water) return the number of islands. An island is surrounded by water and is formed by connecting adajcent lands horizontally or vertical.y. You may assume all four edges of the grid are all surrounded by water */

var numIslands = function (grid) {
  //island count
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      console.log(grid[i][j]);
      if (grid[i][j] === "1") {
        islandCount += 1;
        checkIslandSize(i, j, grid);
      }
    }
  }

  return islandCount;

  //iterate through grid
  //if 1
  //add to island count
  //check surrounding areas
  //if 0 or 2,
  //continue

  //return island count
};

var checkIslandSize = function (row, col, grid) {
  grid[row][col] = 2;

  let right = grid[row][col + 1] === undefined ? 0 : grid[row][col + 1];
  let left = grid[row][col - 1] === undefined ? 0 : grid[row][col - 1];
  let up = grid[row - 1] === undefined ? 0 : grid[row - 1][col];
  let down = grid[row + 1] === undefined ? 0 : grid[row + 1][col];
  //change grid at position to 2

  if (right === "1") {
    checkIslandSize(row, col + 1, grid);
  }

  if (left === "1") {
    checkIslandSize(row, col - 1, grid);
  }

  if (up === "1") {
    checkIslandSize(row - 1, col, grid);
  }

  if (down === "1") {
    checkIslandSize(row + 1, col, grid);
  }

  return grid;

  //     check up
  //     check down
  //     check left
  //     check right

  //     if any are 1
  //         checkIslandSize
  //     if 0 return grid
};
