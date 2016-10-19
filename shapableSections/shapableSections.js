//Shapable sections main

//what kind of things do I need to solve this problem..

//I need a board that is 25 x 25 and has methods that will add a piece, if the place we are trying to add it is valid

//I need a piece class which will be both rotatable and slideable

//I need an algorithm for building up combinations which is better than brute force

//How can I represent the shapes of the pieces?
//How do those representations get put on the board?

// All iteration revolves around swapping out pieces at each X mark and trying different sliding positions and rotations

// for the beginning at least I could build up an array of all 68 different shapes

// a shape could be represented as just iterating through a certain pattern starting from X



var moveUp = function(row, col) {
  return [row - 1, col];
};

var moveDown = function(row, col) {
  return [row + 1, col];
};

var moveLeft = function(row, col) {
  return [row, col - 1];
};

var moveRight = function(row, col) {
  return [row, col + 1];
};

var isInBounds = function(row, col) {
  return (row > -1 && row < 5) && (col > -1 && col < 5);
};

var orientations = {
  0: {
    top: moveUp,
    bottom: moveDown,
    left: moveLeft,
    right: moveRight
  },

  90: {
    top: moveRight,
    bottom: moveLeft,
    left: moveUp,
    right: moveDown,
  },

  180: {
    top: moveDown,
    bottom: moveUp,
    left: moveRight,
    right: moveLeft,
  },

  270: {
    top: moveLeft,
    bottom: moveRight,
    left: moveDown,
    right: moveUp,
  }
};

var shape1 = function(orientation, starting) {

  var coords = [starting];
  var curr = starting.slice();

  var directions = orientations[orientation];

  //down, left, down, down
  curr = directions.bottom(curr[0], curr[1]);
  coords.push(curr);
  curr = directions.left(curr[0], curr[1]);
  coords.push(curr);
  curr = directions.bottom(curr[0], curr[1]);
  coords.push(curr);
  curr = directions.bottom(curr[0], curr[1]);
  coords.push(curr);


  return coords;
};




var Board = function(startingPositions) {

  this._board = [];
  this.startingCoords = [];
  
  startingPositions.forEach(position => {
    this.startingCoords.push([
      Math.floor((position - 1) / 5),
      (position - 1) % 5
    ]);
  });

  for (var i = 0; i < 5; i++) {
    this._board.push([0, 0, 0, 0, 0]);
  }
};

Board.prototype.checkPiece = function(type, pieceCoords) {

  var placeable = true;

  for (var i = 0; i < pieceCoords.length; i++) {
    var coords = pieceCoords[i];
    if (!isInBounds(coords[0], coords[1]) || this._board[coords[0]][coords[1]] !== 0) {
      placeable = false;
      break;
    }
  }

  return placeable;
};

Board.prototype.togglePiece = function(type, pieceCoords) {
  pieceCoords.forEach(coord => {
    var toggle = this._board[coord[0]][coord[1]];
    console.log(toggle);
    toggle = toggle === 0 ? type : 0;
    console.log(toggle);
    this._board[coord[0]][coord[1]] = toggle;
  });
};

Board.prototype.solutionChecker = function() {
  var result = true;

  for (var row = 0; row < 5; row++) {
    for (var col = 0; col < 5; col++) {
      if (this._board[row][col] === 0) {
        result = false;
        break;
      }
    }
  }

  return result;
};

Board.prototype.printCurrBoard = function() {
  var boardCopy = [];

  //deep slice
  this._board.forEach(row => {
    boardCopy.push(row.slice());
  });

  console.log(boardCopy); 
};

Board.prototype.findSolution = function(count) {

  count = count || 0;
  var tryPos1 = this.startingCoords[count];

  //base case, we found a solution
  if (count === 5 && this.solutionChecker()) {
    
    console.log('We found a solution!');

    this.printCurrBoard();
    return;
  //No solution found
  } else if (count === 5) {
    return;
  }

  //Generate shape / position combinations

  //Try recursing each until a solution is found

  for (var orientation in orientations) {
    var pieceOriented = shape1(orientation, tryPos1);
    if (this.checkPiece(1, pieceOriented)) {
      this.togglePiece(1, pieceOriented);
      //recurse
      this.printCurrBoard();
      //this.findSolution(count + 1);
      //toggle back off
      //this.togglePiece(1, pieceOriented);
    }
  }

};

var board = new Board([5, 6, 7, 11, 24]);
board.findSolution();

// console.log(shape1(0, [2, 2]));
