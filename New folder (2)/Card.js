const board_game = document.getElementsByClassName('board_game');
const card_game = document.getElementsByClassName('Card_game')

let card_name;

let id;
let isFliped;
let Click;


let stop;
let start;
let pause;

//////////////////////////////////////////////for CARD///////////////////////////////////////
class Card{
  constructor(){
      this.card = false;
      this.isFliped = false;
      this.card_name = card_name;
  }
  
}

function setVariables(){
  time;
  Imgcard = [];
}

function setCard(){
  for(let i = 0; i <= 100; i ++){
    Imgcard[i] = '${i}.jpg';
  }

}

function createCard(i,j){
  for(let i = 0; i <= Imgcard.length; i++){
    for(let j = 0; i <= Imgcard.length; j++){

    }
  }
}

function suffleCard(Imgcard){
  
}

// When the card is covered
function back(){
isFliped = false;
img.src = "0_BACK.jpg";
console.log(img.src);
}

// When open the card 
function open(i,j){
  if(card.isFliped == false){
    isFliped = true;//(1)
    document.addEventListener("click", open);
  }
} 

////////////////////////////////For BOARD///////////////////////////////////////////////////



class Board_game{
    constructor(row, cow){
        this.row = row;// Row
        this.col = col;// Column
        this.board = [];
        
    }
    
}

//////////////////////////Game Play////////////////////////////////////////////////////////
function setTime(){}

function setGameDifficult(){
  const level = document.getElementsByClassName('level')
  switch(level.case){
    case 'easy':
      //
      break;
    case 'medium':
      //
      break;
    case 'hard':
      //
      break;
    case 'Challenge':
      //
      break;
    
    default:
      break;
  }
}

