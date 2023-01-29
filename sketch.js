var background3,ground;
var background2;
var ch1,ch2;
var ninja1,ninja2,ninja3,ninja4;
var zombies,zombie5;
var state = "normal";
var warriorSpriteSheet,warriorSpriteData;
var zombies30 = []
var attacking,ninja4
var weapon,weapon2,weaponGroup;
function preload(){
  background3 = loadImage("h.jpg");
  ninja1 = loadImage("hero.png");
  ninja3 = loadImage("attack.png");
  ninja4 = loadImage("images42.png")
  weapon = loadImage("2.png");

zombie = loadAnimation("zombie3.png","zombie4.png");

attacking = loadAnimation("images42.png","attack.png");
}


function setup() {
  createCanvas(1350,650);
  


  ninja2 = createSprite(90,400);
  ninja2.addImage('ninja1',ninja1);
    ninja2.debug = true;
  ninja2.addImage('ninja3',ninja3);
  ninja2.addAnimation("attacking",attacking);
  attacking.frameDelay = 80;
  ninja2.scale = 0.9;
 weaponGroup = new Group();

  
}

function draw() 
{
   background(30);
image(background3,0,0,width,height);


ground = createSprite(10,500,10000,10);
ground.visiblity = true;

spawnZombies();
console.log(state);
for(var i = 0;i < zombies30.length;i++){
if(ninja2.isTouching(zombies30[i])&& state == "fight"){
  zombies30.splice(i,1)
  i--
  console.log('ninja wins'+state)
}

if(ninja2.isTouching(zombies30[i])&& state == "normal"){
  console.log('zombie wins'+state)
}

}
createWeapon();

if(weaponGroup.isTouching(zombies30)){
  weaponGroup.pop;
  zombies30.pop;
}

  drawSprites();
}

function spawnZombies(){

if(frameCount % 150 === 0){
  zombie5 = createSprite(1200,380,60,20)
  zombie5.addAnimation("zombie5",zombie);
  zombie5.scale = 0.1;
  zombie5.velocityX = -2;
  zombies30.push(zombie5);

}

}


function keyPressed(){

  if(keyCode == 37){
    ninja2.changeAnimation('attacking');
    state = "fight";

    createWeapon();
  }
  }

function createWeapon(){

if(frameCount % 20 === 0){
  weapon2 = createSprite(200,400,10,10);
  weapon2.addImage('weapon',weapon);
  weapon2.velocityX = 30;
  weaponGroup.add(weapon2);
}


}

function keyReleased(){

  if(keyCode == 37){
    ninja2.changeAnimation('ninja1');
    state = "normal";
  }
}






















