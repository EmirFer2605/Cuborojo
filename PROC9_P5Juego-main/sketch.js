var cuborojo
function setup() {
  createCanvas(400,400);
  cuborojo = createSprite(200,200,10,10)
  cuborojo.shapeColor = "red"
}

function draw() 
{
  background(30);
  if (keyIsDown (RIGHT_ARROW))
  {
  cuborojo.position.x = cuborojo.position.x + 2
  
}
if (keyIsDown (LEFT_ARROW))
  {
  cuborojo.position.x = cuborojo.position.x - 2
}
if (keyIsDown (UP_ARROW))
  {
  cuborojo.position.y = cuborojo.position.y - 2
  
}
if (keyIsDown (DOWN_ARROW))
  {
  cuborojo.position.y = cuborojo.position.y + 2
  
}
  drawSprites()
  
}




