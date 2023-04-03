```
git clone https://github.com/devjume/mini-yahtzee.git
npm install
npm start
```

----
https://huemint.com/website-1/#palette=fafbfc-412830-e13544

#fafbfc white
#412830 dark
#e13544 red


https://mobilepalette.netlify.app/?color=0f2052

#0f2052
#FAFBFF
#41177D

https://reactnavigation.org/docs/state-persistence


TODO:
- [x] Show rules of the game after user submits username
- [x] Hide navbar on username input and rules screen
  - [ ] https://stackoverflow.com/questions/51352081/react-navigation-how-to-hide-tabbar-from-inside-stack-navigation
- [x] Fix error: GAmeboarScreen.js -> GenerateRandomDices() runs one time too much, because "currentDices" parameter is empty twice
- [x] Style scoreboard page
- [x] When game ends -> save score to scoreboard
- [x] When user click "start new game" -> clear points
- [x] Create check if user tries to add point to number that already have points
- [x] If last round and user don't have any dices for last number/points -> set last number to zero and end game as normal
- [x] Implement bonus point adding at the end of the game
- [x] Create functionality when users click "throw" on gamescreen
- [ ] Reset context numbers when user press "Play" on homescreen

Grading:
- [x] App starts in phone (Expo) without errors and warnings - 5
- [x] Structure of the files: Follows the requirements (preparing exercises) - 5
- [x] Styles: Own styles have been used when developing user interface - 5
- [x] Navigation and navigation props: Follows the requirements - 5
- [x] Home page: Name of the player is asked and passed to Gameboard - 5
- [x] Gameboard: Initialization of the app (new game) works - 5
- [x] Gameboard: Throwing and selecting dices follow the instructions - 5
- [x] Gameboard: Calculating and showing points follow the instructions - 5
- [x] Gameboard: Handling abnormal situations follows the instructions - 5
- [x] Scoreboard: Follows the requirements (clear is not absolute necessity) - 5
- [ ] Total 50
