const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var box1, pig1, log1,pig2, log2, box3, box4, log3, log4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,570,70,70);
    box2 = new Box(900,570,70,70);
    box3= new Box(700,470,70,70 );
    box4= new Box (900, 470, 70,70);
    pig2= new Pig(800, 470);
    ground = new Ground(600,590,1200,20);
    log2= new Log(800, 400, 280, PI/2);

    log3= new Log(740, 350, 150, PI/7);
    log4= new Log(850,350,150, -PI/7 );



    pig1 = new Pig(800,570);
    log1= new Log(800,500,280, PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);


    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
}