var rua;
var player;
var PU1;
var PU2;
var ruaani;
var playerani;
var PU1ani;
var PU2ani;
function preload(){
  //imagens pré-carregadas
ruaani = loadImage("path.png");
playerani = loadAnimation("Runner-1.png","Runner-2.png");

}


function setup(){
  createCanvas(400,400);
  //crie sprite aqui
rua = createSprite(200,200,400,600);
rua.addImage("Rua",ruaani);
rua.scale = 1.33;
rua.velocityY = 5;

player = createSprite(200,350,10,10);
player.addAnimation("persona",playerani);
player.scale = 0.05;

}

function draw() {
  background(0);
drawSprites();
if(rua.y>400){
   rua.y = rua.height/8;
}
player.x = World.mouseX;
}
