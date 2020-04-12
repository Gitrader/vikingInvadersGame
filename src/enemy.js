'use strict'

class Enemy{
constructor(canvas,x,speed)
    this.canvas= canvas;
    this.ctx=this.canvas.getContext("2d");
    this.height=655;
    this.width=591;
    this.y=this.canvas.height + this.width;
    this.x=0;
    this.speed=speed;
    this.image = new Image();
}

draw(){
    this.image.src = "../img/noun_Viking_8401.png";
this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
}

updatePosition(){}
this.y = this.y+(this.speed * this.direction);


isInsideScreen(){
    
    return this.y+this.height<this.canvas.height
}

