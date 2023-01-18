fill_a="blue"
fill_b="red"
farben = ["white" , "red" , "blue" , "cyan" , "yellow" , "silver" , "brown" , "black" , "orange" , "violet"]
größen = [10 , 55 , 100 , 150 , 200 , 250 , 2 , 75 , 125 , 175]


class Ball {
  constructor(x, y, size, color, velocity_x, velocity_y) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color; 
    this.velocity_x = velocity_x;
    this.velocity_y = velocity_y;
  }
  
  setColor(color){
    this.color = color;
  }
  
  setSize(size){
    this.size = size;
  }
  
  /*
  Die folgenden "bounce" und "move" sind dazu da, die Bälle sich bewegen zu   lassen und/oder vin der Wand abspringen zu lassen
  */
  bounce(screen_x, screen_y){
  if(this.y+this.size/2>screen_x || this.y-this.size/2<0){
      this.velocity_y=-this.velocity_y
    }
     if(this.x+this.size/2>screen_y || this.x-this.size/2<0){
      this.velocity_x=-this.velocity_x
    }
  }
  
  
  
  move(){
    this.x+=this.velocity_x
    this.y+=this.velocity_y
  }
  
  
  
  schneller(speed){
    if(this.velocity_x > 0){
      this.velocity_x = this.velocity_x + speed;
    } else{
      this.velocity_x = this.velocity_x - speed;
    }
  

     if(this.velocity_y > 0){
      this.velocity_y=this.velocity_y + speed;
    } else{
      this.velocity_y = this.velocity_y - speed;
    }
    if(this.velocity_y == 0){
      this.velocity_y=this.velocity_y + speed;
    }
    if(this.velocity_x == 0){
      this.velocity_x=this.velocity_x + speed;
    }
  }
  
  
  
  langsamer(speed){
    if(this.velocity_x > 0){
      this.velocity_x = this.velocity_x - speed;
    } else{
      this.velocity_x = this.velocity_y + speed;
    }
  

     if(this.velocity_y > 0){
      this.velocity_y=this.velocity_y - speed;
    } else{
      this.velocity_y = this.velocity_y + speed;
    }
  }
  
  
  /*
  Dieses "create" sorgt dafür, das der Ball gezeichnet wird
  */
  create(){
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}
let button;
function setup() {
  createCanvas(600, 600);
  button1 = createButton('Schneller')
  button1.position(531,580)
  button1.mousePressed(buttonSchneller);
  
  button2 = createButton('Langsamer')
  button2.position(0,580)
  button2.mousePressed(buttonLangsamer);
  
  button3 = createButton('Farbwechsel Ball1')
  button3.position(0,0)
  button3.mousePressed(buttonFarbwechselBall1);
  
  button4 = createButton('Farbwechsel Ball2')
  button4.position(475,0)
  button4.mousePressed(buttonFarbwechselBall2);
  
  button5 = createButton('Größenwechsel Ball1')
  button5.position(150,0)
  button5.mousePressed(buttonGrößenwechselBall1);
  
  button6 = createButton('Größenwechsel Ball2')
  button6.position(300,0)
  button6.mousePressed(buttonGrößenwechselBall2);
  
  ball1 = new Ball(200, 200, 70, fill_a,4,3);
  ball2 = new Ball(300, 500, 100, fill_b,4,3);
   
}

function draw() {
  background("gold");
  ball1.create()
  ball2.create()
  ball1.move()
  ball2.move()
  ball1.bounce(600,600)
  ball2.bounce(600,600)
}

function buttonSchneller() {
  ball1.schneller(2);
  ball2.schneller(2);
}

function buttonLangsamer() {
  ball1.langsamer(2);
  ball2.langsamer(2);
}

function buttonFarbwechselBall1() {
  let m = Math.floor(Math.random() * 10);
  ball1.setColor(farben[m]);
}

function buttonFarbwechselBall2() {  
  let n = Math.floor(Math.random() * 10);
  ball2.setColor(farben[n]);
}

function buttonGrößenwechselBall1(){
  let a = Math.floor(Math.random() * 10);
  ball1.setSize(größen[a])
}

function buttonGrößenwechselBall2(){
  let b = Math.floor(Math.random() * 10);
  ball2.setSize(größen[b])
}