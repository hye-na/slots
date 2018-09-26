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
var points = 0;

/*----- cached element references -----*/

var msg = document.querySelector('h1');
var reelImgs = document.querySelectorAll("#container img");

/*----- event listeners -----*/

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        handleSpin();
    }
})

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 32) {
        checkWin();
    }
})


/*----- functions -----*/

function init() {
    reels;
    points = 0;
};

function handleSpin() {
    reels = [
        weight[getRandom(tiles.length)],
        weight[getRandom(tiles.length)],
        weight[getRandom(tiles.length)]
    ];
    render();
}

function checkWin() {

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
        msg.innerText = points;
    }

}


function render() {
    reelImgs.forEach(function (img, idx) {
        img.src = tiles[reels[idx]].img;
    })

}

function getRandom(num) {
    return Math.floor(Math.random() * num)
};




//triggers message?

//insert sound for during spin
//pop sounds for stopping spin


//else show message "Better luck next time" 
//play sad sound for losing



/*----- Extra Notes -----*/
//Animate Slots and lever using Sass animate

// losePoints //grumpy cat makes you lose everything~
