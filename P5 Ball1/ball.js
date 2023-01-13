point_y=350;
point_x=360;
velocity_x=5;
velocity_y=8;
point_a=400;
point_b=300;
velocity_a=4;
velocity_b=8;
point_c=123;
point_d=564;
velocity_c=-9;
velocity_d=5;
point_e=654;
point_f=20;
velocity_e=10;
velocity_f=5;
point_g=234;
point_h=511;
velocity_g=-12;
velocity_h=1;
point_i=322;
point_j=322;
velocity_i=-5;
velocity_j=-8;
point_k=450;
point_l=350;
velocity_k=1;
velocity_l=8;
point_m=123;
point_n=564;
velocity_m=9;
velocity_n=5;
point_o=654;
point_p=20;
velocity_o=-7;
velocity_p=-5;
point_q=239;
point_r=311;
velocity_q=-12;
velocity_r=6;
screen_x=700;
screen_y=700;
function setup(){
	createCanvas(screen_x, screen_y);
  
  //Initialisation of canvas, objects, variables etc.
}
function draw(){
	createCanvas(screen_x, screen_y);
  	background(255,0,0);
	// x koord, y koord, radius
	ellipse(point_x , point_y , 55);
	ellipse(point_a , point_b , 55);
	ellipse(point_c , point_d , 55);
	ellipse(point_e , point_f , 55);
	ellipse(point_g , point_h , 55);
	ellipse(point_i , point_j , 55);
	ellipse(point_k , point_l , 55);
	ellipse(point_m , point_n , 55);
	ellipse(point_o , point_p , 55);
	ellipse(point_q , point_r , 55);
	point_y+=velocity_y;
	point_x+=velocity_x;
	point_a+=velocity_a;
	point_b+=velocity_a;
	point_c+=velocity_c;
	point_d+=velocity_d;
	point_e+=velocity_e;
	point_f+=velocity_f;
	point_g+=velocity_g;
	point_h+=velocity_h;
	point_i+=velocity_i;
	point_j+=velocity_j;
	point_k+=velocity_k;
	point_l+=velocity_l;
	point_m+=velocity_m;
	point_n+=velocity_n;
	point_o+=velocity_o;
	point_p+=velocity_p;
	point_q+=velocity_q;
	point_r+=velocity_r;


	//The drawing loop - updates at a constant rate declared in setup


	if(point_y>screen_y || point_y<0){
		velocity_y=-velocity_y;
	}
	if(point_x>screen_x || point_x<0){
		velocity_x=-velocity_x;
	}
	if(point_a>screen_y || point_a<0){
		velocity_a=-velocity_a;
	}
	if(point_b>screen_x || point_b<0){
		velocity_b=-velocity_b
	}
	
	if(point_c>screen_y || point_c<0){
		velocity_c=-velocity_c;
	}
	if(point_d>screen_x || point_d<0){
		velocity_d=-velocity_d
	}
	if(point_e>screen_y || point_e<0){
		velocity_e=-velocity_e;
	}
	if(point_f>screen_x || point_f<0){
		velocity_f=-velocity_f
	}
	
	if(point_g>screen_y || point_g<0){
		velocity_g=-velocity_g;
	}
	if(point_h>screen_x || point_h<0){
		velocity_h=-velocity_h
	}
	if(point_i>screen_y || point_i<0){
		velocity_i=-velocity_i;
	}
	if(point_j>screen_x || point_j<0){
		velocity_j=-velocity_j;
	}
	if(point_k>screen_y || point_k<0){
		velocity_k=-velocity_k;
	}
	if(point_l>screen_x || point_l<0){
		velocity_l=-velocity_l
	}
	
	if(point_m>screen_y || point_m<0){
		velocity_m=-velocity_m;
	}
	if(point_n>screen_x || point_n<0){
		velocity_n=-velocity_n
	}
	if(point_o>screen_y || point_o<0){
		velocity_o=-velocity_o;
	}
	if(point_p>screen_x || point_p<0){
		velocity_p=-velocity_p
	}
	
	if(point_q>screen_y || point_q<0){
		velocity_q=-velocity_q;
	}
	if(point_r>screen_x || point_r<0){
		velocity_r=-velocity_r
	}
}