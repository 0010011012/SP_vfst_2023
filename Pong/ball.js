class Ball{
	constructor(point , velocity , radius , farbe){
		this.point = point;
		this.velocity = velocity;
		this.radius = radius;
		this.farbe = farbe;
	}
	draw(){
		fill(this.farbe)
		ellipse(this.point.y , this.point.x , this.radius*2);
		//		breite			höhe
	}
	iterate(){
		this.point.x+=this.velocity.x;
		this.point.y+=this.velocity.y;
	
}
collideswithCanvas(hoehe , breite){
	if(this.point.y-this.radius<0){
			this.velocity.y=-this.velocity.y;
	}
	if(this.point.y+this.radius>hoehe){
		this.velocity.y=-this.velocity.y;
	}
	if(this.point.x+this.radius>breite){
		this.velocity.x=-this.velocity.x;
	}
	if(this.point.x-this.radius<0){
		this.velocity.x=-this.velocity.x;	
	}
}
}


