//will be adding images later
//will work on scoring/buttons/etc after I get flipping to work

//original card flip
// const cards = document.querySelectorAll(".card");
//  for (let i = 0; i < cards.length; i++) {
//      cards[i].addEventListener("click", function() {
//        cards[i].classList.toggle("is-flipped");
//      });
//  }

//alt card flip 
// document.querySelectorAll(".card").forEach(cards => 
//     cards.addEventListener("click", () => cards.classList.toggle("is-flipped"))
// );
//this one ^^^ came from stackoverflow where I was trying to get this to work... what I'm not understanding is why it doesn't toggle back when I click it a second time

//third attempt at a card flip that toggles on and off
// const flipCard = function() {
//     this.classList.toggle(`is-flipped`);
// }
// let card = document.getElementsByClassName(`.card`);
// let cards = [...card];
// for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener(`click`, flipCard());
// };

//fourth attempt
const cards = document.querySelectorAll('.card');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

//scoring
    //matches will keep track of the number of matches made till all are made
    //flips keep track of how many times you have flipped cards to try and find a match
    //a win = all cards matched
    //---->maybe add a timer so there's a way to lose.
