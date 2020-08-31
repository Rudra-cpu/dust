
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,670,800,20);
	paper1 = new Paper(50,635,0.5);
	paper1.velocityX = -3
	
	dus = new Dust(600,650,200,20);
	dus1 = new Dust(710,590,20,100);
    dus2 = new Dust(490,590,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  paper1.display();
  dus.display();
  dus1.display();
  dus2.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:705,y:705});

	}

}



