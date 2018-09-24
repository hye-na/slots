/*----- constants -----*/
var slotScreen = [1, 2, 3]; //to represent the screens

var tiles = {
    "doge": 100,
    "alpaca": 80,
    "bear": 60,
    "grumpy": 20
}

/*----- app's state (variables) -----*/

// var spin;
// var win;
// var lose;
// var points;


/*----- cached element references -----*/


/*----- event listeners -----*/

//* user clicks
slotScreen = document.getElementById('slot-a');


//[MOBILE] event: keyboard "keydown" "keyup" like User can press down on spacebar to stop the reels from spinning

/*----- functions -----*/

function init() {

    function spinIt {
      .click   //user clicks and all 3 slot reels spin
    }

    function randomSpin() { } // the reels spin at random intervals 
    //and stop at random invervals:
    // loop through tiles array/object with .forEach
    // use Math.random(); ???   to
    // use setTimeout
    // make sure slot reels all stop spinning

    function winPoints() { } //if 3 tiles match, it acumulates points
    // winning combos 
    // "doge", "doge", "doge" = 1000
    // "alpaca", "alpaca" "alpaca" = 800
    // "bear", "bear", "bear" = 600
    // "grumpy", "grumpy", "grumpy"= 200
}
    //and points would show on the bottom <div> or <footer>
    //otherwise try again
        //winning msg shows and 
            //insert sound/animation for matching 3
        //else show message "Better luck next time" 
            //play sad sound for losing

    //show ternary operator showing if matching 3 winning tiles show msg "You win at life!"
        //otherwise "Better luck next time..."

};

/*----- Extra Notes -----*/
//Animate Slots and lever using Sass animate


//////EXAMPLE of Render function/////
// function render() {
// 	renderScore();
// 	renderBoard();
// 	if (winner) {
// 		renderWinnerMessage();
// 	} else {
// 		renderTurnMessage();
// 	}
// }