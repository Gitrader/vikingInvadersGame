# Viking Invaders Game Project

### Description

This game is a survival game where Vikings are trying to penetrate a king’s fortress and only one hero remains standing to protect it.

More Vikings you kill, more points you get. However if 3 Vikings succeed to avoid your arrows or canon balls and penetrate the fortress, the game is over!

## About the project

### MVP (DOM-CANVAS)

A player that can move in two directions left and right and can throw projectiles has to kill the maximum of Vikings (enemies) before they touch the bottom of the canvas 3 times.

### Backlog

- Choose another weapon

- Increase level difficulty

- Extra sound effects

## Data structure

```
1.index.html

2.style.css

3.main.js

4.game.js

5.player.js

6.enemy.js

7.projectiles.js
```

1. ##### Index with js files

2. ##### Style.css

Style arround the canvas

3. ##### Main.js

Build dom

Create splash screen / Remove splash screen

Create choose your weapon screen / remove choose your weapon screen

Create game screen / Remove game screen

Create GameOver screen / Remove GameOver screen (Play Again button)

Start game

Window event listener load game

Keydown event listener with keycode (left, right, S)

4. ##### Game Constructor

###### Properties :

- canvas
- ctx (2d)
- enemies
- player
- gameIsOver
- gameScreen
- score
- projectiles
- isBow
- isCanon
- arrowSound
- canonSound

###### Methods :

- createProjectiles
- checkProjectilesEnemyCollisions
- start
- startLoop : enemies, player and projectiles animation
- gameOver : when enemies reached 3 times the bottom of the canvas
- Updating scores with updateGameStats()

5. ##### Player Constructor

###### Properties :

- canvas
- ctx (2d)
- x position
- y position
- width
- height
- direction
- score
- isShootingProjectiles
- imagesrc
- image
- speed
- lives

###### Methods:

- setDirection
- handleScreenCollision
- updatePosition
- removeLife
- updateScore
- draw

6. ##### Enemy Constructor

###### Properties:

- canvas
- ctx (2d)
- x position
- y position
- image
- imagesrc
- size
- height
- Width
- speed

###### Methods:

- draw
- updatePosition
- isInsideScreen

7. ##### Projectiles Constructor

###### Properties:

- canvas
- ctx (2d)
- speed
- width
- height
- size
- direction
- x position
- y position
- image
- imagesrc

###### Methods:

- draw
- updatePosition
- shootProjectiles
- isInsideScreen
- didCollide

## States and States Transitions

- startScreen

​ Start the game

​ Goes to Choose your weapon screen when Start button is clicked

- chooseYourWeapon

Choose your weapon bow or canon corresponding to the level of difficulty

When selecting a weapon, redirects to the gameScreen

- gameScreen

​ Game running while lives > 0

​ Goes to gameoverScreen if lives < 0

- gameOverScreen

​ Shows Game Over with 3 random Viking names and the possibility to share the score on Slack

​ Goes back to Choose Your Weapon screen when Restart button is clicked

## Task

- Setup git & GitHub
- Create and link JS files on the HTML
- Start elaborating Readme
- BuildDom in main.js
- Style DOM
- Create 4 screens in main.js
- Create screen transitions in main.js
- Create Game constructor
- Create loop in game.js
- Create Player constructor
- Create Enemy constructor
- Draw Enemies in game.js
- Move Enemies in game.js
- Move player in game.js
- Create Projectiles constructor
- Check Collisions in game.js
- Remove projectiles/enemies from the gameScreen
- Check collision logic (projectiles + enemies)
- Add Slack plug in to share the score
- Add 3 random Viking names on the gameOverScreen

## Trello

[Trello link](https://trello.com/b/9iH3qkmG/vikings-invadors-game)

## Git

[Link Repo - Link Deploy](https://gitrader.github.io/vikingInvadersGame/)

## Slides

URls for the project presentation (slides)

[Link Slides](https://docs.google.com/presentation/d/1SWsAFJ8aoFW0ZgbZ-3sIdWx9mfcW9C1SOsetkq7ps-w/edit?usp=sharing)
