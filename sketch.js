
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  obstacleGroup=createGroup()
  bananaGroup=createGroup()
  
  score=0
  
}


function draw() {
  background(225)
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  spawnObstacles()
  spawnBanana()
  
 if(keyDown("space")) {
   monkey.velocityY=-12
 } 
  monkey.velocityY=monkey.velocityY+0.8
  
  
 if(bananaGroup.isTouching(monkey)) {
   bananaGroup.destroyEach()
 }
   monkey.collide(ground)
  
  drawSprites();
  fill("white")
  text("score:"+score,300,50);
  
fill("black")
textSize(20)
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+survivalTime,100,50)
 
}

function spawnObstacles(){
  if(frameCount % 150 === 0){
    
  var obstacle=createSprite(500,300,20,20)
   obstacle.addImage(obstacleImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacle.lifetime=400
   obstacleGroup.add(obstacle)
  }
}
 function spawnBanana(){
   if(frameCount % 160 === 0){
     banana=createSprite(600,100,40,10)
     banana.y=Math.round(random(250,300))
   banana.addImage(bananaImage)
   banana.scale=0.1
   banana.velocityX=-2
   banana.lifetime=300
   
  banana.depth=monkey.depth;
  monkey.depth=monkey.depth + 1
     
  bananaGroup.add(banana)
   }  
 }




