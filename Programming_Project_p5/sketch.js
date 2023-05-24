let flowerY = -400;
let eyeSize = 1;
let insideEye =1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  eyeSize = map(mouseX, 0,width, 1,2,1)
  insideEye = map(mouseY, 0,width,1,2,1)
   console.log(mouseX+','+ mouseY) 
  fill(158, 120, 84)//the fill of the pink background
background(235, 188, 207);//a pink bankground
  noStroke()
  ellipse(200,200,100,125);//a ellipse of a face 
  fill(252, 252, 252)//the color bronw for the face ellipse
  ellipse(180,180,eyeSize*20,eyeSize*30);//a ellipse for the eye 1
  fill(252, 252, 252)//the color white for the eye
  ellipse(220,180,eyeSize*20,eyeSize*30);//a ellipse for the eye 2
  fill(3, 3, 3)//the color black for the inside of the eye 1
  ellipse(180,180,eyeSize*3)//a ellipse for the inside of the eye 1
   fill(3, 3, 3)//the color black for the inside of the eye 2
   ellipse(220,180,eyeSize*3)//a ellipse for the inside of the eye 2
   arc(200, 225, 50, 20, 0, PI);//a arc for the smile
   fill(252, 206,insideEye*53)//the yellow fill for the petals 1
  ellipse(100,180 + flowerY,40,130);//a ellipse for a sunflower petals 1
  ellipse(350,100 + flowerY,40,130);//a ellipse for a sunflower petals 2
  ellipse(300,290 + flowerY,40,130);//a ellipse for a sunflower petals 3
  ellipse(100,390 + flowerY,40,130);//a ellipse for a sunflower petals 4
  ellipse(50,50 + flowerY,40,130);//a ellipse for a sunflower petals 5
  ellipse(50,270 + flowerY,40,130);//a ellipse for a sunflower petals 6
 ellipse(350,390+ flowerY,40,130);//a ellipse for a sunflower petals 7
 ellipse(50,270 + flowerY,40,130);//a ellipse for a sunflower petals 40
  flowerY +=4;
}