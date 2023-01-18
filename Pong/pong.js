fill_a="red"
screen_h=700
screen_b=1000
score=0
score2=0

function setup (){
	//createCanvas(1000,700);
	//background("yellow");
	p = new Point(600,300);
	h = 50;
	b = 350;
	v = new Velocity(0 , 0);
	w = new Velocity(0 , 0)
	pad = new Paddle (p,v,h,b,fill_a);
	pod = new Paddle (new Point(50,300),w,h,b,fill_a);
	ball = new gemeinerBall(new Ball(new Point(150 , 150), new Velocity(3,4), 70 , "blue"));
}
	
		
  

function draw (){
		game()
}





function game (){
	createCanvas(screen_b,screen_h);
	background("yellow");

	pad.draw();
	pad.collideswithCanvas(screen_b , screen_h);
	pad.iterate();
	pad.collideswithBalln(ball);

	pod.draw();
	pod.collideswithCanvas(screen_b , screen_h);
	pod.iterate();
	pod.collideswithBalls(ball);

	ball.draw();
	ball.collideswithCanvas(screen_b , screen_h);
	ball.iterate();

	if(ball.getpoint().x+ball.getradius() >=screen_h){
		score2++
	}
	if(ball.getpoint().x-ball.getradius() <=0){
		score++
	}
	textSize(25);
	text('Score Player1: '+score,25 , 25)
	textSize(25)
	text('Score Player2: '+score2,675 , 25)
}
function keyPressed(){
	if(keyCode === LEFT_ARROW){
		pad.velocity.y=-10;
	}
	if(keyCode === RIGHT_ARROW){
		pad.velocity.y=10;
	}
	if(keyCode === 65){
		pod.velocity.y=-10
	}
	if(keyCode === 68){
		pod.velocity.y=10;
	}
}