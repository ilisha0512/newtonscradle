class bob {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.body = Bodies.rectangle (x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add (world, this.body);
    }
    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        fill("Magenta");
        strokeWeight(4);
        stroke("White");
        ellipseMode();
        ellipse(0, 0, this.width, this.height);
        pop()
    }
}