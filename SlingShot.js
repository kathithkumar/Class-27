class SlingShot {
    constructor(a1, b1, x){
        var options = {
            bodyA : a1,
            bodyB : b1,
            length : x,
            stiffness : 0.2,
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
        var a = this.body.bodyA.position;
        var b = this.body.bodyB.position;
        strokeWeight(5);
        fill("lightblue");
        line(a.x, a.y, b.x, b.y);
    }
}