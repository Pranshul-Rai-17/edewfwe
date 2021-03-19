var database;
var game,form,player;
var playercount;
var gamestate = 0;
var allPlayers;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
}

function draw(){
    background("white");
    if(playercount === 4){
        game.update(1);
    }
  if(gamestate === 1){
      clear();
      game.play();
  }
}

