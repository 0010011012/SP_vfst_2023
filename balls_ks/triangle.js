x_1=200
x_2=300
x_3=200
x_4=100
x_5=300
x_6=100
dif_x=3
function dreieck(a,b,c,d,e,f,g,h,i,j,k,l){
  line(a,b,c,d);
  line(e,f,g,h);
  line(i,j,k,l);
}
function setup(){
  createCanvas(700,700);
  background(250,0,0);
  for(var i = 0; i < 100; i++){
     dreieck(x_1,450,x_2,250,
             x_3,450,x_4,250,
             x_5,250,x_6,250);
    x_1 = x_1 + dif_x;
    pause
    background("red")
    pause
    x_2 = x_2 + dif_x;
    pause
    background("red")
    pause
    x_3 = x_3 + dif_x;
    pause
    background("red")
    pause
    x_4 = x_4 + dif_x;
    pause
    background("red")
    pause
    x_5 = x_5 + dif_x;
    pause
    background("red")
    pause
    x_6 = x_6 + dif_x;
  }
}