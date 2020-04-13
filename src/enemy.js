'use strict'

class Enemy {
  constructor (canvas, x, speed) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.size = 200
    this.height = 200
    this.width = 200
    this.y = 0 - this.height
    this.x = x
    this.speed = speed
    this.image = new Image()
  }

  draw () {
    this.image.src = '../img/noun_Viking_8401.png'
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    // this.ctx.fillStyle = 'red'
    // this.ctx.fillRect(this.x, this.y, this.height, this.width)
    // console.log('insideDraw')
    // console.log(this.x, this.y, this.height, this.width)
  }

  updatePosition () {
    this.y += this.speed * 1
  }

  isInsideScreen () {
    return (this.y + this.size > 0) && (this.x + this.size < this.canvas.width)
  }

  isNotOnTheScreen () {
    return (this.y + this.size < 0) && (this.x + this.size > this.canvas.width)
  }
}
