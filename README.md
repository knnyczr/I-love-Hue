# Project 1 - Hue Clone

## Project Schedule

|  Day | Deliverable | 
|---|---| 
|Day 1: Wed| Wireframes, Priority Matrix, Pseudocode/actual code?| Yes
|Day 2: Thur| Gradient "maps," HTML/CSS(? if time allows this in Day 1)| Yes
|Day 3: Fri| JS JS JS (& post MVP) | Yes
|Day 4: Sat| Clean up the code, run final tests, begin presentation | Yes
|Day 5: Sun| Sleep, practice presentation | Yes
|Day 6: Mon| Game Completed | Yes

## Project Description

*I love hue* is the original single player game that makes puzzles out of gradients. This game is a clone of called *HueClone*. At the beginning of the level, the player is presented with a board made up of tiles closely spaced together. Each tile has an individual color that together with it's siblings make gradient. The board then is re-arranged and player has to recreate that gradient. 

http://i-love-hue.com/

## Priority Matrix


http://res.cloudinary.com/knnyczr/image/upload/a_auto_right/v1522204492/IMG_0200.jpg


## MVP

+ "Gradient Matrix"

+ Name input

+ Winning Logic

+ Game initializer

+ Color scrambler

## POST MVP

+ Algothim that creates user dictated "Gradient Matrix"

⋅⋅⋅ User inputs number of rows and columns, and creates this board.

+ Algothim that creates the Gradients for me

⋅⋅⋅ the user inputs 2 or 3 colors, the algothium creates the div's with that specific RGB/HEX codes.

+ Function that connects the Algothims 

## Wireframes

http://res.cloudinary.com/knnyczr/image/upload/a_auto_right/v1522204722/IMG_0197.jpg

## Game Components

### Landing Page

+ User will see "Hi" is large font, followed by an mini introduction. 
+An input for the player's name.

### Game Initialization

+ After submiting the player's name
+A list of level's and boards. 
+The first board is presented, the divs rearrange the game starts. 

### Playing The Game

+ During game play the player will be able to click and drag the div's to where they think the gradient is going, and on mouse up the div's switch.

+ MVP have it do both, click on click to swtich, & mousedown,  mouseover and up.

### Winning The Game

+ After sucessfully rearranging the gradient the user will be congradulated and on to the next stage. 

### Game Reset

+ Every new level is a kind of reset.
+ Player will can jump to any level at the beginning

## Functional Components


| Component | Priority | Estimated Time | Time Invetsted |
| --- | :---: |  :---: | :---: |
| Name input - HTML/CSS | L | 1hrs| 3hrs |
| Gradient Matrix + HTML/CSS| M | 7hrs| 10hrs |
| Winning Logic + Swap function | H | 8hrs| 20hrs |
| Game Initializer | M | 8hrs| 2hrs |
| Color Scrambler | H | 8hrs| 10hrs |
| postMVP | L | 8hrs| 0hrs | 0hrs |
| TOTALS |  | 40hrs| 3hrs | 0hrs |


## Resources

TEXT COLOR ANIMATION
https://codepen.io/shshaw/pen/YpERQQ

TIMER FUNCTION
@Aisha Barrous

## Issues and Resolutions / One Up  Points (Learning Points)

**Error:** app.js:56 Uncaught TypeError: sq1.addClass is not a function 
**Resolution:** figured out the difference between node lists and arrays. Their uses. 

**Learned**
(Reference John Masters) jQuery wraps elements from the DOM. Making it easier to select elements from the HTML.

$('div')

#### EASIER THAN 

.getElementByTagName('div')

On line JS:58 I compare $(this)[0] == sq[0] gives us the comparison of the inside of these wrappers. Comparing $(this) == sq will always return false because it comapres it's wrappers. 

**Learned**
$('.matrix') will always return a node list - jQuery find all things with that element name/class/id etc but doesnt return with an actual array, that must be stored into usable variable.
#### NOTE: Can't iterate through a NodeList Or use any array method on a NodeList