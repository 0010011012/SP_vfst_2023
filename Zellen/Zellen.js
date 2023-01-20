function setup(){
    createCanvas(1000 , 700)
    board1= new Board(10,10)
    board1.seed()
}
function draw(){
    createCanvas(1000 , 700)
    background("grey") 
    board1.draw()
}