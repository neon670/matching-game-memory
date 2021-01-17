let cardArray = [
  {
    name: "angry",
    img: "img/angry.png",
  },
  {
    name: "busy",
    img: "img/busy.png",
  },
  {
    name: "happy",
    img: "img/happy.png",
  },
  {
    name: "hungry",
    img: "img/hungry.png",
  },
  {
    name: "lazy",
    img: "img/lazy.png",
  },
  {
    name: "rich",
    img: "img/rich.png",
  },
  {
    name: "sad",
    img: "img/sad.png",
  },
  {
    name: "short",
    img: "img/short.png",
  },
  {
    name: "sleepy",
    img: "img/sleepy.png",
  },
  {
    name: "small",
    img: "img/small.png",
  },
  {
    name: "smart",
    img: "img/smart.png",
  },
  {
    name: "strong",
    img: "img/strong.png",
  },
  {
    name: "tall",
    img: "img/tall.png",
  },
  {
    name: "weak",
    img: "img/weak.png",
  },
  {
    name: "angry",
    img: "img/angry.png",
  },
  {
    name: "busy",
    img: "img/busy.png",
  },
  {
    name: "happy",
    img: "img/happy.png",
  },
  {
    name: "hungry",
    img: "img/hungry.png",
  },
  {
    name: "lazy",
    img: "img/lazy.png",
  },
  {
    name: "rich",
    img: "img/rich.png",
  },
  {
    name: "sad",
    img: "img/sad.png",
  },
  {
    name: "short",
    img: "img/short.png",
  },
  {
    name: "sleepy",
    img: "img/sleepy.png",
  },
  {
    name: "small",
    img: "img/small.png",
  },
  {
    name: "smart",
    img: "img/smart.png",
  },
  {
    name: "strong",
    img: "img/strong.png",
  },
  {
    name: "tall",
    img: "img/tall.png",
  },
  {
    name: "weak",
    img: "img/weak.png",
  }
];

//define variables and get DOM element
// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");
let grid = document.querySelector(".grid");
let scoreBoard = document.querySelector(".scoreBoard");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let imgs;
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;
document.addEventListener("DOMContentLoaded", function () {
//define functions

createBoard(grid, cardArray);
arrangeCard();
playAgain.addEventListener("click", replay);

//add a click functions for images

imgs = document.querySelectorAll("img");
Array.from(imgs).forEach(img =>
img.addEventListener("click", flipCard)
)
});
//createBoard function

function createBoard(grid, array) {
popup.style.display = "none";
array.forEach((arr, index) => {
let img = document.createElement("img");
img.setAttribute("src", "img/blue-placeholder.png");
img.setAttribute("data-id", index);
grid.appendChild(img);
})
}

// arrangeCard function

function arrangeCard() {
cardArray.sort(() => 0.5 - Math.random())
}

// flip Card function

function flipCard() {
let selected = this.dataset.id;
  let clicked =cardArray[selected].name
cardsSelected.push(clicked);



cardsId.push(selected);
this.classList.add("flip");
this.setAttribute("src", cardArray[selected].img);
if (cardsId.length === 2) {
setTimeout(checkForMatch, 500);
}
}
// checkForMatch function

function checkForMatch() {
let imgs = document.querySelectorAll("img");
let firstCard = cardsId[0];
let secondCard = cardsId[1];
if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {
alert("you have found a match");
 // source.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
  //this below is used if you want to add sounds, you can comment it out if you dont want it

cardsWon += 1;
scoreBoard.innerHTML = cardsWon;
setTimeout(checkWon,500)
} else {
imgs[firstCard].setAttribute("src", "img/blue-placeholder.png");
imgs[secondCard].setAttribute("src", "img/blue-placeholder.png"); ;
  imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip");
}
cardsSelected = [];
cardsId = [];
clicks += 1;
clickBoard.innerHTML = clicks;
}

function checkWon() {
if (cardsWon == cardArray.length / 2) {
alert("You won")
setTimeout(()=> popup.style.display = "flex" ,300);
}
}
// The replay function

function replay() {
arrangeCard();
grid.innerHTML = "";
createBoard(grid, cardArray);
cardsWon = 0;
clicks = 0;
clickBoard.innerHTML = 0;
scoreBoard.innerHTML = 0;
popup.style.display = "none";
}



// @description count player's moves
function moveCounter() {
  moves++;
  counter.innerHTML = moves;
  //start timer on first click
  if (moves == 1) {
    second = 0;
    minute = 0;
    hour = 0;
    startTimer();
  }
  // setting rates based on moves
  if (moves > 8 && moves < 12) {
    for (i = 0; i < 3; i++) {
      if (i > 1) {
        stars[i].style.visibility = "collapse";
      }
    }
  } else if (moves > 13) {
    for (i = 0; i < 3; i++) {
      if (i > 0) {
        stars[i].style.visibility = "collapse";
      }
    }
  }
}


// @description game timer
var second = 0,
  minute = 0;
hour = 0;
var timer = document.querySelector(".timer");
var interval;

function startTimer() {
  interval = setInterval(function() {
    timer.innerHTML = minute + "mins " + second + "secs";
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}
