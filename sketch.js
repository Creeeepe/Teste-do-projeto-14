var bow, arrow, scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;
var balloons;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  // carregue a imagem do balão verde
  green_balloonImage = loadImage("green_balloon0.png");
  // carregue a imagem do balão rosa
  pink_balloonImage = loadImage("pink_balloon0.png");
  // carregue a imagem do balão azul
  blue_balloonImage = loadImage("blue_balloon0.png");

}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

   score = 0    
}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
    
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -6;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}
function createBalloons(){
  if (frameCount % 60 === 0) {
    balloons = createSprite(200,200,40,10);
    balloons.velocityX = 4;
    var rand;
    rand = Math.round(random(1,250));
    switch(rand){
    case 1: balloons.addImage(red_balloonImage);
  break;
    case 2: balloons.addImage(blue_balloonImage);
  break;
    case 3: balloons.addImage(green_balloonImage);
  break;
    case 4: balloons.addImage(pink_balloonImage);
  break;
  default: break;
  }
  balloons.scale = 0.4;
  balloons.lifetime = 150;

  scene.depth = balloons.depth;
  balloons.depth = balloons.depth + 1;
  }
}

