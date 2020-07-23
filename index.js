

let score = 0;
var scoreDisplay = document.getElementById('score');
var holes = document.getElementsByClassName('hole');
setInterval(function(){
  var randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle('mole');
}, 500);


const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
    if (clickEvent.target.matches('.mole')) {
      clickEvent.target.classList.remove('mole')
      score++
      scoreDisplay.innerText=score;
    }
} );


