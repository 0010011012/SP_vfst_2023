fill_a="red"
screen_h=700
screen_b=1000
score=0
state=true

function setup (){
	//createCanvas(1000,700);
	//background("yellow");
	p = new Point(600,300);
	h = 50;
	b = 350;
	v = new Velocity(0 , 0);
	pad = new Paddle (p,v,h,b,fill_a);
	ball = new gemeinerBall(new Ball(new Point(150 , 150), new Velocity(3,4), 70 , "blue"));
}
	
		
  

function draw (){
	if(state === true){
		game()
	}
	else{
		textSize(100);
		text('Verloren', screen_h/2-100, screen_b/2-100);

	}
}





function game (){
	createCanvas(screen_b,screen_h);
	background("yellow");

	pad.draw();
	pad.collideswithCanvas(screen_b , screen_h);
	pad.iterate();
	pad.collideswithBall(ball);

	ball.draw();
	ball.collideswithCanvas(screen_b , screen_h);
	ball.iterate();

	if(ball.getpoint().x+ball.getradius() >=screen_h){
		state = false
	}
	if(ball.getpoint().x-ball.getradius() <=0){
		console.log("Punkt"+score)
		score++
	}
	textSize(25);
	text('Score: '+score,25 , 25)
	
	if(this.point.y<0){
		fill_a="violet";
	}
	if(this.point.y+250>700){
		fill_a="red";
	}
	if(this.point.x+350>1000){
		fill_a="blue";
	}
	if(this.point.x<0){
		fill_a="green";	
	}
}
function keyPressed(){
	if(keyCode === LEFT_ARROW){
		pad.velocity.y=-10;
	}
	if(keyCode === RIGHT_ARROW){
		pad.velocity.y=10;
	}
	if(keyCode === DOWN_ARROW){
		pad.velocity.y=0
	}
}