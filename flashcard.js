//will be adding images later
//will work on scoring/buttons/etc after I get flipping to work
const cards = document.querySelectorAll('.card');
cards.addEventListener( 'click', function() {
  cards.classList.toggle('is-flipped');
});

