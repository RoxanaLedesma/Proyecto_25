class Paper{
    constructor(x, y, width, height){
    var opstions={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }
    this.height=200;
    this.width=500;
    this.image=loadImage("paper.png");
    }
    display(){
        push();
        translate(this.position.x, this.position.y);
        rotate(angle);
        imageMode(CENTER);
        pop();
      }
}
