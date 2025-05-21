let printer;
let animation = 0;
let add = true;
let maxHeight;
let imgWidth;
let imgHeight;
function setup() {
createCanvas(windowWidth, windowHeight);
printer = loadImage("data/drukara.png");
imageMode(CENTER);
textSize(windowWidth / 40);
textAlign(CENTER);
}
function draw() {
background(0);
if(add) {
animation+=2;
}
else {
animation-=2;
}
if(animation > 99) {
add = false;
}
if(animation < 1) {
add = true;
}
imgWidth = map(animation, 0, 100, width/3, width/2);
imgHeight = map(map(animation, 0, 100, width/3, width/2), 0, printer.width, 0, printer.height)
image(printer, width/2, height/3, imgWidth, imgHeight);
fill(0, 255, 100);
text("Kliknij w DRUKARE 3D.", width/2, height/1.5);
}

function touchStarted() {
if(mouseY > (height/3) - (imgHeight/2) && mouseY < (height/3) + (imgHeight/2) && mouseX > width/2 - imgWidth/2 && mouseX < width/2 + imgWidth/2 ) {
window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}
return false;
}

function mousePressed() {
if(mouseY > (height/3) - (imgHeight/2) && mouseY < (height/3) + (imgHeight/2) && mouseX > width/2 - imgWidth/2 && mouseX < width/2 + imgWidth/2 ) {
window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
while(true) {
alert("womp womp");
}
}
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
