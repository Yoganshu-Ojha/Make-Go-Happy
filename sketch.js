var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, collide;
var score = 0;
var background_image;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  background_image = loadImage("hello.png");
  collide = loadImage("sprite_0.png");
 
}



function setup() {
  
  createCanvas(900,450);
  
  monkey = createSprite(50,385,30,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,435,2000,40);
  ground.velocityX=-4;
  ground.shapeColor = "green";
  ground.x = ground.width / 2;
  
  obstacleGroup=new Group ();
  FoodGroup=new Group();
}


function draw() {
  background(background_image);
  
  if (ground.x<0) {
    ground.x=500; 
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  
  if( keyDown("space")&& monkey.y>height-70) {
   monkey.velocityY=-10; 
  }
  
  text("Score : "+score,10,10);
  
  if(monkey.isTouching(FoodGroup)) {
    score = score + 1;
  }
  
  if(monkey.isTouching(obstacleGroup)) {
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
  }
  
  Obstacles();
  
  bananas();
  
  drawSprites();

  
}

function Obstacles(){
  if(frameCount%220==0) {
   
  obstacle=createSprite(900,400,20,60);
  obstacle.velocityX=-3;
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.15;
  console.log(obstacle.x);
  obstacle.setCollider("rectangle",0,0,360,360);
  obstacle.debug=true;
  obstacleGroup.setliftimeEach = 380;  
  obstacle.changeImage()  
    
  obstacle.velocityX = obstacle.velocityX+ (-1);  
    
    obstacleGroup.add(obstacle);
  
  }
}

function bananas(){
  if(frameCount%220==0) {
   
  banana=createSprite(900,obstacle.y-100,20,60);
  banana.velocityX=-3;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  console.log(obstacle.x);
  banana.setCollider("rectangle",0,0,90,90);
  banana.debug=true;
    
  banana.velocityX = obstacle.velocityX;  
    
    FoodGroup.add(banana);
  
  }
}