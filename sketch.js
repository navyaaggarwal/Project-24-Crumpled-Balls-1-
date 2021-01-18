
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin0;
var ball0;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(238, 255, 0)
	
	ball0 = new ball(300,300);
	dustbin0 = new dustbin(400,300);


	//boxPosition=width/2+180;
	//boxY=610;
	 
	//boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	//boxleftSprite.shapeColor=color("white"); 
	//boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	 //World.add(world, boxLeftBody);

	  //boxBase=createSprite(boxPosition+100, boxY+40, 200,20); 
	  //boxBase.shapeColor=color("white"); 
	  //boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	   //World.add(world, boxBottomBody); 

	   //boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
		//boxrightSprite.shapeColor=color("white");
		 //boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
		  //World.add(world, boxRightBody);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  
  ball0.display();
  dustbin0.display();
  drawSprites();
 
}

function keyPressed () {

	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ballObject.body, ballObject.body.position, {x: 85, y: -85});
	}


}

