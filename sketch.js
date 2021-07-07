var canvas, database;
var contestant, contestantCount, allContestants;
var quiz, question, title;
var answer;
var gameState= 0;


function setup(){
  canvas = createCanvas(850,450);
  database= firebase.database();

  quiz= new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount===4){
    quiz.update(1);
  }
  if(gameState===1){
    clear();
    quiz.play();
  }
}
