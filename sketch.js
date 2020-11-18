var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50, 200, 50, 25);
 bullet.shapeColor = "white";
 wall=createSprite(1200,200,thickness, height/2);
 wall.shapeColor = (80, 80, 80);
 thickness=random(22,83)
 speed=random(223,321);
 weight=random(30,52);
}

function draw() {
  background(0,0,0);  
  bullet.velocityX = speed;

if(wall.x-bullet.x<(bullet.width+wall.width/2))
{
bullet.velocityX=0;

var damage = 0.5 * weight * speed* speed/22509;
if(deformation>180)
{
  bullet.shapeColor=color(255,0,0);
}
if(damage<10) 
{
  wall.shapeColor = ("red");

}
if(damage>100)
{
  wall.shapeColor=("green");
  
}
 }

  drawSprites();
}