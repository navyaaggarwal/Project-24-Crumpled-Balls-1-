class dustbin{
    constructor(x,y, width, height, angle) {
        var options = {
            isStatic : false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

        this.body = Bodies.rectangle(x,y,width,height, options)
        World.add(world, this.body);

    }

    display() {

    var pos = this.body.position
    var angle = this.body.angle 

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("white");
    ellipse(70,635, this.width, this.height)
    pop();
        }

}