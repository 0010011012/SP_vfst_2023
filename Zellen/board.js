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
    seed(){
        this.forEach( function(cell){
            // eigentlich ist runden besser...
            let m = Math.floor(Math.random() * 10) % 2;
            cell.zustand = m == 1;
        });
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
    neighbourhood(x,y){
        var neighbours = [];
        for(var i=x-1 ; i<=x+1 ; i++){
            for(var j=y-1 ; j<=y+1 ; j++){
                if(i==x && j==y ){
                    continue;
                }
                if(i<0 || j<0){
                    continue;
                }
                if(i>=this.breite || j>=this.hoehe){
                    continue;
                }
                neighbours.push(this.getcell(i,j))
            }
        }
        return neighbours;
    }
    getcell(x,y){
        var index=10000*x+y; 
        return this.data[index];
    }
}