var fixedRect, movingRect;
var gameobject1,gameobject2;
function setup(){
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1=createSprite(400,800,80,30);
  gameobject2=createSprite(400,100,50,80);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameobject1.velocityY=-5;
  gameobject2.velocityY=+5;
  gameobject1.shapeColor="red";
  gameobject2.shapeColor="red"
}
function draw() {
  background(0,0,0);  
  
  bounceoff(gameobject1,gameobject2);
  drawSprites();
}
