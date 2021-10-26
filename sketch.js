var fred,ground;
var fredCorrendo,groundSe;
var parede1, parede2;
function preload(){
  //imagens pré-carregadas
  fredCorrendo.loadAnimation("Runner-1.png","Runner-2.png");
  groundSe.loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  
  fred = createSprite(50,160,20,50);
  fred.addAnimation(fredCorrendo);
  fred.scale = 0.5;

  ground = createSprites(130,200);
  ground.addImage(groundSe);
  ground.velocityY = -5;
  ground.scale=0.3;

  parede1 = createSprites(20,400,20,400);
  parede2 = createSprites(380,400,20,400);
}

function draw() {
  background(0);
  
  ground.velocityY = -3;
  console.log(fred.x);

  if(keyIsDown(left)){
    fred.x = fred.x - 20;
  }
  if(keyIsDown(right)){
    fred.x = fred.x + 20;
  }
  if(ground.y > 400){
    ground.y = height/2
  }

  fred.colide(parede1);
  fred.colide(parede2);

  drawSprites();
}
