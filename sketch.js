var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup;
var obstacleGroup;
var score;

function preload()
  {

    //loading animation for monkey
    monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
    
      //load images
      bananaImage = loadImage("banana.png");
      obstacleImage = loadImage("obstacle.png");

  }

function setup() 
  {

      //creating monkey sprite
      monkey = createSprite(80,320,20,20);
      monkey.addAnimation("monkey_moving",monkey_running);
      monkey.scale = 0.1;

      //creating ground
      ground = createSprite(400,350,800,10);
      ground.velocityX = -4;
      console.log(ground.x);

      //creating groups
      obstacleGroup = createGroup();
      foodGroup = createGroup();

      score = 0;

  }


function draw() 
  {
    background(250)

      //looping of ground
      if (ground.x === 0)
        {
          ground.x = 400;
        }
      
      //making the monkey collide with ground
      monkey.collide(ground);

      //survival time
      score = score + Math.round(getFrameRate()/60);

      //jumping of monkey when pressing space
      if (keyDown("space") && monkey.y >= 120)
        {
          monkey.velocityY = -12;
          monkey.velocityY = monkey.velocityY + 0.8;
        }

      //adding gravity
      monkey.velocityY = monkey.velocityY + 0.5;

      //displaying survival time
      text("Survival time : "+ score,150,30);

      //calling of obstacles
      spwanobstacle()

      //calling of banana
      spwanfruits()

      drawSprites();

  }

//creating functions
function spwanobstacle()
  {
    if (frameCount % 200 === 0)
      {
        obstacle = createSprite(400,310,20,20);
        obstacle.addImage(obstacleImage);
        obstacle.scale = 0.2;      
        obstacle.velocityX = -4;
        obstacleGroup.add(obstacle);
      }
  }

function spwanfruits()
  {
    if (frameCount % 80 === 0)
      {
        banana = createSprite(400,random(120,200),20,20);
        banana.addImage(bananaImage);
        banana.scale = 0.1;
        banana.velocityX = -4;
        foodGroup.add(banana);

      }
  }