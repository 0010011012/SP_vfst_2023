class Cell{
    constructor(point_x , point_y , breite , zustand=false){
        this.point_x = point_x;
        this.point_y = point_y;
        this.breite = breite;
        this.zustand = zustand;
    }
    draw(){
        if(this.zustand==true){
            fill("black")
        }
        else{
            fill("white")
        }
        rect(this.point_x*this.breite , this.point_y*this.breite , this.breite , this.breite)
    }
    auferstehen(){
        this.zustand = true
    }
    
    stirb(){
        this.zustand = false
    }
}

class Board{
    constructor(breite , hoehe){
        this.breite=breite;
        this.hoehe=hoehe;
        this.anzahlcell=this.breite*this.hoehe;
        this.data={};
        for(var i = 0 ; i<breite ; i++){
                for(var j = 0; j<hoehe ; j++){
                    var index=10000*i+j;
                    this.data[index]=new Cell(i,j,15,false);
                }
        }
    }
    draw(){    
        this.forEach( function(cell){cell.draw()} )
    }
    forEach(fn){
        var data = this.data;
        Object.keys(data).map(function(idx){
            if(data.hasOwnProperty(idx)){
               var value = data[idx];
            fn(value);
            }
        })
    }
}
function setup(){
    createCanvas(1000 , 700)
    board1= new Board(10,10)
}

function draw(){
    createCanvas(1000 , 700)
    background("grey") 
    board1.draw()
}



