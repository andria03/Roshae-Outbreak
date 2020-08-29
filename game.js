class Game{
    constructor(){
        this.heading=createElement("h1");
        this.startbutton=createButton("START");
    }

    displayfirstpage(){
        background(backgroundimg)
  
        this.heading.position((displayWidth/2)-150,displayHeight/8);
        this.heading.style('font-size', '72px');
        this.heading.style('color', '#ff0000');
        this.heading.html("OUTBREAK");


 
        this.startbutton.style('background-color', '#ff0000');
        this.startbutton.position(displayWidth-300,displayHeight-400);
        this.startbutton.style('font-family', 'cursive');
        this.startbutton.style('font-size', '36px');
        this.startbutton.style('color', 'white');
        this.startbutton.style('width','150px');
        this.startbutton.style('height','80px');


                this.startbutton.mousePressed(()=>{
                this.startbutton.remove();
                this.heading.remove();
                gamestate=2;
                })
    }

    displaysecondpage(){

    }



}
