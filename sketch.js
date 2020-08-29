var gamestate;
var heading;
var startbutton;
var game;

function preload(){
   backgroundimg = loadImage("Images/background.jpg")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    gamestate=1;
     game = new Game();
}

function draw(){
 if(gamestate===1){
    game.displayfirstpage();
}
else if(gamestate===2){
  background(backgroundimg);
  console.log("page2")

}
}


  