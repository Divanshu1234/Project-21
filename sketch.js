
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,  600,  10);

ground = new Ground(width/2,670,width,20)
leftSide = new Ground(1100,600,20,120)
rightSidde = new Ground(1350,600,20,120)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine)

paper.display();
ground.display();
leftSide.display();

rightSidde.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.position,{x:15,y:-15})
	}
}


