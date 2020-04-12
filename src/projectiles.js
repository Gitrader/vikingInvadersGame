'use strict'

class Projectiles(canvas, this.player.x){
    this.canvas = canvas;
    this.width =  10;
    this.height =  10;
    this.x = this.player.x;
    this.y = 450;
    this.ctx = canvas.getContext("2d");
    this.direction = 1;
    this.speed = 4;
    this.image = new Image();
}

draw(){
    this.image.src = "../img/arrow-projectile.png";
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
}

updatePosition() {
    this.y -= (this.speed * this.direction);
    
}

shootProjectiles(){}

didCollide(enemy){}

isInScreen() {
    return this.y <= 0;
}