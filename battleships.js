//john plays a game of battleships with his friend Sonia. The game is played on a square map of N rows, numbered from 1 to N. Each row contains N cells, labeled with consection English upper-case letters ("A", "B"). Each cell is identified by a string composed of its row number followed by it's column number.

//john marks the positions of all his ships on the map.

function solution(N, S, T) { "2B 3C, 1D 3D" "2B, 1D"
  let emptyBoard = createMatrix(N);
  let shipsPositions = parseShipPositions(S);
  let shipCoordinates = shipsToXYCoordinates(shipsPositions);
  let hitArray = T.split(" ");
  let hitCoordinates = hitsToXYCoordinates(hitArray);

  let shipBoard = placeShips(emptyBoard, shipCoordinates);

  let sunkShips = 0;
  let hitShips = 0;

  //iterate through ship board
  //check if ship is at hit position
  //change to hit (0);

  //after board has hits on it
  //re go through board and check the hits on the ships
  //if the ship 0 in all pos
  //increment sunkShips
  //if has 0 in some, but not all pos
  //increment hitShips

  //return "'" + sunkShips + "," + hitShips + "'";
}

//letter to number hash for getting the coordinates
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function letterToNum(alphabet) {
  let letterToNumHash = {};

  for (let i = 0; i < alphabet.length; i++) {
    letterToNumHash[alphabet[i]] = i;
  }
  return letterToNumHash;
}
let letterHash = letterToNum(alphabet);

//parse Ships
function parseShipPositions(ships) {
  let parseS = ships.split(",");
  let shipsPos = [];
  for (let i = 0; i < parseS.length; i++) {
    let position = parseS[i].split(" ");
    shipsPos.push(position);
  }
  return shipsPos;
}

//create ship coordinates
function shipsToXYCoordinates(positions) {
  let coordinates = [];
  for (let i = 0; i < positions.length; i++) {
    let pos = [];
    for (let j = 0; j < positions[i].length; j++) {
      //this only handles board where n < 10
      coordinates.push([
        positions[i][j][0] - 1,
        letterHash[positions[i][j][1]],
      ]);
    }
  }

  return coordinates;
}

//create hit coordinates
function hitsToXYCoordinates(hits) {
  let coordinates = [];
  for (let i = 0; i < hits.length; i++) {
    coordinates.push([hits[i][0] - 1, letterHash[hits[i][1]]]);
  }
  return coordinates;
}

//add ships to board.  **this does not currently add all of the ship, only the positions
//would need to create a way to add the remainder bits of the ship
function placeShips(board, shipsCoor) {
  let ship = 1;
  for (let i = 0; i < shipsCoor.length; i += 2) {
    console.log(shipsCoor[i][0]);
    board[shipsCoor[i][0]][shipsCoor[i][1]] = ship;
    board[shipsCoor[i + 1][0]][shipsCoor[i + 1][1]] = ship;
    ship++;
  }
  return board;
}

//create board
function createMatrix(N) {
  var matrix = [];
  for (let i = 0; i < N; i++) {
    matrix[i] = new Array(N);
  }
  return matrix;
}
