

// Declaring variables for events
let stopLight = document.getElementById('startButton');
let mbappeRun = document.getElementById('mbappe');
let ronaldoRun = document.getElementById('ronaldo'); 
let mbappeWin = document.getElementById('winMbappe');
let ronaldoWin = document.getElementById('winRonaldo');


// onlick event for starting race by clicking stopLight variable
document.getElementById('startButton').addEventListener("click", startRace);
ronaldoWin.addEventListener("click", restartRace);
mbappeWin.addEventListener("click", restartRace);

// function that runs the click event and swaps images and styles the racers to the left.
function startRace() 
{

stopLight = document.getElementById('startButton').src = "img/RedLight.png";
mbappeRun = document.getElementById('mbappe').src = "img/Mbappe.png";
 ronaldoRun = document.getElementById('ronaldo').src = "img/Ronaldo.png";
 document.getElementById('mbappe').style.left = "0px";
 document.getElementById('ronaldo').style.left = "0px";

 var myTime = setInterval(takeOff, 10); 

    function takeOff() 
{

    var rand = Math.round(Math.random() * 20);
    var rand2 = Math.round(Math.random() * 20);
    let mbappeRacer = document.getElementById('mbappe').style.left
    let ronaldoRacer = document.getElementById('ronaldo').style.left

    mbappeRacer = document.getElementById('mbappe').style.left = (parseInt(document.getElementById('mbappe').style.left) + rand) + "px";
    ronaldoRacer = document.getElementById('ronaldo').style.left = (parseInt(document.getElementById('ronaldo').style.left) + rand2) + "px";


//if statment to stop racer at finsh point
    if (parseInt(mbappeRacer) >= 1400) {
    myStop();
    document.getElementById("ronaldo").style.visibility = "hidden";
    document.getElementById('mbappe').style.visibility = "hidden";
    document.getElementById("winMbappe").style.visibility = "visible";
    return;

    }   else if (parseInt(ronaldoRacer) >= 1400) 
    {
    myStop();
    document.getElementById("ronaldo").style.visibility = "hidden";
    document.getElementById('mbappe').style.visibility = "hidden";
    document.getElementById('winRonaldo').style.visibility = "visible";

    }

}

ronaldoWin.addEventListener("click", revealImages);
mbappeWin.addEventListener("click", revealImages);

// function that reveals images
function revealImages()
{
document.getElementById("ronaldo").style.visibility = "visible";
document.getElementById("mbappe").style.visibility = "visible";
document.getElementById("winMbappe").style.visibility = "hidden";
document.getElementById("winRonaldo").style.visibility = "hidden";
document.getElementById('startButton').src = "img/RedLight.png";

}


// This stops the interval
function myStop() 
{
clearInterval(myTime)

}

// this function will style the oriiginal back to the left and insert the running images. 
document.getElementById('startButton').addEventListener("click", restartRace);

}
function restartRace()
{
document.getElementById('mbappe').src = "img/Mbappe.png";
 document.getElementById('ronaldo').src = "img/Ronaldo.png";
 document.getElementById('startButton').src = "img/RedLight.png";
 document.getElementById('mbappe').style.left = "0px";
 document.getElementById('ronaldo').style.left = "0px";

}

