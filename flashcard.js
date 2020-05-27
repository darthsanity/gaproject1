
//build - adding my arrays to start game logic

const cardArray = [];
//the below arrays are to hold cards as they are chosen/matched
let chosenCards = [];
let chosenCardsId = [];
//for scoring
const cardsMatched = [];

//const for card flip
const cards = document.querySelectorAll('.card');
//working flip card function
//took several iterations to find a flip card that worked as desired
function flipCard() {
  this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));

//slightly stuck till I get my images - will try to find some placehold images easily swapped out

//shuffle logic for game start - fisher/yates algorithm
// shuffleCards(cardArray) {
//     for (let i = cardArray.length -1; i > 0; i--) {
//         let randIndex = Math.floor(Math.random() * (i = 1));
//         cardArray[randIndex].style.order = i;
//         cardArray[i].style.order = randIndex;
//     }
// };

//scoring
    //matches will keep track of the number of matches made till all are made
    //flips keep track of how many times you have flipped cards to try and find a match
    //a win = all cards matched
    //---->maybe add a timer so there's a way to lose if I have time

//replay button functionality