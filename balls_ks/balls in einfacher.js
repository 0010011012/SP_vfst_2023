class Ball {
  constructor (point_x , point_y , size , color ){
    this.point_x=point_x;
    this.point_y=point_y;
    this.size=size;
    this.color=color;
    
    fill(color);
    ellipse(point_x , point_y , size);
  }    
    setColor(color) {
     this.color = color;
     fill(color);
     ellipse(this.point_x , this.point_y , this.size)     
  }
}
  
let button;  
function setup (){
  createCanvas(700,700);
  background("blue");
  button1 = createButton('Ball1');
  button1.position(630 , 630);
  button2 = createButton('Ball2')
  button2.position(30 , 630)
  button3 = createButton('Ball3')
  button3.position(30 , 30)
  Ball1 = new Ball(200 , 200 , 100 , "green");
  Ball2 = new Ball(400 , 400 , 70  , "cyan");
  Ball3 = new Ball(500 , 200 , 300 , "pink")
  button1.mousePressed(changeBall1)
  button2.mousePressed(changeBall2)
  button3.mousePressed(changeBall3)
}
function changeBall1(){
  if(Ball1.color === "green"){
     Ball1.setColor("brown");
  } else if(Ball1.color === "brown"){
     Ball1.setColor("red");       
  } else{
    Ball1.setColor("green");
  }
}
function changeBall2(){
  if(Ball2.color === "cyan"){
     Ball2.setColor("violet");
  } else if(Ball2.color === "violet"){
     Ball2.setColor("black");       
  } else{
    Ball2.setColor("cyan");
  }
}
function changeBall3(){
  if(Ball3.color === "pink"){
     Ball3.setColor("silver");
  } else if(Ball3.color === "silver"){
     Ball3.setColor("gold");       
  } else{
    Ball3.setColor("pink");
  }
}


//*



class Ball {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size
    this.color = color; 
  }
  
  setColor(color){
    this.color = color;
  }
  
  setSize(size){
    this.size = size;
  }
  
  create(){
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}


function setup() {
  createCanvas(400, 400);
   
  ball1 = new Ball(100, 100, 55, 'white');
  ball2 = new Ball(200, 200, 55, "red");
}


function draw() {
  background(220);
  ball1.create();
  ball2.create();
}

function mouseClicked(){
  if(ball1.color === "white" && ball2.size === 55){
    ball1.setColor("green");
    ball2.setSize(100);
  }else{
    ball1.setColor("white");
    ball2.setSize(55)
  }
}


