var boy, boyImg
var santa, santaImg

function preload(){
boyImg = loadAnimation("boy1.png","boy2.png", "boy3.png")
santaImg = loadAnimation("santa1.png","santa2.png", "santa3.png")
bg = loadImage("bgforsantagame.jpg")
}

function setup(){
    canvas =  createCanvas(1200,600)
   ground = createSprite(600,550,2400,10)
    boy = createSprite(200,480,50,50)
    boy.addAnimation("boy",boyImg)
    boy.scale = 0.3

    santa = createSprite(900,470,50,50)
    santa.addAnimation("santa", santaImg)
    santa.scale = 0.3
    ground.velocityX = -4
    ground.x = ground.width/2
    ground.visible = false
}

function draw(){
    background(bg)
    textSize(25)
    text(mouseX + "x" + mouseY + "y",mouseX -10, mouseY)
drawSprites();

if(keyDown("space")){
    boy.velocityY = -10
}

boy.velocityY = boy.velocityY + 0.8
if (ground.x<0){
    ground.x = ground.width/2
}

boy.collide (ground)
}

