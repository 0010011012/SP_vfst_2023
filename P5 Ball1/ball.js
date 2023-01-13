balls=[];
velocities=[];
screen_x=700;
screen_y=700;
function setup(){
	createCanvas(screen_x, screen_y);
	balls.push([350 , 360]);
	velocities.push([5,8]);
	balls.push([400 , 300]);
	velocities.push([4,8]);
	balls.push([123 , 564]);
	velocities.push([-9,5]);
	balls.push([654 , 20]);
	velocities.push([10,5]);
	balls.push([234 , 511]);
	velocities.push([-12,1]);
	balls.push([322 , 322]);
	velocities.push([-5,-8]);
	balls.push([450 , 350]);
	velocities.push([1,8]);
	balls.push([123 , 564]);
	velocities.push([9,5]);
	balls.push([654 , 20]);
	velocities.push([-7,-5]);
	balls.push([239 , 311]);
	velocities.push([-12,6]);
		
  
  //Initialisation of canvas, objects, variables etc.
}
function draw(){
	createCanvas(screen_x, screen_y);
	
  	background(13,3,120);
	// x koord, y koord, radius
	for(var i=0;i<balls.length;i++){
		balls[i][0]+=velocities[i][0];
		balls[i][1]+=velocities[i][1];
	}
	for(var i=0;i<balls.length;i++){
		ellipse(balls[i][0] , balls[i][1], 55);
	}
	for(var i=0;i<balls.length;i++){
		if(balls[i][1]>screen_y || balls[i][1]<0){
		velocities[i][1]=-velocities[i][1];
		}
		if(balls[i][0]>screen_x || balls[i][0]<0){
		velocities[i][0]=-velocities[i][0];
		}
	}


	//The drawing loop - updates at a constant rate declared in setup
}