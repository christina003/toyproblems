// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

var isRobotBounded = function (instructions) {
  let direction = "north";
  let coordinates = [0, 0];

  for (let i = 0; i < instructions.length; i++) {
    let currInstruction = instructions[i];
    if (currInstruction === "G") {
      coordinates = handleG(coordinates, direction);
    } else if (currInstruction === "L") {
      direction = handleL(direction);
    } else if (currInstruction === "R") {
      direction = handleR(direction);
    }
    if (coordinates[0] === 0 && coordinates[1] === 0) {
      return true;
    }
  }

  if (direction === "north") {
    return false;
  }
  return true;
};

const handleG = (coor, dir) => {
  if (dir === "north") {
    coor[1] = coor[1] + 1;
  } else if (dir === "south") {
    coor[1] = coor[1] - 1;
  } else if (dir === "east") {
    coor[0] = coor[0] + 1;
  } else if (dir === "west") {
    coor[0] = coor[0] - 1;
  }
  return coor;
};

const handleL = (dir) => {
  if (dir === "north") {
    dir = "west";
  } else if (dir === "south") {
    dir = "east";
  } else if (dir === "west") {
    dir = "south";
  } else if (dir === "east") {
    dir = "north";
  }
  return dir;
};

const handleR = (dir) => {
  if (dir === "north") {
    dir = "east";
  } else if (dir === "south") {
    dir = "west";
  } else if (dir === "west") {
    dir = "north";
  } else if (dir === "east") {
    dir = "south";
  }
  return dir;
};

//initial pseudocode
//iterate through instructions
//if it's short instructions, how to handle running through instructions however many times?

//if curr instructions is G
//helper function
//check direction
//so if direction is 'north'
//y + 1
//direction = south
//y -1
//direction = west
//x - 1
//direction = east
//x + 1

//if curr instruction is L
//helper function
//check direction
//if direction is north
//change to west
//so on and so forth
//if curr instruction is R
//helper function
//check direction
//if direction is north
//change to east

//check coordinate tracker to see if equal to [0, 0]
//return true if true

//else, how do i know forsure that it's not AKA when do i return false
