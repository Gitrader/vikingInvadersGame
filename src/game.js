'use strict'

class Game {
  constructor () {
    this.player = null
    this.enemies = []
    this.projectiles = []
    this.gameIsOver = false
    this.gameScreen = null
    this.score = 0
    this.gameScreen = null
    this.canvas = null
    this.ctx = null
  }

  createProjectiles () {
    if (this.player.isShootingProjectiles) {
      const playerPositionX = this.player.x
      const newProjectiles = new Projectiles(this.canvas, playerPositionX)
      this.projectiles.push(newProjectiles)

      // can shoot or not
      this.player.isShootingProjectiles = false

      // timeout for shooting
      setTimeout(function () {
        this.player.isShootingProjectiles = true
      }.bind(this),
      300)
    };
    console.log('projectiles created')
  }

  checkProjectilesEnemyCollisions () {
    this.enemies.forEach(function (enemy) {
      this.projectiles.forEach(function (oneProjectile) {
        if (oneProjectile.didCollide(enemy)) {
          enemy.y = 0 - enemy.size
          oneProjectile.y = 0 - oneProjectile.size
          this.score += 10
          console.log('this is the score', this.score)
        }
      }, this)
    }, this)
  }

  // instantiate the player, set the canvas, start the loop
  start () {
    this.canvasContainer = document.querySelector('.canvas-container')

    this.canvas = this.gameScreen.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')

    // Save the reference to lives and score elements
    this.livesElement = this.gameScreen.querySelector('.lives .value')
    this.scoreElement = this.gameScreen.querySelector('.score .value')

    // Set the canvas dimensions

    this.containerWidth = this.canvasContainer.offsetWidth
    this.containerHeight = this.canvasContainer.offsetHeight
    this.canvas.setAttribute('width', this.containerWidth)
    this.canvas.setAttribute('height', this.containerHeight)

    this.player = new Player(this.canvas, 1)

    // Event Listener to move the player

    function handleKeyDown (event) {
      if (event.keyCode === 39) {
        console.log('RIGHT')
        this.player.setDirection('right')
      } else if (event.keyCode === 37) {
        console.log('lEFT')
        this.player.setDirection('left')
      } else if (event.keyCode === 32) {
        console.log('SHOOT')
        this.createProjectiles()
      }
    }
    const boundhandleKeyDown = handleKeyDown.bind(this)
    document.body.addEventListener('keydown', boundhandleKeyDown)

    // Start the canvas requestAnimationFrame loop
    this.startLoop()
  }

  startLoop () {
    const loop = function () {
      // // 0. Our player was already created - via `game.start()`
      // console.log('insideLoop')

      // // 1. Create new enemies randomly
      if (Math.random() > 0.98) {
        const randomWidthPosX = this.canvas.width * Math.random()
        const newEnemy = new Enemy(this.canvas, randomWidthPosX, 5)// 5:enemy speed
        this.enemies.push(newEnemy)
      }

      // // 2. Check if player had hit any enemy (check all enemies)
      // this.checkCollisions()

      // // 3. Update the player and check if player is going off the screen
      this.player.handleScreenCollision()

      // // 4. Move the existing enemies
      // // 5. Check if any enemy is going of the screen
      const enemiesOnScreen = this.enemies.filter(function (enemy) {
        console.log('TEST')
        enemy.updatePosition()
        const isInsideScreen = enemy.isInsideScreen()
        return isInsideScreen
      })

      this.enemies = enemiesOnScreen
      /// ////////////////////////////////////////////////////////////////
      // if (this.enemy !== this.enemy.isInsideScreen) {
      //   this.lives -= 1
      // }
      // bottom //if (this.enemy.y + this.enemy.size === this.canvas.x) {
      //   this.lives -= 1
      // }

      // 2. CLEAR THE CANVAS
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      // 3. UPDATE THE CANVAS
      // // Draw the player
      this.player.draw()

      // // Draw the enemies
      this.enemies.forEach(function (enemy) {
        enemy.draw()
      })

      // Create projectiles

      this.projectiles.forEach(function (projectiles) {
        projectiles.draw()
        projectiles.updatePosition()
      })

      // Check if projectiles hit enemies
      this.checkProjectilesEnemyCollisions()

      // 4. TERMINATE LOOP IF THE GAME IS OVER
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop)
      }

      // 5. UPDATE GAME STATUS
      this.updateGameStats()
    }.bind(this)

    // As loop function will be continuously invoked by
    // the `window` object- `window.requestAnimationFrame(loop)`
    // we have to bind the function so that value of `this` is
    // pointing to the `game` object, like this:
    // var loop = (function(){}).bind(this);

    window.requestAnimationFrame(loop)
  }
//////////////
  // checkCollisions () {
  //   this.enemies.forEach(function (enemy) {
  //     if (this.projectiles.didCollide(enemy)) {
  //       this.player.updateScore()

  //       // Move the enemy of the screen up
  //       enemy.y = 0 - enemy.size
  //     }
  //   })
  // }

  gameOver () {}

  updateGameStats () {}
}
