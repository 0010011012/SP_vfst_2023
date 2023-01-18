point_x=200
point_y=200
point_a=200
point_b=400
velocity_x=4
velocity_y=3
velocity_a=3
velocity_b=4
size_x=300
fill_a="blue"
fill_b="red"
speed_x=1
screen_x=700
screen_y=700
function setup() {
  createCanvas(screen_x, screen_y);
}

function draw() {
  background(0,255,0);
  noStroke();
  // blue
  fill(fill_a)
  ellipse(point_x , point_y , size_x);
  // red
  fill(fill_b)
  ellipse(point_a , point_b , size_x);
  point_x+=velocity_x;
  point_y+=velocity_y;
  point_a+=velocity_a;
  point_b+=velocity_b;

  if(point_y+size_x/2>screen_x || point_y-size_x/2<0){
    velocity_y=-velocity_y
  }
   if(point_x+size_x/2>screen_y || point_x-size_x/2<0){
    velocity_x=-velocity_x
  }
  if(point_a+size_x/2>screen_x || point_a-size_x/2<0){
    velocity_a=-velocity_a
  }
   if(point_b+size_x/2>screen_y || point_b-size_x/2<0){
    velocity_b=-velocity_b
   }
  if(point_y+size_x/2>screen_x){
    fill_a="black"
  }
  if(point_y-size_x/2<0){
    fill_a="grey"
  }
   if(point_x+size_x/2>screen_y){
    fill_a="green"
  }
   if(point_x-size_x/2<0){
    fill_a="blue"
   }
   if(point_b+size_x/2>screen_x){
    fill_b="cyan"
  }
  if(point_b-size_x/2<0){
    fill_b="violet"
  }
   if(point_a+size_x/2>screen_y){
    fill_b="brown"
  }
   if(point_a-size_x/2<0){
    fill_b="white"
  }
}

function keyPressed(){
  console.log(keyCode);
  if(keyCode == 37){
  if(velocity_x>0){
    velocity_x=velocity_x+speed_x;
  } else{
    velocity_x=velocity_x-speed_x;
  }
  if(velocity_y>0){
    velocity_y=velocity_y+speed_x;
  } else{
    velocity_y=velocity_y-speed_x;
  }
  if(velocity_a>0){
    velocity_a=velocity_a+speed_x;
  } else{
    velocity_a=velocity_a-speed_x;
  }
  if(velocity_b>0){
    velocity_b=velocity_b+speed_x;
  } else{
    velocity_b=velocity_b-speed_x;
  }
}
  
  if(keyCode == 39){
  if(velocity_x==1 || velocity_x==-1){
    velocity_x=velocity_x
  }
  if(velocity_y==1 || velocity_y==-1){
    velocity_y=velocity_y
  }
  if(velocity_a==1 || velocity_a==-1){
    velocity_a=velocity_a
  }
  if(velocity_b==1 || velocity_b==-1){
    velocity_b=velocity_b
  }
  if(velocity_x>0){
    velocity_x=velocity_x-speed_x;
  } else{
    velocity_x=velocity_x+speed_x;
  }
  if(velocity_y>0){
    velocity_y=velocity_y-speed_x;
  } else{
    velocity_y=velocity_y+speed_x;
  }
  if(velocity_a>0){
    velocity_a=velocity_a-speed_x;
  } else{
    velocity_a=velocity_a+speed_x;
  }
  if(velocity_b>0){
    velocity_b=velocity_b-speed_x;
  }else{
    velocity_b=velocity_b+speed_x;
  }
  }
}




//*


fill_a="blue"
fill_b="red"
screen_x=700
screen_y=700
size_x=70

class Ball {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size
    this.color = color; 
    this.velocity_x=4
    this.velocity_y=3
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
    this.x+=this.velocity_x
    this.y+=this.velocity_y
    
    if(this.y+size_x/2>screen_x || this.y-size_x/2<0){
    this.velocity_y=-this.velocity_y
  }
   if(this.x+size_x/2>screen_y || this.x-size_x/2<0){
    this.velocity_x=-this.velocity_x
  }
  }
}

function setup() {
  createCanvas(screen_x, screen_y);
  background("gold");
  ball1 = new Ball(200, 200, size_x, fill_a);
  ball2 = new Ball(400, 200, size_x, fill_b);
  console.log(ball1.velocity_x)
}

function draw() {
  ball1.create()
  ball2.create()
}


//*
