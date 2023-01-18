class gemeinerBall{
    constructor(ball){
        this.ball = ball;
    }

    draw(){
		this.ball.draw()
	}
	iterate(){
		this.ball.iterate()
	
}
    collideswithCanvas(hoehe , breite){
        this.ball.collideswithCanvas(hoehe , breite)
    
        if(this.ball.point.x-this.ball.radius<=0){
            this.ball.velocity.x=Math.sign(this.getvelocity().x) * (abs(  this.ball.velocity.y ) + 5);
    }
    }  
        getpoint(){
            return this.ball.getpoint();
        }
        getvelocity(){
            return this.ball.getvelocity();
            }
            getradius(){
                return this.ball.getradius();
            }
}