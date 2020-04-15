'use strict'

class Projectiles {
  constructor (canvas, x, imagesrc, width, height) {
    this.canvas = canvas 
    this.ctx = canvas.getContext('2d') 
    this.width = width
    this.height = height 
    this.size = 40
    this.x = x + 15
    this.y = canvas.height 
    this.direction = 1
    this.speed = 5
    this.image = new Image()
    this.image.src = imagesrc
  }

  draw () {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  updatePosition () {
    this.y = (this.y - this.speed * this.direction)
  }

  shootProjectiles () {}

  isInsideScreen () {
    return this.y >= 0
  }

  didCollide (enemy) {
    const projectileLeft = this.x
    console.log('HELLO')
    const projectileRight = this.x + this.size
    const projectileTop = this.y
    console.log(projectileTop)
    const projectileBottom = this.y + this.size
    console.log('projectileBottom', projectileBottom)

    const enemyLeft = enemy.x
    const enemyRight = enemy.x + enemy.size
    const enemyTop = enemy.y
    const enemyBottom = enemy.y + enemy.size
    console.log('enemyBottom', enemyBottom)

    console.log(enemy.y, enemy.x, this.x, this.y)
    // Check if the enemy intersects any of the player's sides
    const crossRight = enemyLeft <= projectileRight && enemyRight >= projectileLeft
    const crossLeft = enemyRight >= projectileLeft && enemyLeft <= projectileRight
    const crossTop = enemyBottom >= projectileTop && enemyTop <= projectileBottom
    const crossBottom = enemyBottom <= projectileBottom && enemyBottom >= projectileTop

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true
    }
  };
}
