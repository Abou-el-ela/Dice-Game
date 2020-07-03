
var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
var dice1 = "dice/" + randomNumber1 + ".png";
var dice2 = "dice/" + randomNumber2 + ".png";

if(randomNumber1>randomNumber2){
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Player One Wins!";
    document.querySelector(".player1-die").setAttribute("src", dice1);
    document.querySelector(".player2-die").setAttribute("src", dice2);
}


else if(randomNumber1<randomNumber2){
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Player Two Wins!";
    document.querySelector(".player1-die").setAttribute("src", dice1);
    document.querySelector(".player2-die").setAttribute("src", dice2);
}

else if(randomNumber1 = randomNumber2){
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "It's a Draw!";
    document.querySelector(".player1-die").setAttribute("src", dice1);
    document.querySelector(".player2-die").setAttribute("src", dice2);
}

