'use strict'

// Creating different views

let game
let splashScreen
let chooseWeapon
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
    <section class="section-splash1">
    <p> You are the last guardian standing to defend our King's fortress.
    <p> Choose your weapon and kill the maximum of Vikings.</p>
     <p>If 3 Vikings succeed to reach  the fortress our King will die!</p>
     <p>Use your keyboard arrows <kbd><i class="arrow left"></i></kbd> <kbd><i class="arrow right"></i></kbd> to move and press your <kbd>spacebar</kbd> to throw your projectiles.</p>
     <p> Hurry up, our King's life is in your hands! </p>
    
    <a href="#" id="start">Start</a>
    </section>
  </main>`
  )

  document.body.appendChild(splashScreen)

  const startButton = splashScreen.querySelector('#start')
  console.log(startGame)
  startButton.addEventListener('click', chooseYourWeapon)
}

// function removeSplashScreen () {
//   splashScreen.remove()
// }

// choose your weapon
function chooseYourWeapon () {
  removeScreen()
  chooseWeapon = buildDom(`
  <main>
  
    <h1 class="choose-title">Choose your weapon</h1>
    <section class="section-splash2">
    <div class="weapon" id="bow-weapon">
    <img src="img/bow-wp.png" class="img-bow" alt="bow">
    <br>
    <a href="#" class="bow-p">Bow</a>
    <p>Difficulty: Easy</p>
    </div>
    <div class="weapon" id="canon-weapon">
    <img src="img/canon-wp.png" class="img-canon" alt="canon">
    <br>
    <a href="#" class="canon-p">Canon</a>
    <p>Difficulty: Hard</p>
    </div>
    <section>
  </main>`
  )
  // <p class="canon-p">Canon</p>
  // <p class="bow-p">Bow</p>
  document.body.appendChild(chooseWeapon)
  const bowWeapon = chooseWeapon.querySelector('.bow-p')
  const canonWeapon = chooseWeapon.querySelector('.canon-p')
  // console.log(startGame)
  bowWeapon.addEventListener('click', function () {
    startGame('bow')
  })
  canonWeapon.addEventListener('click', function () {
    startGame('canon')
  })
  console.log(bowWeapon)
}

// function removeChooseYourWeapon () {
//   chooseWeapon.remove()
// }

// game screen

function createGameScreen () {
  gameScreen = buildDom(`
  <main class="game-container">
  <section class="stats">
  
    <div class="lives">
      <span class="label">Lives:</span>
      <span class="value"></span>
    </div>
    <div class="score">
      <span class="label">Score:</span>
      <span class="value"></span>
    </div>
  </section>
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
function createGameOverScreen (score) {
  gameOverScreen = buildDom(`
  <main>

    <h1 class="gameover-title">Game Over</h1>
    <section id="game-over">
    <div class="gameover-score">
          <span class="label">Score:</span>
          <span class="value">${score}</span>
        </div>
    <p id="gameover-paragraph"> Odin, Ragnar & Magnus managed breaking into the fort and killed our King</p>
    <div class="gameover-buttons">
    <a href="#" id="restart">Restart</a>
    <a href="https://app.slack.com/client/T0108L8M317/C010LF86RC7" class="slack">Share on Slack</a>
    <div>
    </section>
  </main>`
  )

  const restartButton = gameOverScreen.querySelector('#restart')
  restartButton.addEventListener('click', chooseYourWeapon)
  document.body.appendChild(gameOverScreen)
  return gameOverScreen
}
function removeScreen () {
  document.body.innerHTML = ''
}

// start the game, end the game
function startGame (weapon) {
  removeScreen()
  // removeChooseYourWeapon ()

  createGameScreen()
  if (weapon === 'bow') {
    game = new Game(true, false) // isBow , isCanon
  } else if (weapon === 'canon') {
    game = new Game(false, true) // isBow, isCanon
  }
  game.gameScreen = gameScreen

  // Start game
  game.start()
}

function endGame (score) {
  removeGameScreen()
  createGameOverScreen(score)
}

window.addEventListener('load', createSplashScreen)
