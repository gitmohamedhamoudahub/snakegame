let blockSize = 25;
let rows = 20;
let columns = 20;
let board;
let context;

//snake
let snakeX = 5;
let snakeY = 5;

let appleX = 10;
let appleY = 10;

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

    context.fillStyle = 'green';
    context.fillRect(snakeX,snakeY,blockSize,blockSize);

    context.fillStyle = 'red';
    context.fillRect(appleX,appleY,blockSize,blockSize);

}