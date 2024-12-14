let blockSize = 25;
let rows = 20;
let columns = 20;
let board;
let context;


window.onload = function() {
board = document.getElementById('gameBoard');
board.height = rows * blockSize ;
board.width = columns * blockSize;  
context = board.getContext('2d');

refreshGameBoard();
}

refreshGameBoard = () =>
{
    context.fillStyle = 'black';
    context.fillRect(0,0,board.width,board.height)
}