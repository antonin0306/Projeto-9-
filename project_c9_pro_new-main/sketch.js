var patoimage;

function setup() {
  createCanvas(400,400);
  background(51);
  
  
}

function preload() {
patoimage=createImg("patodancante.gif")

}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
patoimage.position(90,50)
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

if (keyIsDown(RIGHT_ARROW))
  {
    background("red");
  }
  

drawSprites();
}

