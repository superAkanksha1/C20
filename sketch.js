var fixedRect , movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 80);
  fixedRect.shapeColor = "cyan";
  movingRect = createSprite(200, 200, 80, 30);
  movingRect.shapeColor = "cyan";
}

function draw() {
  background("darkblue");
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(movingRect.x - fixedRect.x === movingRect.width/2 + fixedRect.width/2
    || fixedRect.x - movingRect.x === movingRect.width/2 + fixedRect.width/2){
      fixedRect.shapeColor = "green";
       movingRect.shapeColor = "green"; }

  drawSprites();
}