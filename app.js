let blockSize = 25;
let rows = 20;
let columns = 20;
let board;
let context;

//snake
let snakeX = 10;
let snakeY = 10;

let appleX ;
let appleY ;
let velocityX = 0;
let velocityY = 0;

window.addEventListener('keydown', (event) => {
console.log(event.key);
    switch (event.key) {
        case 'ArrowUp':
           {
            velocityX = 0
            velocityY =-1;
            break;
           }
        case 'ArrowDown':
            {
                velocityX = 0
                velocityY =1;
                break;
            }

        case 'ArrowLeft':
            {
                velocityX = -1
                velocityY = 0;
                break;
            }
      case 'ArrowRight':
        {
            console.log('....Move Right....');
            velocityX = 1;
            velocityY =0;
            break;
        }
      
    }
  });
  

window.onload = function() {
board = document.getElementById('gameBoard');
board.height = rows * blockSize ;
board.width = columns * blockSize;  
context = board.getContext("2d");
placeApple();

// refreshGameBoard();
setInterval(refreshGameBoard,1000/10);
}

moveSnake = (key) => {
}

function refreshGameBoard() 
{
    console.log('Refresh Called');
    context.fillStyle = 'black';
    context.fillRect(0,0,board.width,board.height)

    context.fillStyle = 'green';
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    console.log(`X= ${snakeX} Y= ${snakeY}`);
    context.fillRect(snakeX,snakeY,blockSize,blockSize);

    context.fillStyle = 'red';
    context.fillRect(appleX,appleY,blockSize,blockSize);

}

placeApple = () =>{
    appleX = Math.floor(Math.random() * columns) * blockSize;
    appleY = Math.floor(Math.random() * rows) * blockSize;
}