const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  createSprite(200, 400, 50, 50);
}

function draw() {
  background(0,0,0);  
  //level two

  ground1 = new Ground(390,270,300,20)
 

  block8 = new block(330, 235, 30, 40);
    block9 = new block(360, 235, 30, 40);
    block10 = new block(390, 235, 30, 40);

    block11 = new block(420, 235, 30, 40);
    block12 = new block(450, 235, 30, 40);

    //level three
    block13 = new block(360, 195, 30, 40);

    block14 = new block(390, 195, 30, 40);
    block15 = new block(420, 195, 30, 40);
    //top
    block16 = new block(390, 155, 30, 40);


   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   
   ground1.display();

  drawSprites();

 

 
}