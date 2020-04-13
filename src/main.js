'use strict'

// Creating different views

let game
let splashScreen
let gameScreen
let gameOverScreen

function buildDom (htmlString) {
  const div = document.createElement('div')
  div.innerHTML = htmlString
  return div.children[0]
}

// Spalsh screen

function createSplashScreen () {
  splashScreen = buildDom(`
  <main class=splash1>
    <h1>Viking Invaders</h1>
    <section>
    <p> You are the last guardian standing to defend our King's fortress.
    <p> Choose your weapon and kill the maximum of Vikings.</p>
     <p>If 3 Vikings succeed to reach  the fortress our King will die!</p>
     <p>Use your keyboard arrows <kbd><i class="arrow left"></i></kbd> <kbd><i class="arrow right"></i></kbd> to move and press your <kbd>spacebar</kbd> to throw your projectiles.</p>
     <p> Hurry up, our King's life is in your hands! </p>
    <button>Start</button>
    </section>
  </main>`
  )

  document.body.appendChild(splashScreen)

  const startButton = splashScreen.querySelector('button')
  console.log(startGame)
  startButton.addEventListener('click', startGame)
}

function removeSplashScreen () {
  splashScreen.remove()
}

// game screen

function createGameScreen () {
  gameScreen = buildDom(`
    <main class="game container">
      <header>
        <div class="lives">
          <span class="label">Lives:</span>
          <span class="value"></span>
        </div>
        <div class="score">
          <span class="label">Score:</span>
          <span class="value"></span>
        </div>
      </header>
      <div class="canvas-container">
      <canvas>
      </canvas>
      </div>
    </main>
    `)
  document.body.appendChild(gameScreen)
  return gameScreen
}
function removeGameScreen () {
  gameScreen.remove()
}

// game over screen
function createGameOverScreen () {}
function removeGameOverScreen () {}

// start the game, end the game
function startGame () {
  removeSplashScreen()
  // removeGameOverScreen()

  createGameScreen()

  game = new Game()
  game.gameScreen = gameScreen

  // Start game
  game.start()
}

function endGame () {}

window.addEventListener('load', createSplashScreen)
