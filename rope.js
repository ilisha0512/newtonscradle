class rope {
    constructor (bodyA, bodyB, offsetX, offsetY) {

    this.offsetX = offsetX;
    this.offsetY = offsetY;
        
      var options ={
          bodyA: bodyA,
          bodyB: bodyB,
          stiffness: 1,
          length: 200,
      }

      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if (this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            var anchor1x = pointA.x;
            var anchor1y = pointA.y;
            var anchor2x = pointB.x + this.offsetX;
            var anchor2y = pointB.y + this.offsetY;
            stroke("gray");
            line(anchor1x, anchor1y, anchor2x, anchor2y);
        }
    }
}