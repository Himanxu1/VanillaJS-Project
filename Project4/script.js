let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards=[firstCard,secondCard];
let sum = firstCard + secondCard;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');
let hasBlackJack =false;


function renderGame(){
    startGame();
}

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13)+1;
  if(randomNumber === 1){
      return 11;
  }else if(randomNumber > 10){
    return 10;
  }else{
    return randomNumber;
  }
  

}


function  startGame(){
    cardEl.textContent = "Cards :" ;
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i]+" ";
    }
    sumEl.textContent = "Sum :" + sum;
    if(sum <= 20){
        message = "DO you want to draw a new card";
    }else if(sum === 21){
        message = "You've got BlackJack";
        hasBlackJack = true;
    }else {
        message = "You're out of the game";
        isAlive=false; 
    }

  messageEl.textContent= message;
}


function newCard(){
    let newCard = 7;
    sum += newCard;
     
    cards.push(newCard);
    

    renderGame();
}