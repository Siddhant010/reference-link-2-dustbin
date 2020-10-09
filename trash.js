class Dirty{

    constructor(x, y, radius){

        var options = {
            isStatic: false, 
            restitution: 0.3,
            friction: 0.5, 
            density: 1.2
        }
        this.bodies = Matter.Bodies.circle(x, y, radius);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("download.jpg");
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        circleMode(CENTER);
        circle(0, 0, this.radius);
        pop();
    }
}