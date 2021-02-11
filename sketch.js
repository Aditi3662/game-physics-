const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var kitchen, Ground1,cupcake1;

function preload(){

kitchenImage= loadImage ("kitchen.png");

}



function setup() {

  createCanvas(1000,500);

	engine = Engine.create();
	world = engine.world;

cupcake1=new cupcakes(500,250,80,80);
 
 Engine.run(engine);
}

function draw() {
  background(kitchenImage);

cupcake1.display();



  drawSprites();
}