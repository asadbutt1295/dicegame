// img1.setAttribute("src", dice1.png);
// img2.setAttribute("src", dice2.png );

function refreshPage() {

var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDiceImage1 = "/dice"+randomNumber1+".png";
var randomDiceImage2 = "/dice"+randomNumber2+".png"; 

var img1 =  document.querySelectorAll("img")[0];
var img2 =  document.querySelectorAll("img")[1];

img1.setAttribute("src", randomDiceImage1);
img2.setAttribute("src", randomDiceImage2 );




if (randomNumber1 > randomNumber2) {
    var header = "PLAYER ONE WINS!"
}
else if (randomNumber1 == randomNumber2)
{
    header = "DRAW!"
} 
else {
    header = "PLAYER TWO WINS!"
}

var refreshMe = document.querySelector("h1").innerHTML= header ;


// function refreshPage() {
// location.reload();
}
