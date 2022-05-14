const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine, world;
let ball;
let ground;
let wall1, wall2;

let ball_options = {
	restitution: 0.3,
	isStatic: false,
	density: 1.2,
	friction: 0
}
let ground_options = {
	isStatic: true
}

function preload() {

}

function setup() {
	createCanvas(windowWidth, windowHeight);

	ellipseMode(RADIUS)
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width / 2, height - 5, width, 20, ground_options)
	World.add(world, ground)

	wall1 = Bodies.rectangle(width - 600, height - 70, 20, 300, ground_options)
	World.add(world, wall1)

	wall2 = Bodies.rectangle(width - 300, height - 70, 20, 300, ground_options)
	World.add(world, wall2)

	ball = Bodies.circle(200, 200, 20, ball_options)
	World.add(world, ball)

	Engine.run(engine);

	fill("yellow")
}

function draw() {
	background(0);

	Engine.update(engine)

	if (keyCode == UP_ARROW) {
		Body.applyForce(ball, { x: 0, y: 0 }, { x: 2, y: 0.1 })
	}

	rect(width / 2, height - 5, width, 20)
	rect(width - 600, height - 70, 20, 220)
	rect(width - 300, height - 70, 20, 300)

	drawSprites();

	ellipse(ball.position.x, ball.position.y, 20)
}
