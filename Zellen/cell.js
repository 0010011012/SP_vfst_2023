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