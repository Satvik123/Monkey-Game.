
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var surviTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
  monkey=createSprite(80,315);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(250,348,1000,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
 
  foodGroup=new Group(); 
  obstacleGroup=new Group();
  
  survivalTime=0;
}


function draw() {
background("white");
if (ground.x<0) {
  ground.x=ground.width/2;
}
  
if (keyDown("space")&&monkey.y>312) {
  monkey.velocityY=-10;
}
  
 monkey.velocityY=monkey.velocityY+0.3;
 monkey.collide(ground);
 Banana();
 Obstacle();
 survivalTime=Math.round(frameCount/frameRate());
  console.log(frameRate());
 drawSprites();  
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time:  "+survivalTime,250,50);
}

function Banana () {
    if (frameCount%80==0) {
    banana=createSprite(400,Math.round(random(120,200)));
    banana.addImage(bananaImage)
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=190;
    foodGroup.add(banana);

    }
}

function Obstacle () {
   if (frameCount%200==0) {
  obstacle=createSprite(500,328);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-5;
  obstacle.scale=0.1;
  obstacleGroup.add(obstacle);
  }
}


