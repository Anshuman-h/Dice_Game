var randomNumber1=Math.floor(6 * Math.random())+1;
var randomImageSource="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
var randomNumber2=Math.floor(6 * Math.random())+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="⚡PLAYER 1 wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="🔥PLAYER 2 wins";
}
else{
  document.querySelector("h1").innerHTML="draw😒";
}
