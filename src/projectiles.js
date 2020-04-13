'use strict'

class Projectiles {
  constructor (canvas, x) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.width = 40
    this.height = 40
    this.x = x
    this.y = canvas.height - 70
    this.direction = 1
    this.speed = 5
    this.image = new Image()
    this.image.src = '../img/arrow-projectile.png'
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
    const projectileRight = this.x + this.size
    const projectileTop = this.y
    const projectileBottom = this.y + this.size

    const enemyLeft = enemy.x
    const enemyRight = enemy.x + enemy.size
    const enemyTop = enemy.y
    const enemyBottom = enemy.y + enemy.size
    if (projectileBottom <= enemyBottom) {
      debugger
    }
    console.log(enemy.y, enemy.x)
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