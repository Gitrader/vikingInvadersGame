'use strict'

class Player {
  constructor (canvas, lives) {
    this.canvas=canvas;
    this.size=300;
    this.width=300;
    this.height=300;
    this.x= (canvas.width - (this.width + this.height))/2;
    this.y=300;
    this.ctx = this.canvas.getContext("2d")
    this.direction=0;
    this.speed=10;
    this.lives = lives;
    this.score=0;
    this.image = new Image();
  }
}


  // ADD ENEMY COLLISION TO THE CANVAS

setDirection(direction){ 
if (direction === 'right') this.direction=1;
else if (direction ==='left') this.direction=-1;
} // right or left

handleScreenCollision(){

if (this.playerLeft<=this.screenLeft) this.setDirection('right');
else if(this.playerRight>=this.screenRight) this.setDirection("left");
this.updatePosition();
}

updatePosition(){

  this.x=this.x+(this.direction*this.speed)
  
  const playerLeft = this.x;
const playerRight=this.x+this.size;

// TO CHECK 34' YOUTUBE
const screenRight=this.canvas.width
const screenLeft=0;

    
}

removeLife(){
 
    this.lives-=1;
}

updateScore(){
  if (didCollide){
    this.score+=1
  }
}

draw (){
  this.image.src = "../img/bow-and-arrow.png";
  this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  this.player.draw()
  }



