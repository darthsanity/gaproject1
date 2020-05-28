
//build - adding my arrays to start game logic
const cardArray = [`src="images\bunny1.jpg" `, `src="images\bunny1.jpg" `, `src="images\bunny2.jpg" `, `src="images\bunny2.jpg" `, `src="images\bunny3.jpg" `, `src="images\bunny3.jpg" `, `src="images\bunny4.jpg" `, `src="images\bunny4.jpg" `, `src="images\bunny5.jpg" `, `src="images\bunny5.jpg" `, `src="images\bunny6.jpg" `, `src="images\bunny6.jpg" `, `src="images\bunny7.jpg" `, `src="images\bunny7.jpg" `, `src="images\bunny8.jpg" `, `src="images\bunny8.jpg" `, `src="images\bunny9.jpg" `, `src="images\bunny9.jpg" `, `src="images\bunny10.jpg" `, `src="images\bunny10.jpg" `];
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
  }
}
cards.forEach(card => card.addEventListener('click', flipCard));

let flips = document.querySelector("#flips");
let matches = document.querySelector("#matches");


function checkMatch() {
  const firstFlip = chosenCards[0].src;
  const secondFlip = chosenCards[1].src;
  if (firstFlip === secondFlip) {
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
function shuffleCards() {
    for (let i = cardArray.length -1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i = 1));
        cardArray[randIndex].src = i;
        cardArray[i].src = randIndex;
        chosenCards[];
    } return cardArray;
  };
 let button = document.querySelector(`.shuffle`);
 button.addEventListener(`click`, shuffleCards());
//scoring
    //matches will keep track of the number of matches made till all are made
    //flips keep track of how many times you have flipped cards to try and find a match
    //a win = all cards matched
    //---->maybe add a timer so there's a way to lose if I have time

//replay button functionality