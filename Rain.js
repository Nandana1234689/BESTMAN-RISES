class Rain {
    constructor(x,y,z){
        var options = {
            isStatic: false,
            'restitution':0.4,
           'friction' :0.1
        }


         this.body = Bodies.circle(x,y,3,options);
        World.add(world, this.body)
        //load Image for BestMan
        
    }

    display(){
        
    
        push();
          translate(this.body.position.x,this.body.position.y);
        fill("blue");
        noStroke()
        ellipseMode(RADIUS);
        ellipse(0,0,3,3);
        pop()
    }






}
