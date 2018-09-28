/*----- constants -----*/

const tiles = [
    {
        points: 5,
        img: 'img/doge.png'
    },
    {
        points: 4,
        img: 'img/alpaca.png'
    },
    {
        points: 3,
        img: 'img/bear.png'
    },
    {
        points: 1,
        img: 'img/grumpy.png'
    }
];

const weight = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3];

const winningCombo = [[0, 0, 0], [1, 1, 1], [2, 2, 2], [3, 3, 3]];


/*----- app's state (variables) -----*/
var reels;
var credits = 50;
var bet = 0;

/*----- cached element references -----*/

var msg = document.getElementById('pts');
var reelImgs = document.querySelectorAll('section img');
var text = document.querySelectorAll('p')
var betElements = document.getElementsByClassName('bet');
var betSpan = document.getElementById('betNum');

/*----- event listeners -----*/

document.addEventListener('keydown', function (event) {
    event.preventDefault();
    if (event.keyCode === 32) {
        if (bet > 0) {
            return handleSpin();
        }
    }
});

document.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 32) {
        return checkWin();
    }
});

betElements[0].addEventListener('click', function (event) {

    if (credits - Number(event.target.id) >= 0) {
        bet += Number(event.target.id);
        credits -= Number(event.target.id);
    } else {
        credits
    }
    betSpan.innerText = bet;
    msg.innerText = credits;
});

/*----- functions -----*/

function init() {
    reels;
    credits = 0;
};

function handleSpin() {
    reels = [
        weight[getRandom(weight.length)],
        weight[getRandom(weight.length)],
        weight[getRandom(weight.length)]
    ];
    render();
};

function checkWin() {
    for (var i = 0; i < winningCombo.length; i++) {
        const [a, b, c] = winningCombo[i]
        if (reels[0] === a && reels[1] === b && reels[2] === c) {
            reels.forEach(function (reel) {
                credits += tiles[reel].points
            })
        }
        msg.innerText = credits === 0 ? 'Sorry Try Again' : credits;
        if (credits === 0) {
            text.forEach(function (p) {
                p.style.display = 'none';
            })
        }
        bet = 0;
        betSpan.innerText = bet;
    }
};


function render() {
    reelImgs.forEach(function (img, idx) {
        img.src = tiles[reels[idx]].img;
    })

};

function getRandom(num) {
    return Math.floor(Math.random() * num)
};
