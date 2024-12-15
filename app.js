let blockSize = 25;
let rows = 20;
let columns = 20;
let board;
let context;

//snake
let snakeX = Math.floor(Math.random() * columns) * blockSize;
let snakeY = Math.floor(Math.random() * rows) * blockSize;
 
let appleX ;
let appleY ;

let velocityX = 0;
let velocityY = 0;

let snakeBody = [];

let isGameOver = false;

window.addEventListener('keydown', (event) => {
// console.log(event.key);
    switch (event.key) {
        case 'ArrowUp':
           {
            if(velocityY != 1)
                {                
                    velocityX = 0;                
                    velocityY =-1;                
                    break;
                }
           }
        case 'ArrowDown':
            {
                if(velocityY != -1)
                    {               
                        velocityX = 0;                
                        velocityY = 1;                
                        break;
                    }
            }

        case 'ArrowLeft':
            {
                if(velocityX != 1)
                    {
                        velocityX = -1;                
                        velocityY = 0;                
                        break;
            }}
      case 'ArrowRight':
        {
            if(velocityX != -1)
                {                   
                    velocityX = 1;            
                    velocityY =0;           
                    break;
                }
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
setInterval(refreshGameBoard,100);
}

moveSnake = (key) => {
}

function refreshGameBoard() 
{
    if(isGameOver) return;

    // console.log('Refresh Called');
    //Game Board
    context.fillStyle = 'black';
    context.fillRect(0,0,board.width,board.height)

    //Apple     
    context.fillStyle = 'red';
    context.fillRect(appleX,appleY,blockSize,blockSize);


    if((snakeX == appleX) && (snakeY == appleY))
    {

        snakeBody.push([snakeX,snakeY]);
        console.log('Eaten...' + snakeBody);
        placeApple();
    }
    // let snakeBodyLength = 0;
    
    for(let i = snakeBody.length-1; i > 0 ; i--)
    {
        snakeBody[i] = snakeBody[i-1];

    }

    if(snakeBody.length)
    {
        snakeBody[0] = [snakeX,snakeY];;
    }
    //Snake
    context.fillStyle = 'green';
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    // console.log(`X= ${snakeX} Y= ${snakeY}`);
    context.fillRect(snakeX,snakeY,blockSize,blockSize);  

    for(let i=0; i<snakeBody.length; i++)
    {
        console.log('snake body ');
        context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize);
    }
    if(snakeX < 0 || snakeY<0 || (snakeX > blockSize * columns) || (snakeY > blockSize * rows)) 
    {
        isGameOver = true;
        alert('GAME OVER!');
    }
    for(let i = 0; i < snakeBody.length; i++)
    {
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1])
        {               
            isGameOver = true;        
            alert('GAME OVER!');
        }
    }
    }

placeApple = () =>{
    appleX = Math.floor(Math.random() * columns) * blockSize;
    appleY = Math.floor(Math.random() * rows) * blockSize;
}