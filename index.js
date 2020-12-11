var randomDice1 = Math.floor(Math.random() * 6 + 1);
var randomDice2 = Math.floor(Math.random() * 6 + 1);

function changePicture(){
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomDice1 +  ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomDice2 +  ".png");
}


if (randomDice1 > randomDice2){
  changePicture();
  document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
} else if (randomDice1 === randomDice2){
  document.querySelector("h1").innerText = "Its a Draw!";
}else{
  changePicture();
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}
