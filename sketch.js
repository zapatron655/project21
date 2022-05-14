
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var xyz
var world
var ball 
var ground1
var ground2
var ground3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	xyz = Engine.create();
	world = xyz.world;


	//Create the Bodies Here.
	// creating ball 
	var ball_options={
		friction:1,
		restitution:0.2,
		density:0.5
	}


	ball=Bodies.circle(200,200,20,ball_options)
	World.add(world,ball)
	
	// creating Ground 

	ground1=new Ground(200,600,10000,40)
	ground2=new Ground(600,540,20,90)
	ground3=new Ground(770,400,20,400)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// running engine 
//	Engine.run(xyz);
	// closing engine 
}


function draw() {
  
  // creating background 
 
 		background(0)
 
// ending background 
	// updating engine 
	Engine.update(xyz)
	
	
	// declaring display 
		ground1.display()
		ground2.display()
		ground3.display()	
		
	
	
	// creating modes 
		rectMode(CENTER);
			ellipseMode(RADIUS)
  // ending modes 

  // telling postiton of ball
	ellipse(ball.position.x,ball.position.y,20,20)





  // creating draw sprites 
  drawSprites();
 
}


function keyPressed(){
if (keyCode===RIGHT_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:35,y:-35})
//body.applyForce(ball,{x:0,y:0},{x:0.8,y:0.4})
}
if (keyCode===LEFT_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:-35,y:35})

}

}
