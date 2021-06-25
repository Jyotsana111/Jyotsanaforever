var wall,thickness,bullet,speed,gun,weight;
var gunImage;


function setup(){
  createCanvas(1600,400)
  gun = createSprite(50,height/2,40,10)
  gun.shapeColor = "black"
  gun.addImage(Gunshotgame.png)

  bullet = createSprite(50,height/2,20,20)
  bullet.shapeColor = "black";
  bullet.velocityX = random(223,321);

  thickness = random(22,83)
  weight = random(30,52)

  wall = createSprite(1200,200,thickness,height/2)

}

function draw(){
background("lightgreen")

if(bullet.isTouching(wall)){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness/thickness/thickness)

  if(damage>10){
    wall.shapeColor = green;
  }
  if(damage<10){
    wall.shapeColor = red;
  }
}


drawSprites();
}

function hascollided(lbullet,lwall){
  bulletRightEdge  = lbullet.x-lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }
   return false;
  
}