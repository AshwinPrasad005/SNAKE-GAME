//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
var snake1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(600,600);

	engine = Engine.create();
	world = engine.world;

	snake1 = new Snake(300,300,25,25);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);

	// Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  snake1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == 38){
		snake1.y = snake1.y - 20;
	}
}



