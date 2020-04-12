'use strict'

class Game {
  constructor () {
    this.player = new Player(this.canvas)
    this.enemies = []
    this.projectiles=[]
    this.gameIsOver = false
    this.gameScreen = null
    this.score = 0
    this.gameScreen=null;
    this.canvas = null
    this.ctx = null
  }
}

// instantiate the player, set the canvas, start the loop
start() {
    this.canvasContainer = document.querySelector('.canvas-container')

    this.canvas=this.gameScreen.querySelector('canvas')
    this.ctx=this.canvas.getContext("2d")

    // Save the reference to lives and score elements
    this.livesElement = this.gameScreen.querySelector('.lives .value')
    this.scoreElement = this.gameScreen.querySelector('.score .value')

    // Set the canvas dimensions

    // this.containerWidth= canvasContainer.offsetWidth;
    // this.containerHeight = canvasContainer.offsetHeight;
    this.canvas.setAttribute("width", 300);
    this.canvas.setAttribute("height", 300);

    this.player=new Player(this.canvas,3);

    // Event Listener to move the player

    function handleKeyDown(event){
      if (event.keyCode === 39){
        console.log('RIGHT')
        this.player.setDirection('right');
      } else if (event.keyCode===37){
        console.log('lEFT')
        this.player.setDirection("left")
      } else if (event.keyCode===32){
        this.player.shootProjectiles
      }
      const boundhandleKeyDown=handleKeyDown.bind(this);
      document.body.addEventListener("keydown", boundhandleKeyDown);

      this.startLoop();

    }

    // this.player.draw()

    // Start the canvas requestAnimationFrame loop
    this.startLoop()
     

}


startLoop(){
  const loop = function (){

// // 0. Our player was already created - via `game.start()`

      // // 1. Create new enemies randomly
      if (Math.random() > 0.95) {
        var randomWidthPosX = this.canvas.width * Math.random();
        const newEnemy = new Enemy(this.canvas, randomWidthPosX, 5);
        this.enemies.push(newEnemy);
      }

      // // 2. Check if player had hit any enemy (check all enemies)
      this.checkCollisions();

      // // 3. Update the player and check if player is going off the screen
      this.player.handleScreenCollision();


      // // 4. Move the existing enemies
      // // 5. Check if any enemy is going of the screen
      const enemiesOnScreen = this.enemies.filter(function (enemy) {
        enemy.updatePosition();
        const isInsideScreen=enemy.isInsideScreen
        return isInsideScreen();
      });

      this.enemies=enemiesOnScreen

      // 2. CLEAR THE CANVAS
      this.ctx.clearImage(0, 0, this.canvas.width, this.canvas.height);

      // 3. UPDATE THE CANVAS
      // // Draw the player
      this.player.draw();

      // // Draw the enemies
      this.enemies.forEach(function (enemy) {
        enemy.draw();
      });

      // 4. TERMINATE LOOP IF THE GAME IS OVER
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }

      // 5. UPDATE GAME STATUS
      this.updateGameStats();
    }.bind(this);

    // As loop function will be continuously invoked by
    // the `window` object- `window.requestAnimationFrame(loop)`
    // we have to bind the function so that value of `this` is
    // pointing to the `game` object, like this:
    // var loop = (function(){}).bind(this);

    window.requestAnimationFrame(loop);
  }

    

loop()




checkCollisions(){
  this.enemies.forEach(function(enemy)){
    if (this.projectiles.didCollide(enemy)){
      this.player.updateScore()

      // Move the enemy of the screen up
      enemy.y=0-enemy.size
    }
  }
 }


gameOver (){}

updateGameStats(){}

