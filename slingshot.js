// chain
class Slingshot{
      constructor(bodyA,pointB){
        // options
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:1   ,
            stiffness:1,
        } 
        //add
        this.pointB=pointB;
       this.links= constraint.create(options);
       World.add(world,this.links);
      }
      fly(){
        this.links.bodyA=null;
      }
       
      // items
      display(){
      if(this.links.bodyA){

      
        line (this.links.bodyA.position.x,this.links.bodyA.position.y,this.pointB.x,this.pointB.y); 
      }       
      }
  }