
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bobDiameter = 10;
	roof1 = new roof (351, 200, 400, 25);
	bob1 = new bob (291,200,30,30);
	rope1 = new rope(bob1.body,roof1.body,-bobDiameter*2,0)
	bob2 = new bob (321,200,30,30);
	rope2 = new rope(bob2.body,roof1.body,-bobDiameter*2,0)
    bob3 = new bob (351,200,30,30);
	rope3 = new rope(bob3.body,roof1.body,-bobDiameter*2,0)
	bob4 = new bob (381,200,30,30);
	rope4 = new rope(bob4.body,roof1.body,-bobDiameter*2,0)
    bob5 = new bob (411,200,30,30)
    rope5 = new rope(bob5.body,roof1.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();

  roof1.display();
  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
}



