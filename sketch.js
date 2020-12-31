var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
var car,wall;
var speed,weight;

function setup() { 
  createCanvas(1600, 400); 
  speed=random(55,90) 
  weight=random(400,1500) 
  
  car=createSprite(50, 200, 50,50); 
  car.velocityX = speed; 
  car.shapeColor=color(255); 
 
  wall=createSprite(1500,200, 60, height/2) 
  wall.shapeColor=color(80,80,80) 
  
  gameObject1 = createSprite(270,200,30,70);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(370,200,30,70);
  gameObject2.shapeColor = "blue";

  gameObject3 = createSprite(470,200,30,70);
  gameObject3.shapeColor = "blue";

  gameObject4 = createSprite(570,200,30,70);
  gameObject4.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameObject4)){

  
  
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }
 car.display();
 wall.display();
}


function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else {
  return false;
}
}