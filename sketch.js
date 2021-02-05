

var catc

var fairy,fairyImg;
var starNight,starNImg;
var joySound;
var star,starImg;
function preload()
{
   //preload the images here
   fairyImg = loadImage("fairy.png");
   starNImg = loadImage("starnight.png");
   starImg  = loadImage("star.png")
   joySound = loadSound("JoyMusic.mp3");

   
}

function setup() {
 createCanvas(800, 750);
 
 starNight = createSprite(400,325,800,750)
 starNight.addImage("sta",starNImg);
 

 fairy = createSprite(400,550,50,50);
 fairy.addImage("fair",fairyImg);
 fairy.scale=0.15;


 star = createSprite(700,20,10,10);
 star.addImage("starr",starImg);
 star.scale=0.1;

 catc = createSprite(450,525,10,10);
 catc.visible=false;
 


}


function draw() {
  background("black");
  joySound.play();

 if(keyDown("left_arrow")){
   fairy.x=fairy.x-2;
   catc.x =catc.x-2;
 }
 if(keyDown("right_arrow")){
   fairy.x=fairy.x+2;
   catc.x =catc.x+2;
 }
 if(keyDown("down_arrow")){
    star.velocityY=2;
 }
 if(star.isTouching(fairy)){
    star.velocityY=0;
    star.x=catc.x;
    star.y=catc.y;
 }

  drawSprites();
}
