class Quiz{
    constructor(){
  
    }
  
    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState= data.val();
        })
    }
  
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
  
    async start(){
        if(gameState===0){
            contestant= new Contestant();
            var contestantCountRef= await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount= contestantCountRef.val();
                contestant.getCount();
            }
            question= new Question();
            question.display();
        }
    }
  
    play(){
        question.hide();
        background("lightblue");
        fill("black");
        textSize(30);
        text("Result of the Quiz",320,50);
        Contestant.getContestantInfo();
        if(allContestants !== undefined){
            var displayAnswers= 280;
            for(var plr in allContestants){
                var correctAns= "2";
                if(correctAns===allContestants[plr].answer)
                fill("green")
                else
                fill("red");
  
            displayAnswers+=35;
            textSize(20);
            text(allContestants[plr].name+" : "+allContestants[plr].answer,250,displayAnswers);
  
            fill("purple");
            textSize(20);
            text("*NOTE: Contestants who answered correct are highlighted in green colour",50,275);
  
            }
        }
    }
  }
  