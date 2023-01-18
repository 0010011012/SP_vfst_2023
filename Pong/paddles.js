class Paddle{
	constructor(point , velocity , hoehe, breite , farbe){
		this.point = point
		this.velocity = velocity
		this.hoehe = hoehe
		this.breite = breite
		this.farbe = farbe
	}
	draw(){
		fill(this.farbe)
		rect(this.point.y , this.point.x , this.breite , this.hoehe);
		//		breite			höhe
	}
	iterate(){
		this.point.x+=this.velocity.x;
		this.point.y+=this.velocity.y;
	
}
	collideswithCanvas(hoehe , breite){
		if(this.point.y<0){
				this.velocity.y=-this.velocity.y;
		}
		if(this.point.y+this.breite>hoehe){
			this.velocity.y=-this.velocity.y;
		}
		if(this.point.x+this.hoehe>breite){
			this.velocity.x=-this.velocity.x;
		}
		if(this.point.x<0){
			this.velocity.x=-this.velocity.x;	
		}
	}
	collideswithBall(ball){
		if(ball.point.y>this.point.y
			&& ball.point.y<this.point.y+this.breite
			&& ball.point.x+ball.radius>= this.point.x
			){
			ball.velocity.x=-ball.velocity.x
		}

	}
}