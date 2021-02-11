class cupcakes{
constructor(x,y,width,height){
var options ={
'restitution':0.5,
'friction':0.3,
'density':0.1,
isStatic:true
}
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
World.add(world,this.body);
}
display(){
var pos=this.position
push();
      translate(pos.x,pos.y);
      strokeWeight(4);
      stroke("green");
      fill("yellow");
      rectMode(CENTER);
      pop();

}
}