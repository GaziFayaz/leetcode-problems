/**
 * Creates a fresh checklist object.
 * @returns {Object} The fresh checklist object.
 */
let freshChecklist = function () {
    let checklist = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    };
    return checklist;
};

/**
 * Checks if the sub-box within the given range in the Sudoku board is valid.
 * @param {string[][]} board - The Sudoku board.
 * @param {number} startRow - The starting row index of the sub-box.
 * @param {number} endRow - The ending row index of the sub-box.
 * @param {number} startCol - The starting column index of the sub-box.
 * @param {number} endCol - The ending column index of the sub-box.
 * @returns {boolean} - True if the sub-box is valid, false otherwise.
 */
let isValidSubBox = function (board, startRow, endRow, startCol, endCol) {
    let numberChecklist = freshChecklist();
    for (let i = startRow; i < endRow; i++) {
        for (let j = startCol; j < endCol; j++) {
            if (board[i][j] !== ".") {
                if (numberChecklist[board[i][j]] == 0) {
                    numberChecklist[board[i][j]] = 1;
                } else {
                    return false;
                }
            }
        }
    }
    return true;
};

/**
 * Checks if a given Sudoku board is valid.
 * 
 * @param {string[][]} board - The Sudoku board represented as a 2D array of strings.
 * @returns {boolean} - True if the Sudoku board is valid, false otherwise.
 */
var isValidSudoku = function (board) {
    n = 0;
    m = 0;
    for (let i = 0; i < 9; i++) {
        numberChecklist = freshChecklist();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                if (numberChecklist[board[i][j]] == 0) {
                    numberChecklist[board[i][j]] = 1;
                } else {
                    return false;
                }
            }
        }
        numberChecklist = freshChecklist(numberChecklist);
        for (let j = 0; j < 9; j++) {
            if (board[j][i] !== ".") {
                if (numberChecklist[board[j][i]] == 0) {
                    numberChecklist[board[j][i]] = 1;
                } else {
                    return false;
                }
            }
        }
    }
    if (!isValidSubBox(board, 0, 3, 0, 3)) {
        return false;
    }
    if (!isValidSubBox(board, 0, 3, 3, 6)) {
        return false;
    }
    if (!isValidSubBox(board, 0, 3, 6, 9)) {
        return false;
    }
    if (!isValidSubBox(board, 3, 6, 0, 3)) {
        return false;
    }
    if (!isValidSubBox(board, 3, 6, 3, 6)) {
        return false;
    }
    if (!isValidSubBox(board, 3, 6, 6, 9)) {
        return false;
    }
    if (!isValidSubBox(board, 6, 9, 0, 3)) {
        return false;
    }
    if (!isValidSubBox(board, 6, 9, 3, 6)) {
        return false;
    }
    if (!isValidSubBox(board, 6, 9, 6, 9)) {
        return false;
    }
    return true;
};

let board = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const result = isValidSudoku(board);
console.log(result);