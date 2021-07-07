class Question{
    constructor(){
        this.input1= createInput("Enter Your Name Here");
        this.input2= createInput("Enter Correct Option No.");
        this.button= createButton('Submit');
        this.title= createElement('h2');
        this.question= createElement('h2');

        this.option1= createElement('h2');
        this.option2= createElement('h2');
        this.option3= createElement('h2');
        this.option4= createElement('h2');

    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.title.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,20);
        this.question.html("Question: What starts and ends with the letter 'E', but has only one letter");
        this.question.position(50,80);

        this.option1.html("1: Everyone");
        this.option1.position(50,110);
        this.option2.html("2: Envelope");
        this.option2.position(50,140);
        this.option3.html("3: Example");
        this.option3.position(50,170);
        this.option4.html("4: Estimate");
        this.option4.position(50,200);

        this.input1.position(200,300);
        this.input2.position(500,300);
        this.button.position(400,350);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input1.hide();
            this.input2.hide();
            this.title.hide();
            contestant.name= this.input1.value();
            contestant.answer= this.input2.value();
            contestantCount+=1;
            contestant.index= contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }
}
