class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }
  play(){
    background("yellow");

    textSize(30)
    fill("black");
    text("The Result Of Quiz",300,20);

    //call getContestantInfo( ) here
      Contestant.getPlayerInfo() ;
      var y = 250;
    //write condition to check if contestantInfor is not undefined
    if(allContestants !== null){
      textSize(20)
      fill("blue");
      text("NOTE : Contestents Who Are Answered correct is Highlighted Green",130 ,230);

   console.log(allContestants);
      for(var c in allContestants){
        var correctAnswer = "2";
        textSize(20)
        if(correctAnswer === allContestants[c].answer){
          fill("green");
        }else{
          fill("red");
        }
        text(allContestants[c].name+" : "+allContestants[c].answer,150 ,y);
        y = y+30;
      }
    }

  }

}
