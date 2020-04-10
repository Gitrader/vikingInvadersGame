# Viking Invaders Game Project

### Description

This game is a survival game where Vikings are trying to penetrate a king’s fortress and only one hero remains standing to protect it.

More Vikings you kill, more points you get. However if 3 Vikings succeed to avoid your arrows and penetrate the fortress, the game is over!

 

## About the project  

### MVP (DOM-CANVAS)

A player that can move in two directions left and right and can throw projectiles has to kill the maximum of Vikings (enemies) before they touch the bottom of the canvas 3 times.

 

### Backlog

- Choose another weapon
- Increase level difficulty 
- Extra sound effects 
- Table of scores with the ranking of the players

 

## Data structure

```js
1.index.html

2.styles.css

3.main.js

4.game.js

5.player.js

6.enemy.js

7.projectiles.js
```

1. ##### Index with js files

2. ##### Styles.css

Style arround the canvas

3. ##### Main.js

Build dom 

Create splash screen / Remove splash screen 

Create game screen / Remove game screen 

Create GameOver screen / Remove GameOver screen (Play Again button)

Start game 

Window event listener load game

Keydown event listener with keycode (left, right, spacebar)



4. ##### Game Constructor

###### Properties :

- canvas 
- ctx (2d)
- enemies
- player
- gameIsover
- gameScreen
- Score

###### Methods :

- start
- startLoop : enemies, player and projectiles animation
- checkCollision : (projectiles and enemies + enemies  and canvas border)
- gameOver :  when enemies reached 3 times the bottom of the canvas
- Updating scores with updateGameStats()



5. ##### Player Constructor

###### Properties : 

- canvas
- ctx (2d)
- x position
- y position
- size
- image
- speed
- lives

###### Methods: 

- setDirection
- draw
- update
- collideWithEnemy



6. ##### Enemy Constructor

###### Properties:

- canvas
- ctx (2d)
- x position
- y position
- image
- size
- speed
- lives

###### Methods: 

- draw
- collideWithCanvas
- remove



7. ##### Projectiles Constructor

###### Properties:

- canvas
- ctx (2d)
- speed
- x position
- y position
- image

###### Methods:

- draw
- update
- collideWithEnemy
- remove



## States and States Transitions



startScreen

​	Bonus : choose your weapon

​	Start the game

​	Goes to gameScreen when Start button is clicked

gameScreen

​	Game running while lives > 0

​	Goes to gameoverScreen if lives < 0 

gameOverScreen

​	Shows Game Over with 3 random Viking names and the possibility to 	share the score on Slack

​	Goes back to Game Screen when Restart button is clicked



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
- Extend Player constructor
- Create Enemy constructor
- Draw Enemies in game.js
- Move Enemies in game.js
- Move player in game.js
- Create Projectiles constructor
- Create Projectiles extended class
- Check Collisions in game.js
- Remove projectiles/enemies from the gameScreen
- Check collision logic (projectiles + enemies)
- Add Slack plug in to share the score
- Add 3 random Viking names on the gameOverScreen



## Trello

[Trello link](https://trello.com/b/9iH3qkmG/vikings-invadors-game)



## Git

[Link Repo - Link Deploy](https://github.com/Gitrader/vikingInvadersGame.git)



## Slides

URls for the project presentation (slides)

