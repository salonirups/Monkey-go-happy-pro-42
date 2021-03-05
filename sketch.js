
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, ObstacleGroup;
var score;
var ground;
var gameState
var END=1
var PLAY=0
var Background,background1;
function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");      
  Background = loadImage("jungle.jpg");
}



function setup() {
createCanvas(600,600);


ground=createSprite(300,550,600,10);

FoodGroup=new Group();
ObstacleGroup=new Group();
score=0;
  
 
  background1=createSprite(300,300,50,20);
  background1.addImage(Background)
  background1.x = background1.width /2;
  
  monkey=createSprite(100,510,30,20);
monkey.addAnimation("run",monkey_running);
monkey.scale=0.09;
  
}



  
function draw(){
  background("cyan"); 
  

  
monkey.collide(ground);  
  
if(keyDown("space")){
monkey.velocityY=-10; 
}
monkey.velocityY=monkey.velocityY+1;
spawnBanana();
spawnObstacles();

 

  
  background1.velocityX=-6;
 if (background1.x < 97){
      background1.x = background1.width/2;
    } 
 if(ObstacleGroup.isTouching(monkey)){
monkey.scale=0.09; 
}
 
if(FoodGroup.isTouching(monkey)){
 score=score+2;
FoodGroup.destroyEach();
}
switch(score)
{
  case 10: monkey.scale=0.12;
            break;
    case 20: monkey.scale=0.14;
    break;
    case 30: monkey.scale=0.16;
    break;
    case 40: monkey.scale=0.18;
    break;
    default: break; 
}
  



  
  drawSprites();

 stroke("white") ;
textSize(20);
fill("white")
text("SCORE!!:"+score,400,100);
 
 
  
  
}

   
 

function spawnBanana(){
if(frameCount% 80 === 0){
banana=createSprite(600,50,30,20);
banana.addImage(bananaImage);
banana.scale=0.15;
banana.y=Math.round(random(200,300));
banana.velocityX=-5;
FoodGroup.add(banana);
banana.lifetime=120;
}
}
  
function spawnObstacles(){
if(frameCount% 300 === 0){
obstacle=createSprite(600,500,30,20);
obstacle.addImage(obstacleImage);
obstacle.scale=0.3;
obstacle.velocityX=-5;
ObstacleGroup.add(obstacle);
obstacle.lifetime=120;
}
}






