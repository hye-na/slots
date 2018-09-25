/*----- constants -----*/

const tiles = [
    {
        points: 100,
        img: "img/doge.png"
    },
    {
        points: 80,
        img: "img/alpaca.png"
    },
    {
        points: 60,
        img: "img/bear.png"
    },
    {
        points: 20,
        img: "img/grumpy.png"
    }
];

const weight = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3];

const winningCombo = [[0, 0, 0], [1, 1, 1], [2, 2, 2], [3, 3, 3]];


/*----- app's state (variables) -----*/
var reels;
var points = 10;

/*----- cached element references -----*/

var msg = document.querySelector('h1');
var reelImgs = document.querySelectorAll("#container img");


/*----- event listeners -----*/
document.getElementById("spinBtn").addEventListener("click", handleSpin);

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        handleSpin();
    }
})

/*----- functions -----*/

function init() {
    reels;
    points = 0;
};

function handleSpin() {
    reels = [
        weight[getRandomUpTo(tiles.length)],
        weight[getRandomUpTo(tiles.length)],
        weight[getRandomUpTo(tiles.length)]
    ];
    checkCombo();
    render();
}

function checkCombo() {

    for (var i = 0; i < winningCombo.length; i++) {
        const [a, b, c] = winningCombo[i]
        if (reels[0] === a && reels[1] === b && reels[2] === c) {
            reels.forEach(function (reel) {
                points += tiles[reel].points
            })
            console.log(points)
        }
        console.log(a, b, c)
        console.log(winningCombo[i])
    }

}


function render() { //what users see

    setTimeout(() => {
        reelImgs.forEach(function (img, idx) {
            img.src = tiles[reels[idx]].img;
        }, 3000);
    });


}

function getRandomUpTo(num) {
    return Math.floor(Math.random() * num);
}




//DO AT END
// the slot reels spin at random intervals 
//and stop at random invervals:
// use setTimeout
// clearInterval. make sure slot reels all stop spinning





// function getMatch() {
//     reels === //all match) ? true : false ;
// }


//if 3 tiles match, it acumulates points and 
//triggers message
//insert sound/animation for matching 3
//else show message "Better luck next time" 
//play sad sound for losing


// losePoints //grumpy cat makes you lose everything~


/*----- Extra Notes -----*/
//Animate Slots and lever using Sass animate
