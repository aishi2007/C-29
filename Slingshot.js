class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        Matter.Body.applyForce(this.sling.bodyA,this.sling.bodyA.position,{x:this.pointB.x, y: this.pointB.y})
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 70, 30, 150);
        image(this.sling2, 180, 75, 30, 80);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8)
            if (pointA.x<220){
                strokeWeight(8);
                line(pointA.x-25, pointA.y, pointB.x-22, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+15, pointB.y-3);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30)
            }else{
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+5, pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30)
            }

            pop();
        }
    }
    
}