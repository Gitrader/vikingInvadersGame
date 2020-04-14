'use strict'

class Player {
  constructor (canvas, lives) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.width = 100
    this.height = 100
    this.x = (canvas.width - (this.width / 2)) / 2
    this.y = this.canvas.height - this.height
    this.direction = 0
    this.speed = 10
    this.lives = lives
    this.score = 0
    this.isShootingProjectiles = true
    this.image = new Image()
  }

  // ADD ENEMY COLLISION TO THE CANVAS

  setDirection (direction) {
    if (direction === 'right') {
      this.direction = 1
    } else if (direction === 'left') {
      this.direction = -1
    } else if (direction === 'still') {
      this.direction = 0
    }
  } // right or left

  handleScreenCollision () {
    const screenLeft = 15
    const screenRight = this.canvas.width - 105
    this.x = this.x + this.direction * this.speed
    // if (this.playerLeft <= this.screenLeft) this.setDirection('right')
    // else if (this.playerRight >= this.screenRight) this.setDirection('left')
    // this.updatePosition()

    if (this.x < screenLeft) this.direction = 0
    else if (this.x > screenRight) this.direction = 0
  }

  updatePosition () {
    this.x = this.x + (this.direction * this.speed)

    const playerLeft = this.x
    const playerRight = this.x + this.size

    // TO CHECK 34' YOUTUBE
    const screenRight = this.canvas.width
    const screenLeft = 0
  }

  removeLife () {
    this.lives -= 1
  }

  updateScore () {
    if (didCollide) {
      this.score += 1
    }
  }

  draw () {
    this.image.src = '../img/bow-and-arrow2.png'
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    // this.ctx.fillStyle = 'green'
    // this.ctx.fillRect(this.x, this.y, this.height, this.width)
    // console.log('insideDraw')
    // console.log(this.x, this.y, this.height, this.width)
  }
}
