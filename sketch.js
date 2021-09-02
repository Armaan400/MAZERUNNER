const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var world,engine
var wall1;


function preload() {
  
}

function setup() {
    
    createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;




    Engine.run(engine);
}

function draw() {
    background(0)
}