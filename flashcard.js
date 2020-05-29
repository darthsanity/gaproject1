

//the below arrays are to hold cards as they are chosen/matched
let chosenCards = [];
//for scoring
const cardsMatched = [];

//const for card flip
const cards = document.querySelectorAll('.cardimage');
//working flip card function
//took several iterations to find a flip card that worked as desired
function flipCard() {
  this.parentElement.parentElement.classList.toggle('flip');
  chosenCards.push(this);
  console.log(chosenCards[0].parentElement.parentElement);
  if (chosenCards.length === 2) {
    checkMatch();
    flipCounter();
  }
}
cards.forEach(card => card.addEventListener('click', flipCard));

let flips = 0;
function flipCounter() {
  let cardFlips = document.querySelector(`#flips`)
  flips++;
  cardFlips.innerHTML = flips;
}

let matches = 0
function matchCounter(){ 
  let countMatches = document.querySelector(`#matches`);
  matches++;   
  countMatches.innerHTML = matches; 
  console.log(matches);
}

function checkMatch() {
  const firstFlip = chosenCards[0].src;
  const secondFlip = chosenCards[1].src;
  if (firstFlip === secondFlip) {
    matchCounter();
   console.log("you have a match");
   chosenCards = [];
  } else {
    setTimeout(function () {
      chosenCards[0].parentElement.parentElement.classList.toggle(`flip`);
    chosenCards[1].parentElement.parentElement.classList.toggle(`flip`);
    chosenCards = [];
    },2000
    )
  };
}

//shuffle logic for game start - fisher/yates algorithm
// class cardimage {
//   constructor(cardimage) {
//     this.cardArray = cardimage.src
// };


let shuffleCards = function() {
  console.log("shuffling");
  for (let i = document.images.length - 1; i >= 0; i--) {
    let randIndex = Math.floor(Math.random() * document.images.length);

    let temp = document.images[i].src;
    document.images[i].src = document.images[randIndex].src;
    document.images[randIndex].src = temp;
  }
  console.log(document.images);
};
shuffleCards();


// function shuffleCards() {
//     for (let i = cardArray.length -1; i > 0; i--) {
//         let randIndex = Math.floor(Math.random() * (i = 1));
//         cardArray[randIndex].src = i;
//         cardArray[i].src = randIndex;
//         chosenCards[];
//     } return cardArray;
//   };
// function shuffleCards () {
//   for (let i = cards.length -1; i > 0; i--) {
//     let randIndex = Math.floor(Math.random() * (i = 1));
//     randIndex = i;
//     cards.src = randIndex;
//   } return cards.src;
// }

 const button = document.getElementById(`replay`);
 button.addEventListener(`click`, function() {
   flips = 0;
   document.querySelector(`#flips`).innerHTML = 0;
   matches = 0;
   document.querySelector(`#matches`).innerHTML = 0;
   shuffleCards();
 });
    //matches will keep track of the number of matches made till all are made
    //flips keep track of how many times you have flipped cards to try and find a match
    //a win = all cards matched
    //---->maybe add a timer so there's a way to lose if I have time

//replay button functionality