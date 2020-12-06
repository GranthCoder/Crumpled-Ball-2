
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,paperImg,bgImg,binImg,DB;

function preload()
{
	paperImg = loadImage("paper.png");
	bgImg = loadImage("Background.PNG");
	binImg = loadImage("DustbinImg.png");
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;


	ground = Bodies.rectangle(500,550,1000,20,{isStatic:true});
	World.add(world,ground);

	DB = Bodies.rectangle(775,340,175,175,{isStatic:true});
	World.add(world,DB);

	var paper_options = {
		isStatic: false,
		restitution:0.3,
		friction: 0.5,
		density: 0.3
	}
	paper = Bodies.circle(100,300,60,paper_options);
	World.add(world,paper);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  Engine.update(engine);

  image(binImg,775,370,175,175);


  push();
  fill(128,128,128)
  rect(ground.position.x,ground.position.y,1000,20);
  pop();

  image(paperImg,paper.position.x,paper.position.y,70,70);  

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper,paper.position,{x:125,y:-125});
	  };
}



