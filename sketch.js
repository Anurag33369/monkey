var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground, invisibleGround;
var PLAY, END;
var gameState;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,500);
 
 monkey = createSprite(80,305,20,20);
 monkey.addAnimation("Moving", monkey_running);
 monkey.scale = 0.1;
 
 ground = createSprite(400,350,900,30);
 ground.velocityX = -3;
  
  score = 0;
  
 FoodGroup = createGroup();
 obstacleGroup = createGroup();
}


function draw() {
background(225);

ground.x = ground.width/3;
console.log(ground.x);

monkey.collide(ground);
monkey.velocityY = monkey.velocityY + 2.5;
  
if(keyDown("space") && monkey.y >= 250) {
  monkey.velocityY = -23.5;
}
  
score = score + Math.round((frameCount + 10)/130);

stroke("black");
fill("black");
textSize(20);
text("Score:  "+ score, 200, 50);

Obstacles();  
Banana(); 
drawSprites();  
}

function Obstacles() {
  
if(frameCount % 300 === 0) {
  
  obstacle = createSprite(300,315,20,20);
  obstacle.lifetime = 300;
  obstacle.scale = 0.1;
  obstacle.velocityX = -4;
  
  obstacle.addImage("hmm", obstacleImage);
  obstacle.x = random(150,500);
  obstacleGroup.add(obstacle);
  
  
  }    
}


function Banana() {
  
if(frameCount % 70 === 0) {

banana = createSprite(550,350,20,20);
banana.addImage("hmm", bananaImage);
banana.scale = 0.1;
banana.y = random(120,200);
banana.velocityX = -4;
  
banana.lifetime = 300;
FoodGroup.add(banana);
  
  }  
}

