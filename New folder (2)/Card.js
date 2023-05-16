class Card{
  constructor(card_name,card_id){
      this.name = card_name;
      this.id = card_id;
  }
  
}

// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");
// const img = new Image();
// const img1 = new Image();


// img.width = 500;
// img.height = 500;
// img.src = "0_BACK.jpg";
// img.onload = function() {
//   ctx.drawImage(img, 0, 0);
// };

// img1.src = "1_cake.jpg";
// img1.width = 500;
// img1.height = 500;
// img1.onload = function(){
//     ctx.drawImage(img1, 50, 500);
// };

let isFliped = false;

// When the card is covered
function back(){
isFliped = false;
img.src = "0_BACK.jpg";
}

// When open the card 
function open(){
isFliped = true;
} 
