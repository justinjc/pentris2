// Constants
// ---------
var BOARD_WIDTH = 13;
var BOARD_HEIGHT = 21;
var CLEAR_ROW_DELAY = 200;
var PIECE_DROP_DELAY = 100;

var LEVEL_PROGRESSION = [
    null,
    0,
    20,
    50,
    90,
    140,
    200,
    270,
    350,
    440,
    540
];

var ENCOURAGEMENT_TEXT = [
    '',
    '', // No encouragement for one line cleared
    'COOL',
    'GREAT!',
    'WOW',
    'SUCH LINES',
    'VERY SKILL',
    'UNBELIEVABLE!',
    'PENTRIS MASTER'
];

var PIECE_START_POS = [4, 0];

var PIECE_F = [
    [[2, 1], [3, 1], [1, 2], [2, 2], [2, 3]],
    [[3, 2], [3, 3], [2, 1], [2, 2], [1, 2]],
    [[2, 3], [1, 3], [3, 2], [2, 2], [2, 1]],
    [[1, 2], [1, 1], [2, 3], [2, 2], [3, 2]]
];
var PIECE_F2 = [
    [[1, 1], [2, 1], [2, 2], [3, 2], [2, 3]],
    [[3, 1], [3, 2], [2, 2], [2, 3], [1, 2]],
    [[3, 3], [2, 3], [2, 2], [1, 2], [2, 1]],
    [[1, 3], [1, 2], [2, 2], [2, 1], [3, 2]]
];
var PIECE_I = [
    [[4, 2], [3, 2], [2, 2], [1, 2], [0, 2]],
    [[2, 4], [2, 3], [2, 2], [2, 1], [2, 0]],
    [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]],
    [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]]
];
var PIECE_L = [
    [[0, 2], [1, 2], [2, 2], [3, 2], [3, 1]],
    [[2, 0], [2, 1], [2, 2], [2, 3], [3, 3]],
    [[4, 2], [3, 2], [2, 2], [1, 2], [1, 3]],
    [[2, 4], [2, 3], [2, 2], [2, 1], [1, 1]]
];
var PIECE_L2 = [
    [[4, 2], [3, 2], [2, 2], [1, 2], [1, 1]],
    [[2, 4], [2, 3], [2, 2], [2, 1], [3, 1]],
    [[0, 2], [1, 2], [2, 2], [3, 2], [3, 3]],
    [[2, 0], [2, 1], [2, 2], [2, 3], [1, 3]]
];
var PIECE_N = [
    [[4, 2], [3, 2], [2, 2], [2, 1], [1, 1]],
    [[2, 4], [2, 3], [2, 2], [3, 2], [3, 1]],
    [[0, 2], [1, 2], [2, 2], [2, 3], [3, 3]],
    [[2, 0], [2, 1], [2, 2], [1, 2], [1, 3]]
];
var PIECE_N2 = [
    [[0, 2], [1, 2], [2, 2], [2, 1], [3, 1]],
    [[2, 0], [2, 1], [2, 2], [3, 2], [3, 3]],
    [[4, 2], [3, 2], [2, 2], [2, 3], [1, 3]],
    [[2, 4], [2, 3], [2, 2], [1, 2], [1, 1]]
];
var PIECE_P = [
    [[1, 2], [1, 1], [2, 2], [2, 1], [3, 2]],
    [[2, 1], [3, 1], [2, 2], [3, 2], [2, 3]],
    [[3, 2], [3, 3], [2, 2], [2, 3], [1, 2]],
    [[2, 3], [1, 3], [2, 2], [1, 2], [2, 1]]
];
var PIECE_P2 = [
    [[3, 1], [3, 2], [2, 1], [2, 2], [1, 2]],
    [[3, 3], [2, 3], [3, 2], [2, 2], [2, 1]],
    [[1, 3], [1, 2], [2, 3], [2, 2], [3, 2]],
    [[1, 1], [2, 1], [1, 2], [2, 2], [2, 3]]
];
var PIECE_T = [
    [[1, 1], [2, 1], [3, 1], [2, 2], [2, 3]],
    [[3, 1], [3, 2], [3, 3], [2, 2], [1, 2]],
    [[3, 3], [2, 3], [1, 3], [2, 2], [2, 1]],
    [[1, 3], [1, 2], [1, 1], [2, 2], [3, 2]]
];
var PIECE_U = [
    [[1, 1], [3, 1], [1, 2], [2, 2], [3, 2]],
    [[3, 1], [3, 3], [2, 1], [2, 2], [2, 3]],
    [[3, 3], [1, 3], [3, 2], [2, 2], [1, 2]],
    [[1, 3], [1, 1], [2, 3], [2, 2], [2, 1]]
];
var PIECE_V = [
    [[3, 1], [2, 1], [1, 1], [1, 2], [1, 3]],
    [[3, 3], [3, 2], [3, 1], [2, 1], [1, 1]],
    [[1, 3], [2, 3], [3, 3], [3, 2], [3, 1]],
    [[1, 1], [1, 2], [1, 3], [2, 3], [3, 3]]
];
var PIECE_W = [
    [[3, 1], [2, 1], [2, 2], [1, 2], [1, 3]],
    [[3, 3], [3, 2], [2, 2], [2, 1], [1, 1]],
    [[1, 3], [2, 3], [2, 2], [3, 2], [3, 1]],
    [[1, 1], [1, 2], [2, 2], [2, 3], [3, 3]]
];
var PIECE_X = [
    [[2, 1], [1, 2], [2, 2], [3, 2], [2, 3]],
    [[3, 2], [2, 1], [2, 2], [2, 3], [1, 2]],
    [[2, 3], [3, 2], [2, 2], [1, 2], [2, 1]],
    [[1, 2], [2, 3], [2, 2], [2, 1], [3, 2]]
];
var PIECE_Y = [
    [[3, 2], [2, 1], [2, 2], [1, 2], [0, 2]],
    [[2, 3], [3, 2], [2, 2], [2, 1], [2, 0]],
    [[1, 2], [2, 3], [2, 2], [3, 2], [4, 2]],
    [[2, 1], [1, 2], [2, 2], [2, 3], [2, 4]]
];
var PIECE_Y2 = [
    [[1, 2], [2, 2], [2, 1], [3, 2], [4, 2]],
    [[2, 1], [2, 2], [3, 2], [2, 3], [2, 4]],
    [[3, 2], [2, 2], [2, 3], [1, 2], [0, 2]],
    [[2, 3], [2, 2], [1, 2], [2, 1], [2, 0]]
];
var PIECE_Z = [
    [[3, 1], [3, 2], [2, 2], [1, 2], [1, 3]],
    [[3, 3], [2, 3], [2, 2], [2, 1], [1, 1]],
    [[1, 3], [1, 2], [2, 2], [3, 2], [3, 1]],
    [[1, 1], [2, 1], [2, 2], [2, 3], [3, 3]]
];
var PIECE_Z2 = [
    [[3, 2], [3, 3], [2, 2], [1, 1], [1, 2]],
    [[2, 3], [1, 3], [2, 2], [3, 1], [2, 1]],
    [[1, 2], [1, 1], [2, 2], [3, 3], [3, 2]],
    [[2, 1], [3, 1], [2, 2], [1, 3], [2, 3]]
];

var PIECE_COLOR = ['#CC568E','#77DA48','#83CBC7','#C38536','#8277D8','#483523','#DA4A39','#CDAB90','#D3CF50','#CB51CE','#83D693','#ABA7CE','#4C6770','#679337','#582C4B','#9A433E','#536A3D','#5B4C88'];
var GHOST_COLOR = ['#EFCCDD','#D6F3C8','#D9EFEE','#EDDAC2','#D9D6F3','#C8C2BD','#F3C8C3','#F0E5DD','#F1F0CA','#EFCAF0','#D9F2DE','#D5D3E6','#B7C2C5','#D1DEC3','#CCBFC9','#E0C6C5','#CBD2C4','#CDC9DB'];
var GARBAGE_COLOR = "repeating-linear-gradient(45deg, #222, #222 10px, #444 10px, #444 20px)";

var PIECE_TYPE = [PIECE_F,PIECE_F2,PIECE_I,PIECE_L,PIECE_L2,PIECE_N,PIECE_N2,PIECE_P,PIECE_P2,PIECE_T,PIECE_U,PIECE_V,PIECE_W,PIECE_X,PIECE_Y,PIECE_Y2,PIECE_Z,PIECE_Z2];

// Utility functions
// -----------------

// Returns the clone of a 2D array
function cloneArr(arr) {
    var clone = arr.slice();
    
    for (var i = 0; i < arr.length; i++) {
        clone[i] = arr[i].slice();
    }

    return clone;
}

// Colors in the specified coord array with the specified color
function colorCells(coords, color, prefix) {
    var selector;

    for (var i =  0; i < coords.length; i++) {
        if (i === 0) {
            selector = '#' + prefix + '-' + coords[i][0] + '-' + coords[i][1];
        } else {
            selector += ',#' + prefix + '-' + coords[i][0] + '-' + coords[i][1];
        }
    }

    $(selector).css('background', color);
}

// Colors in the game table coords
function colorGameCells(coords, color) {
    colorCells(coords, color, 'cell');
}

// Colors in the hold table coords
function colorHoldCells(coords, color) {
    colorCells(coords, color, 'hold');
}

// Colors in the next table coords
function colorNextCells(coords, color, index) {
    colorCells(coords, color, 'next-' + index);
}

// Makes the whole board transparent (empty)
function clearBoardColor() {
    $('#gameTable td, #gameTable th').css('background', 'transparent');
}

// Makes the hold piece table transparent
function clearHoldColor() {
    $('#holdTable td').css('background', 'transparent');
}

// Makes the next pieces table transparent
function clearNextColor() {
    $('.nextTable td').css('background', 'transparent');
}

// Game
// ----

var Game = function() {
    // Game control settings
    this.moveSideDasDelay = 100;
    this.moveSideMinMaxDas = 100;
    this.moveDownDasDelay = 70;
    this.moveDownMinMaxDas = 70;

    // Game button settings
    this.buttonRotate = 38; //UP
    this.buttonLeft = 37; // LEFT
    this.buttonRight = 39; // RIGHT
    this.buttonDown = 40; // DOWN
    this.buttonDrop = 32; // SPACE
    this.buttonHold = 67; // C
    this.buttonPause = 80; // P
    this.buttonNewGame = 13; // ENTER

    this.controlsEnabled = true;

    // Game state
    this.score = 0;
    this.dropCombo = 0;
    this.consecutiveCombo = 0;
    this.playerPiece = null;
    this.ghostPiece = null;
    this.boardPieces = [];
    this.holdPieceType = -1;
    this.holdable = true;
    this.nextPieceTypes = [];
    this.boardState = null;
    this.active = false;
    this.paused = false;

    this.level = 1;
    this.tickSpeed = 1000 / 1.25;;
    this.garbageSpeed = 99999999;
    this.piecesDropped = -1;

    this.ticker = null;

    this.garbageTicker = null;
};

// Starts a new game
Game.prototype.start = function() {
    this.score = 0;
    this.dropCombo = 0;
    this.consecutiveCombo = 0
    this.updateScore(0);
    this.boardPieces = [];
    this.holdPieceType = -1;
    this.holdable = true;
    this.active = true;
    this.paused = false;
    this.level = 1;
    this.tickSpeed = 1000 / 1.25;
    this.garbageSpeed = 99999999;
    this.piecesDropped = -1;

    $('#level').html(1);
    $('#levelProgress').width('0%');

    this.nextPieceTypes = [];
    this.populateNextPieces();

    this.resetBoardState();

    clearBoardColor();
    clearHoldColor();
    clearNextColor();

    this.updateLevel(this.level);

    this.giveNextPlayerPiece(true);

    this.refreshGhostPiece(true);
    this.playerPiece.draw();

    this.enableControls();
    this.paused = false;

    $('#textDiv').stop().css('opacity', 0);
    $('#pauseDiv').hide();
};

// Resets board state to all empty
Game.prototype.resetBoardState = function() {
    this.boardState = [[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null]];
};

Game.prototype.rotate = function() {
    if (this.controlsEnabled) {
        this.playerPiece.undraw();

        if (this.playerPiece.rotate(this.boardState)) {
            this.refreshGhostPiece(true);
        }

        this.playerPiece.draw();
    }
};

Game.prototype.left = function() {
    if (this.controlsEnabled) {
        this.playerPiece.undraw();

        if (this.playerPiece.left(this.boardState)) {
            this.refreshGhostPiece(true);
        }

        this.playerPiece.draw();
    }
};

Game.prototype.right = function() {
    if (this.controlsEnabled) {
        this.playerPiece.undraw();

        if (this.playerPiece.right(this.boardState)) {
            this.refreshGhostPiece(true);
        }

        this.playerPiece.draw();
    }
};

// Handles down input
// Returns whether the down movement was successful
Game.prototype.down = function() {
    if (this.controlsEnabled) {
        this.playerPiece.undraw();

        var downSuccess = this.playerPiece.down(this.boardState);

        if (!downSuccess) {
            this.handleCollision();
        } else {
            this.playerPiece.draw();

            return downSuccess;
        }
    }
};

Game.prototype.drop = function() {
    if (this.controlsEnabled) {
        this.playerPiece.undraw();

        this.playerPiece.drop(this.boardState);

        this.handleCollision();
    }
};

// Checks and handles game over condition
// Returns true if game over, false otherwise
Game.prototype.checkGameOver = function() {
    // If the player piece is colliding right after a piece spawning,
    // or a piece hits the top of the board, handle game over
    var pieceAtTop = false;
    pieceLoop:
    for (var pieceIdx = 0; pieceIdx < this.boardPieces.length; pieceIdx++) {
        for (var coordIdx = 0; coordIdx < this.boardPieces[pieceIdx].coords.length; coordIdx++) {
            if (this.boardPieces[pieceIdx].coords[coordIdx][1] === 0) {
                pieceAtTop = true;
                break pieceLoop;
            }
        }
    }

    if (this.playerPiece.colliding(this.boardState) || pieceAtTop) {
        this.active = false;
        
        this.disableControls();

        $('#textDiv').html('GAME OVER');

        $('#textDiv').stop().fadeTo(1000, 1);

        return true;
    }

    return false;
};

// Handles a PlayerPiece collision
Game.prototype.handleCollision = function() {
    var newBoardPiece = this.playerPiece.createBoardPiece();

    // Add to the active board pieces
    this.boardPieces.push(newBoardPiece);

    var rowsToCheck = [];

    // Update the board state; store which rows the piece occupied
    for (var i = 0; i < newBoardPiece.coords.length; i++) {
        var coordY = newBoardPiece.coords[i][1];
        this.boardState[coordY][newBoardPiece.coords[i][0]] = newBoardPiece.type;
        
        // Add to check list if not already in list
        if (rowsToCheck.indexOf(coordY) === -1) {
            rowsToCheck.push(coordY);
        }
    }

    // Find rows to be cleared
    var fullRows = this.getFullRows(rowsToCheck);
    
    // Keeps clearing rows and dropping pieces
    if (fullRows.length > 0) {
        this.updateScore(this.consecutiveCombo++);

        this.dropCombo += fullRows.length;

        this.showEncouragement(this.dropCombo);

        this.disableControls();
        this.handleRowClears(fullRows);
    } else {
        // Did not clear any rows

        clearBoardColor();
        this.drawBoardPieces();

        this.consecutiveCombo = 0;

        this.giveNextPlayerPiece(true);

        this.refreshGhostPiece(false);
        
        this.playerPiece.draw();
    }
};

// Handles clearing a row and starts the dropping pieces process
Game.prototype.handleRowClears = function(fullRows) {
    var self = this;
    this.clearRows(fullRows);

    clearBoardColor();
    this.drawBoardPieces();

    setTimeout(function() {self.handlePieceDrops();}, CLEAR_ROW_DELAY);
}

// Drops pieces down slowly until pieces cannot be dropped anymore
Game.prototype.handlePieceDrops = function() {
    // Save 'this' to be passed to anonymous function in setTimeout
    var self = this;

    // Stores whether we still need to try to drop pieces
    var dropPieces = false;

    // Tries dropping every piece. If any piece drops, we need to try
    // dropping every piece again
    for (var i = 0; i < this.boardPieces.length; i++) {
        if (this.boardPieces[i].down(this.boardState)) {
            this.updateBoardState();
            dropPieces = true;
        }
    }

    // Redraw the board to show pieces that just got dropped
    clearBoardColor();
    this.drawBoardPieces();

    if (dropPieces) {
        // Delay to slowly show pieces dropping
        setTimeout(function() {self.handlePieceDrops();}, PIECE_DROP_DELAY);
    } else {
        // Finished dropping all pieces (no piece can drop any more)
        // Now we need to see if there are new rows to be cleared

        // Find rows to be cleared
        var fullRows = this.getFullRows(_.range(2, 21));
        
        // Keeps clearing rows and dropping pieces
        if (fullRows.length > 0) {
            this.dropCombo += fullRows.length;

            this.showEncouragement(this.dropCombo);

            setTimeout(function() {self.handleRowClears(fullRows);}, CLEAR_ROW_DELAY);
        } else {
            // Finished with handling row clear

            clearBoardColor();
            this.drawBoardPieces();

            this.updateScore(this.dropCombo);

            this.giveNextPlayerPiece(true);

            this.refreshGhostPiece(false);
            
            this.playerPiece.draw();

            this.enableControls();
        }
    }
}

// Sets new player piece; populates next piece array if required
Game.prototype.giveNextPlayerPiece = function(enableHold) {
    // Add in the next piece types
    if (this.nextPieceTypes.length < PIECE_TYPE.length) {
        this.populateNextPieces();
    }

    if (enableHold) {
        this.holdable = true;
    }

    // Shift the next cells
    var nextPieceType = this.nextPieceTypes.shift();

    this.refreshNextPieces();
    
    this.piecesDropped++;

    this.updateLevelProgression();
    
    this.playerPiece = new PlayerPiece(nextPieceType, 0, PIECE_START_POS[0], PIECE_START_POS[1]);

    this.checkGameOver();
};

// Updates the score
Game.prototype.updateScore = function(dropCombo) {
    this.score += dropCombo * dropCombo * 10;
    this.dropCombo = 0;

    if (this.score > getCookie('bestScore')) {
        this.updateBestScore(this.score);
    }

    increaseScore(this.score);
}

// Updates the best score, setting the cookie
Game.prototype.updateBestScore = function(score) {
    setCookie('bestScore', score, 366);

    increaseBestScore(score);
}

// Shows the encouragement text after combos
Game.prototype.showEncouragement = function(dropCombo) {
    if (dropCombo > 1) {
        $('#textDiv').html(ENCOURAGEMENT_TEXT[dropCombo]);

        $('#textDiv').stop().fadeTo(150, 0.7).delay(300).fadeTo(150, 0);
    }
}

// Redraws the next pieces
Game.prototype.refreshNextPieces = function() {
    // Refresh next pieces display
    clearNextColor();

    for (var i = 0; i < 5; i++) {
        var nextPiece = new NextPiece(this.nextPieceTypes[i], 0, 0, 0);
        nextPiece.draw(i);
    };
}

// Populates next piece array
Game.prototype.populateNextPieces = function() {
    var nextPieces = _.range(PIECE_TYPE.length);
    nextPieces = _.shuffle(nextPieces);
    //nextPieces = [2,2,2,2,2,2,2,2,2,2,2]; // For debugging

    this.nextPieceTypes = this.nextPieceTypes.concat(nextPieces);
};

// Returns the lines on the board that are full
Game.prototype.getFullRows = function(rows) {
    var fullRows = [];

    // Go through each row
    for (var rowIdx = 0; rowIdx < rows.length; rowIdx++) {
        // Check presence of empty cell in row
        if (this.boardState[rows[rowIdx]].indexOf(null) === -1) {
            fullRows.push(rows[rowIdx]);
        }
    }

    return fullRows;
};

// Clears an array of rows from all BoardPieces and the boardState
Game.prototype.clearRows = function(rows) {
    // rows need to be in sorted order so that splicing from the end works
    rows.sort();

    // Remove each row from pieces from the bottom up
    for (var fullRowIdx = rows.length - 1; fullRowIdx >= 0; fullRowIdx--) {
        // Remove rows from board state
        this.boardState[rows[fullRowIdx]] = [null,null,null,null,null,null,null,null,null,null,null,null,null];

        // Remove rows from pieces
        for (var pieceIdx = this.boardPieces.length - 1; pieceIdx >= 0; pieceIdx--) {
            var clearRowResult = this.boardPieces[pieceIdx].clearRow(rows[fullRowIdx]);
            switch (clearRowResult) {
                // No new piece got created
                case null:
                    // No need to do anything extra
                    break;
                // Piece got wiped out entirely
                case 0:
                    // Remove the piece from the game
                    this.boardPieces.splice(pieceIdx, 1);
                    break;
                // New piece got created
                default:
                    // Add the newly created piece to the game
                    this.boardPieces.push(clearRowResult);

                    if (this.boardPieces[pieceIdx].coords.length === 0) {
                        // Remove the piece from the game
                        this.boardPieces.splice(pieceIdx, 1);
                    }
                    break;
            }
        }
    }
};

// Uses the currect active BoardPieces to update the board state
Game.prototype.updateBoardState = function() {
    this.resetBoardState();

    // Go through all board pieces
    for (var pieceIdx = 0; pieceIdx < this.boardPieces.length; pieceIdx++) {
        var pieceCoords = this.boardPieces[pieceIdx].coords;
        // Go through each coordinate of the piece
        for (var i = 0; i < pieceCoords.length; i++) {
            this.boardState[pieceCoords[i][1]][pieceCoords[i][0]] = this.boardPieces[pieceIdx].type;
        }
    }
};

// Refreshes (redraws) the ghost piece
Game.prototype.refreshGhostPiece = function(shouldUndraw) {
    // We don't want to undraw after dropping a piece

    if (this.ghostPiece && shouldUndraw) {
        this.ghostPiece.undraw();
    }

    this.ghostPiece = new GhostPiece(
        this.playerPiece.type,
        this.playerPiece.orientation,
        this.playerPiece.posX,
        this.playerPiece.posY
    );

    this.ghostPiece.drop(this.boardState);

    this.ghostPiece.draw();
}

// Hold a piece
Game.prototype.hold = function() {
    if (this.controlsEnabled && this.playerPiece && this.holdable) {
        this.holdable = false;

        var holdType = this.playerPiece.type;

        this.playerPiece.undraw();

        if (this.holdPieceType === -1) {
            // First time holding
            this.giveNextPlayerPiece(false);
        } else {
            // Not first time holding
            this.playerPiece = new PlayerPiece(this.holdPieceType, 0, PIECE_START_POS[0], PIECE_START_POS[1]);
        }

        this.holdPieceType = holdType;
        
        // Redraw the hold area
        clearHoldColor();
        var holdPiece = new HoldPiece(this.holdPieceType, 0, 0, 0);
        holdPiece.draw();

        this.refreshGhostPiece(true)
        this.playerPiece.draw();
    }
};

// Visually update the level progression and update the level if necessary
Game.prototype.updateLevelProgression = function() {
    var piecesDropped = this.piecesDropped;

    if (piecesDropped > getCookie('bestLevel')) {
        this.updateBestLevel(piecesDropped);
    }

    for (var i = LEVEL_PROGRESSION.length - 1; i >= 0; i--) {
        if (piecesDropped > LEVEL_PROGRESSION[i]) {
            // Do nothing if at max level, otherwise update level progress
            if (i !== LEVEL_PROGRESSION.length - 1) {
                var percentToNext = Math.floor((piecesDropped - LEVEL_PROGRESSION[i]) / (LEVEL_PROGRESSION[i + 1] - LEVEL_PROGRESSION[i]) * 100);

                $('#levelProgress').width(percentToNext + '%');
            }

            break;
        } else if (piecesDropped === LEVEL_PROGRESSION[i]) {
            // Change level
            this.updateLevel(i);

            break;
        }
    }
};

// Visually update the best level 
Game.prototype.updateBestLevel = function(piecesDropped) {
    setCookie('bestLevel', piecesDropped, 366);

    for (var i = LEVEL_PROGRESSION.length - 1; i >= 0; i--) {
        if (piecesDropped > LEVEL_PROGRESSION[i]) {
            // Do nothing if at max level, otherwise update level progress
            if (i !== LEVEL_PROGRESSION.length - 1) {
                var percentToNext = Math.floor((piecesDropped - LEVEL_PROGRESSION[i]) / (LEVEL_PROGRESSION[i + 1] - LEVEL_PROGRESSION[i]) * 100);

                $('#bestLevel').html(i);
                $('#bestLevelProgress').width(percentToNext + '%');
            }

            break;
        } else if (piecesDropped === LEVEL_PROGRESSION[i]) {
            $('#bestLevel').html(i);
            $('#bestLevelProgress').width('0%');

            break;
        }
    }
};

// Update the level and change the game characteristics accordingly
Game.prototype.updateLevel = function(level) {
    $('#level').html(level);
    $('#levelProgress').width('0%');

    switch (level) {
        case 2:
            this.garbageSpeed = 99999999;
            this.tickSpeed = 1000 / 1.5;
            break;
        case 3:
            this.garbageSpeed = 99999999;
            this.tickSpeed = 1000 / 1.75;
            break;
        case 4:
            this.garbageSpeed = 99999999;
            this.tickSpeed = 1000 / 2;
            break;
        case 5:
            this.garbageSpeed = 99999999;
            this.tickSpeed = 1000 / 2.25;
            break;
        case 6:
            this.garbageSpeed = 99999999;
            this.tickSpeed = 1000 / 2.5;
            break;
        case 7:
            this.garbageSpeed = 99999999;
            this.tickSpeed = 1000 / 2.75;
            break;
        case 8:
            this.garbageSpeed = 1000 * 20;
            this.tickSpeed = 1000 / 2.75;
            break;
        case 9:
            this.garbageSpeed = 1000 * 12;
            this.tickSpeed = 1000 / 2.75;
            break;
        case 10:
            this.garbageSpeed = 1000 * 8.5;
            this.tickSpeed = 1000 / 2.75;
            break;
        default:
            this.garbageSpeed = 99999999;
            this.tickSpeed = 1000 / 1.25;
            break;
    }

    if (this.ticker) {
        clearInterval(this.ticker);
    }
    if (this.garbageTicker) {
        clearInterval(this.garbageTicker);
    }

    var self = this;
    this.ticker = setInterval(function() {self.tick();}, self.tickSpeed);

    this.garbageTicker = setInterval(function() {self.newGarbageLine();}, self.garbageSpeed);
};

// Puts a new garbage line at the bottom of the board, checks for game over
Game.prototype.newGarbageLine = function() {
    for (var pieceIdx = 0; pieceIdx < this.boardPieces.length; pieceIdx++) {
        for (var coordIdx = 0; coordIdx < this.boardPieces[pieceIdx].coords.length; coordIdx++) {
            this.boardPieces[pieceIdx].coords[coordIdx][1]--;
        }
    }

    var holeIdx = Math.floor(Math.random() * BOARD_WIDTH);

    if (this.boardPieces.length !== 0) {
        var holes = [];

        for (var i = 0; i < BOARD_WIDTH; i++) {
            if (this.boardState[BOARD_HEIGHT - 1][i] === null) {
                holes.push(i);
            }
        }

        if (holes.length > 0) {
            holeIdx = holes[Math.floor(Math.random() * holes.length)];
        }
    }

    var garbageCoords = [];
    for (var i = 0; i < holeIdx; i++) {
        garbageCoords.push([i, BOARD_HEIGHT - 1]);
    }

    if (garbageCoords.length > 0) {
        this.boardPieces.push(new BoardPiece("GARBAGE", garbageCoords));
    }

    garbageCoords = [];

    for (var i = holeIdx + 1; i < BOARD_WIDTH; i++) {
        garbageCoords.push([i, BOARD_HEIGHT - 1]);
    }

    if (garbageCoords.length > 0) {
        this.boardPieces.push(new BoardPiece("GARBAGE", garbageCoords));
    }

    this.updateBoardState();

    clearBoardColor();
    this.drawBoardPieces();
    this.refreshGhostPiece(false);
    this.playerPiece.draw();
};

// Toggles between pause and unpause
Game.prototype.togglePause = function() {
    if (this.controlsEnabled) {
        this.pause();
    } else if (this.paused) {
        this.unpause();
    }
};

// Pause the game
Game.prototype.pause = function() {
    this.paused = true;
    this.disableControls();

    $('#pauseDiv').show();
}

// Unpause the game
Game.prototype.unpause = function() {
    this.enableControls();
    this.paused = false;

    $('#pauseDiv').hide();
}

// The function that gets called every game tick
Game.prototype.tick = function() {
    this.down();
};

// Draws the active BoardPieces
Game.prototype.drawBoardPieces = function() {
    for (var i = 0; i < this.boardPieces.length; i++) {
        var cellColor;
        if (this.boardPieces[i].type === "GARBAGE") {
            cellColor = GARBAGE_COLOR;
        } else {
            cellColor = PIECE_COLOR[this.boardPieces[i].type];
        }
        colorGameCells(this.boardPieces[i].coords, cellColor);
    }
};

// Enables user controls and starts up the ticker again
Game.prototype.enableControls = function() {
    var self = this;
    this.controlsEnabled = true;

    if (!this.ticker) {
        this.ticker = setInterval(function() {self.tick();}, self.tickSpeed);
    }

    if (!this.garbageTicker) {
        this.garbageTicker = setInterval(function() {self.newGarbageLine();}, self.garbageSpeed);
    }
};

// Disables user controls and starts up the ticker again
Game.prototype.disableControls = function() {
    this.controlsEnabled = false;

    if (this.ticker) {
        clearInterval(this.ticker);
        this.ticker = null;
    }

    if (this.garbageTicker) {
        clearInterval(this.garbageTicker);
        this.garbageTicker = null;
    }
};

// PlayerPiece
// -----------

// This is the piece that the player controls
var PlayerPiece = function(type, orientation, posX, posY) {
    this.type = type;
    this.orientation = orientation;
    this.posX = posX;
    this.posY = posY;
};

PlayerPiece.prototype.rotateForce = function() {
    this.orientation = (this.orientation + 1) % 4;
};

PlayerPiece.prototype.downForce = function() {
    this.posY++;
};

PlayerPiece.prototype.leftForce = function() {
    this.posX--;
};

PlayerPiece.prototype.rightForce = function() {
    this.posX++;
};

// Tries to rotate the piece
// Pushes off the side if the sides are blocking rotation
// Returns whether the rotate was successful
PlayerPiece.prototype.rotate = function(boardState) {
    var testPiece = new PlayerPiece(this.type, this.orientation, this.posX, this.posY);
    testPiece.rotateForce();

    if (!testPiece.colliding(boardState)) {
        this.rotateForce();

        return true;
    } else {
        // Try to push away from the side
        var coords = testPiece.coords();
        var pushOffset = 0;

        // Find how much to push away by
        for (var i = 0; i < coords.length; i++) {
            var coordX = coords[i][0];

            if (coordX < 0 && coordX < pushOffset) {
                pushOffset = coordX;
            } else if (coordX >= BOARD_WIDTH && coordX - BOARD_WIDTH >= pushOffset) {
                pushOffset = coordX - BOARD_WIDTH + 1;
            }
        }

        // We want to push the piece in the opposite direction
        pushOffset *= -1;

        testPiece.posX += pushOffset;

        if (!testPiece.colliding(boardState)) {
            this.posX += pushOffset;
            this.rotateForce();

            return true;
        } else {
            return false;
        }
    }
};

// Tries to move left
// Returns whether the move was successful
PlayerPiece.prototype.left = function(boardState) {
    var testPiece = new PlayerPiece(this.type, this.orientation, this.posX, this.posY);
    testPiece.leftForce();

    if (!testPiece.colliding(boardState)) {
        this.leftForce();

        return true;
    }

    return false;
};

// Tries to move right
// Returns whether the move was successful
PlayerPiece.prototype.right = function(boardState) {
    var testPiece = new PlayerPiece(this.type, this.orientation, this.posX, this.posY);
    testPiece.rightForce();

    if (!testPiece.colliding(boardState)) {
        this.rightForce();

        return true;
    }

    return false;
};

// Tries to move down
// Returns whether the move was successful
PlayerPiece.prototype.down = function(boardState) {
    var testPiece = new PlayerPiece(this.type, this.orientation, this.posX, this.posY);
    testPiece.downForce();

    if (!testPiece.colliding(boardState)) {
        this.downForce();

        return true;
    }

    return false;
};

// Moves the piece down until it collides
PlayerPiece.prototype.drop = function(boardState) {
    while (this.down(boardState)) {}
};

// Returns a BoardPiece corresponding to this Piece
PlayerPiece.prototype.createBoardPiece = function() {
    return new BoardPiece(this.type, this.coords());
};

// Returns the coordinates that this piece occupies on the board
PlayerPiece.prototype.coords = function() {
    var coords = cloneArr(PIECE_TYPE[this.type][this.orientation]);
    
    for (var i = 0; i < coords.length; i++) {
        coords[i][0] += this.posX;
        coords[i][1] += this.posY;
    }

    return coords;
};

// Draws the piece
PlayerPiece.prototype.draw = function() {
    colorGameCells(this.coords(), PIECE_COLOR[this.type]);
};

// Undraws the piece
PlayerPiece.prototype.undraw = function() {
    colorGameCells(this.coords(), 'transparent');
};

// Returns whether the piece is currently colliding (in invalid position)
PlayerPiece.prototype.colliding = function(boardState) {
    var coords = this.coords();

    for (var i = 0; i < coords.length; i++) {
        if (coords[i][0] < 0 || coords[i][0] >= BOARD_WIDTH || // colliding with the side
            coords[i][1] < 0 || coords[i][1] >= BOARD_HEIGHT || // colliding with the bottom
            boardState[coords[i][1]][coords[i][0]] !== null) { // colliding with pieces
            return true;
        }
    }

    return false;
};

// Ghost piece
// -----------

// This is the piece preview
var GhostPiece = function(type, orientation, posX, posY) {
    this.type = type;
    this.orientation = orientation;
    this.posX = posX;
    this.posY = posY;
}

// Inherit methods
GhostPiece.prototype = Object.create(PlayerPiece.prototype);

// Overwrite draw to use different colors
GhostPiece.prototype.draw = function() {
    colorGameCells(this.coords(), GHOST_COLOR[this.type]);
};

// Hold piece
// ----------

// This is the hold piece (just for display)
var HoldPiece = function(type, orientation, posX, posY) {
    this.type = type;
    this.orientation = orientation;
    this.posX = posX;
    this.posY = posY;
}

// Inherit methods
HoldPiece.prototype = Object.create(PlayerPiece.prototype);

// Overwrite draw to use different colors
HoldPiece.prototype.draw = function() {
    colorHoldCells(this.coords(), PIECE_COLOR[this.type]);
};

// Undraws the piece
HoldPiece.prototype.undraw = function() {
    colorHoldCells(this.coords(), 'transparent');
};

// Next piece
// ----------

// This is the hold piece (just for display)
var NextPiece = function(type, orientation, posX, posY) {
    this.type = type;
    this.orientation = orientation;
    this.posX = posX;
    this.posY = posY;
}

// Inherit methods
NextPiece.prototype = Object.create(PlayerPiece.prototype);

// Overwrite draw to use different colors
NextPiece.prototype.draw = function(index) {
    colorNextCells(this.coords(), PIECE_COLOR[this.type], index);
};

// Board piece
// -----------

// These are the pieces placed on the board
var BoardPiece = function(type, coords) {
    this.type = type;
    this.coords = coords;
};

// Draws the piece
BoardPiece.prototype.draw = function() {
    colorGameCells(this.coords, PIECE_COLOR[this.type]);
};

// Clears a line
// Returns a new BoardPiece created if applicable
// Returns null if no new piece got created
// Returns 0 if the piece got wiped out entirely
BoardPiece.prototype.clearRow = function(line) {
    var cutOffCoords = [];

    // Make sure this piece needs clearing first
    var needsClearing = false;
    for (var i = this.coords.length - 1; i >= 0; i--) {
        if (this.coords[i][1] === line) {
            needsClearing = true;
            break;
        }
    }

    // This means the piece didn't have to get cleared
    if (!needsClearing) {
        return null;
    }

    // Go through each coordinate and remove the cells on the line
    // Store cells that got "cut off", to be created as a new BoardPiece
    for (var i = this.coords.length - 1; i >= 0; i--) {
        if (this.coords[i][1] === line) {
            this.coords.splice(i, 1);
        } else if (this.coords[i][1] > line) {
            cutOffCoords.push(this.coords.splice(i, 1)[0]);
        }
    }

    // See if we have cells cut off that need to have new BoardPieces created
    if (cutOffCoords.length > 0) {
        // Check for right side up PIECE_U edge case
        if (cutOffCoords.length === 2 && Math.abs(cutOffCoords[0][0] - cutOffCoords[1][0]) === 2) {
            this.coords = [cutOffCoords[0]];
            return new BoardPiece(this.type, [cutOffCoords[1]]);
        }

        return new BoardPiece(this.type, cutOffCoords);
    } else {
        if (this.coords.length === 0) {
            return 0;
        }

        // Check for upside down PIECE_U edge case
        if (this.coords.length === 2 && Math.abs(this.coords[0][0] - this.coords[1][0]) === 2) {
            return new BoardPiece(this.type, this.coords.splice(1,1));
        }

        return null;
    }
};

BoardPiece.prototype.downForce = function() {
    for (var i = 0; i < this.coords.length; i++) {
        this.coords[i][1]++;
    }
};

// Tries to move the piece down
// Returns whether the move was successful
BoardPiece.prototype.down = function(boardState) {
    var testPiece = new BoardPiece(this.type, cloneArr(this.coords));
    testPiece.downForce();

    if (!testPiece.colliding(boardState, this.coords)) {
        this.downForce();
        return true;
    }
    
    return false;
};

// Moves the piece down until it collides
// Returns whether the piece dropped
BoardPiece.prototype.drop = function(boardState) {
    var dropped = false;
    while (this.down(boardState)) {
        dropped = true;
    }

    return dropped;
};

// Returns whether the piece is currently colliding (in an invalid position)
// excludeCoords is the list of coordinates to skip checking, to avoid colliding with self
BoardPiece.prototype.colliding = function(boardState, excludeCoords) {
    for (var coordIdx = 0; coordIdx < this.coords.length; coordIdx++) {
        var exclude = false;
        for (var excludeIdx = 0; excludeIdx < excludeCoords.length; excludeIdx++) {
            if (this.coords[coordIdx][0] === excludeCoords[excludeIdx][0] && this.coords[coordIdx][1] === excludeCoords[excludeIdx][1]) {
                exclude = true;
                break;
            }
        }

        if (!exclude &&
            (this.coords[coordIdx][0] < 0 || this.coords[coordIdx][0] >= BOARD_WIDTH || // colliding with the side
             this.coords[coordIdx][1] < 0 || this.coords[coordIdx][1] >= BOARD_HEIGHT || // colliding with the bottom
             boardState[this.coords[coordIdx][1]][this.coords[coordIdx][0]] !== null)) { // colliding with pieces
            return true;
        }
    }

    return false;
};

// Game initialization
// -------------------
var game = new Game();

// Key control initialization
// --------------------------
var lefter = null;
var righter = null;
var downer = null;

// Function bound to key up event
function keyUpHandler(event) {
    switch (event.keyCode) {
        case game.buttonLeft:
            if (lefter) {
                clearInterval(lefter);
                lefter = null;
            }
            break;
        case game.buttonRight:
            if (righter) {
                clearInterval(righter);
                righter = null;
            }
            break;
        case game.buttonDown:
            if (downer) {
                clearInterval(downer);
                downer = null;
            }
            break;
    }
}

// Function bound to key down event
function keyDownHandler(event) {
    // Prevent space bar scroll down
    if (event.keyCode == 32) {
        event.preventDefault();
    }

    switch (event.keyCode) {
        case game.buttonLeft:
            if (game.controlsEnabled && !lefter) {
                game.left();
                lefter = setInterval(function() {game.left();}, game.moveSideDasDelay);
            }
            break;
        case game.buttonRight:
            if (game.controlsEnabled && !righter) {
                game.right();
                righter = setInterval(function() {game.right();}, game.moveSideDasDelay);
            }
            break;
        case game.buttonDown:
            if (game.controlsEnabled && !downer) {
                game.down();
                downer = setInterval(function() {game.down();}, game.moveDownDasDelay);
            }
            return false;
            break;
        case game.buttonRotate:
            if (game.controlsEnabled) {
                game.rotate();
            }
            break;
        case game.buttonDrop:
            if (game.controlsEnabled) {
                game.drop();
            }
            break;
        case game.buttonHold:
            if (game.controlsEnabled) {
                game.hold();
            }
            break;
        case game.buttonPause:
            game.togglePause();
            break;
        case game.buttonNewGame:
            game.start();
            break;
    }
}

// Cookie warppers
// ---------------

// Sets/edits a cookie
function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = '; expires=' + date.toGMTString();
    } else {
        var expires = '';
    }

    document.cookie = name + '=' + value + expires + '; path=/';
}

// Gets the value of a cookie. Returns null if not set
function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }

    return null;
}

// Deletes a cookie
function deleteCookie(name) {
    setCookie(name, '', -1);
}

// Score functions
// ---------------

var scoreIncreaser = null;
var bestScoreIncreaser = null;

// Increases the score slowly
function increaseScore(score) {
    var current = parseInt($('#score').html());

    // Calculate how much to increase by
    var interval = Math.ceil((score - current) / 50);
    // Don't want to have intervals divisible by 5
    if (interval % 5 === 0) interval++;

    increaseScoreHelper(score, interval);
}

// Helper to increase score slowly
function increaseScoreHelper(score, interval) {
    var current = parseInt($('#score').html());

    if (score === current) return;

    var interval = parseInt(interval);

    // Check to see if the score increaser interval needs to be updated
    if (scoreIncreaser && (score - current) / interval > 50) {
        clearInterval(scoreIncreaser);

        interval = Math.ceil((score - current) / 50);
        if (interval % 5 === 0) interval++;
    }
    
    if (current < score - interval) {
        $('#score').html(current + parseInt(interval));

        // Fire off next interval increaser
        scoreIncreaser = setTimeout(function() {increaseScoreHelper(score, interval)}, 16);
    } else {
        // Done increasing the score
        $('#score').html(score);
        scoreIncreaser = null;
    }
}

// Increases the best score slowly
function increaseBestScore(score) {
    var current = parseInt($('#bestScore').html());

    if (score === current) return;

    var interval = Math.ceil((score - current) / 50);
    if (interval % 5 === 0) interval++;

    increaseBestScoreHelper(score, interval);
}

// Helper to increase the best score slowly
function increaseBestScoreHelper(score, interval) {
    var current = parseInt($('#bestScore').html());
    var interval = parseInt(interval);

    // See if the interval needs to be updated
    if (scoreIncreaser && (score - current) / interval > 50) {
        clearInterval(scoreIncreaser);

        interval = Math.ceil((score - current) / 50);
        if (interval % 5 === 0) interval++;
    }
    
    if (current < score - interval) {
        $('#bestScore').html(current + parseInt(interval));

        // Fire off next interval increaser
        scoreIncreaser = setTimeout(function() {increaseBestScoreHelper(score, interval)}, 16);
    } else {
        // Done increasing the score
        $('#bestScore').html(score);
        scoreIncreaser = null;
    }
}

// Post-load functions
// -------------------

$(function(){
    // Set up key event handlers
    $('html').keyup(keyUpHandler); // Safer to hook up keyup handler first
    $('html').keydown(keyDownHandler);
    $('#resetAsk').click(function() {
        $('#resetAsk').hide();
        $('#resetVerify').show();
    })
    $('#resetYes').click(function() {
        game.updateBestScore(0);
        game.updateBestLevel(0);
        $('#resetVerify').hide();
        $('#resetAsk').show();
    })
    $('#resetNo').click(function() {
        $('#resetVerify').hide();
        $('#resetAsk').show();
    })

    game.disableControls();

    if (bestScore = getCookie('bestScore')) {
        game.updateBestScore(bestScore);
    }
    if (bestLevel = getCookie('bestLevel')) {
        game.updateBestLevel(bestLevel);
    }
})
