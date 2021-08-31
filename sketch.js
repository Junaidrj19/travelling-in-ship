var ship , ship1
var  sea , sea1

function preload(){
ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea1 = loadImage("sea.png")
}

function setup(){
  createCanvas(600,500);

  sea = createSprite(600,300)
  sea.addImage(sea1)
  sea.scale=0.5
  sea.velocityX=-1

  ship = createSprite(50,200) 
  ship.addAnimation(ship1)
  edges=createEdgeSprites()

  ship.scale=0.25
  ship.x=90
  ship.y=300

}

function draw() {
  background(sea1);
  
  if(keydown("enter")){
    ship.velocityX = 5
  }
  if(keydown("left")){
    ship.velocityX = -5
  }
  if(keydown("space")){
    ship.velocityX = 0
  } 
  if(sea.x<0){
    sea.x=seaWidth/2
  } 

 


 drawSprites()
}