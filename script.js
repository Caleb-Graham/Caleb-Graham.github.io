//Great Race script
var pixels2 = 0;
var pixels = 0;




var mbappeScoot = document.getElementById('mbappe');
var ronaldoScoot = document.getElementById('ronaldo');
var start = document.getElementById("startButton");
start.addEventListener("click", startGame, false);

function startGame() {
  start.src = "img/GreenLight.png";
  start.height = "300";

  function mbappeMove(){
    // changing the css property function line of code? style = "marin-left ="'pixels';"
    mbappeScoot.setAttribute ("style", "margin-left:" + pixels + "px;");
    // make a random for each object to determine how many pixels each item will move possibly picking 1 - 10 px per cycle of timer
    randomPixels2 = Math.ceil(Math.random()*75)
    // make var to add to pixels
    pixels2 = (pixels2 + randomPixels2);
    // if statement to stop the race when a winner has been choosen
    if (pixels2 > 850) {
      stoptimer();
      mbappeScoot.src = "/img/MbappeCelebration.jpg";
      mbappeScoot.width ="300";
    }
  }


  function ronaldoMove(){
    ronaldoScoot.setAttribute ("style", "margin-left:" + pixels + "px;");
    randomPixels = Math.ceil(Math.random()*75)
    pixels = (pixels + randomPixels);
    if (pixels > 850) {
      stoptimer();
      ronaldoScoot.src = "/img/RonaldoCelebration.jpg";
      ronaldoScoot.width = "300";
    }
  }
  // //make a timer
  // for each object that will make imagesmove function go every 1 seconds
    myTimer2 = setInterval(mbappeMove, 1000)
    myTimer = setInterval(ronaldoMove, 1000)



  function stoptimer(){
    clearInterval(myTimer);
    clearInterval(myTimer2);
  }
}








// diplay image for winner

// if pixels at xpixels display winner image

// make a stoplight that will make the race start