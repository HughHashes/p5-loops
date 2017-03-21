var img;
var vid;

function preload(){
  img = loadImage("budi.png");
}  

function setup(){
    createCanvas(600, 400);
    background(0);
    
    // image(img, 0, 0);
    // image(img, 0, 0, 100, 100);
    // image(img, 0, 0, 100, 100, 0, 0, 100, 100);
}

function draw(){
    strokeWeight(2);
    stroke(255);
    
    var circX = 100;
    var circColor = 250;
    
    var circX2 = 100;
    var circColor2 = 250;
    
    while(circX > 0){
      fill(circColor, 0, 200);
      ellipse(51,  51, circX, circX);
      circX -= 10;
      circColor -= 25;
      
      fill( 0, circColor2, 200);
      ellipse( 550,  50, circX2, circX2);
      circX2 -= 10;
      circColor2 -= 25;
    }
    
    var x = 13.5;
    while(x < 650){
      image(img, x, 125, 75, 75);
      x += 100;  
    }
    
    var x2 = 25;
    var y = 355;
    var change = -50;
    for(var x2 = 25; x2 < 650; x2 += 50){
        ellipse( x2,  y, 50, 50);
        y = y + change;
        if(y < 305){
            change = -change;
        }
        if(y > 350){
            change = -change;
        }
        
    }
    
}