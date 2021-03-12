var fixedRect, movingRect, edges;

function setup() {
  createCanvas(1200,800);
 
  fixedRect = createSprite(200,200,50,100);
  fixedRect.shapeColor = "Blue";
  movingRect =createSprite(900,200,100,50);
  movingRect.shapeColor = "Pink";

  fixedRect.velocityX = 5;
  movingRect.velocityX = -5
}

function draw() {
  background("Black");  

  edges = createEdgeSprites();

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2)
  {
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX *(-1);
  }

  if(fixedRect.isTouching(edges[0])|| fixedRect.isTouching(edges[1]))
  {
    fixedRect.velocityX = fixedRect.velocityX * (-1);

  }

  if(movingRect.isTouching(edges[0]) || movingRect.isTouching(edges[1]))
  {
    movingRect.velocityX = movingRect.velocityX * (-1);

  }

  drawSprites();
}