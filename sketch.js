const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];



var backgroundImg,ground;
var div1,div2,div3,div4,div5,div6,div7,div8,div9,div10;


function preload() {
  backgroundImg = loadImage("sprites/space.png");
}

function setup() {

  createCanvas(700,700);
  engine = Engine.create();
    world = engine.world;

for (var j = 40; j<=width; j=j+50 )
{

plinkos.push (new Plinko (j,75));


} 

for (var j = 15; j<=width-10; j=j+50){

plinkos.push (new Plinko (j,175))


}


for (var j = 40; j<=width; j=j+50 )
{

plinkos.push (new Plinko (j,275));


} 


for (var j = 15; j<=width-10; j=j+50){

  plinkos.push (new Plinko (j,375))
  
  
  }


  
   

     ground = new Ground(350,690,700,20);
     div1 = new Divide(615,600,5,300)
     div2 = new Divide(535,600,5,300)
     div3 = new Divide(455,600,5,300)
     div4 = new Divide(375,600,5,300)
     div5 = new Divide(295,600,5,300)
     div6 = new Divide(695,350,10,800);
     div7 = new Divide(7,350,10,800);
     div8=  new Divide(215,600,5,300)
     div9=  new Divide(135,600,5,300)
     div10= new Divide(55,600,5,300)
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  
ground.display();


div1.display();
div2.display();
div3.display();
div4.display();
div5.display();

div6.display();
div7.display();
div9.display();
div10.display();
div8.display();

for (var j = 0; j<plinkos.length ; j++) {

  plinkos[j].display();


}

if(frameCount%60===0){
particles.push(new Particle(random(100,700),10,10))


}

for (var i = 0; i<particles.length ; i++) {

  particles[i].display();


}

  drawSprites();
}