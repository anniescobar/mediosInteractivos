var x=0;
var y=0;
var x2=50;
var y2=50;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255);
  fill(0)
  for(var it=0; it<=350; it=it+50){
    //triangulos en linea por linea esquina inf. izqu. hacia arriba en orden
    triangle(x,400,50,400,50,350)
    triangle(x+it,350+it,x2+it,350+it,50+it,300+it);
    triangle(x+it,250+it,x+it,300+it,x2+it,250+it);
    triangle(x+it,200+it,x+it,250+it,x2+it,200+it);
    triangle(x+it,200+it,x2+it,200+it,x2+it,150+it);
    triangle(x+it,200+it,x2+it,200+it,x2+it,150+it);
    triangle(x+it,150+it,x2+it,150+it,x2+it,100+it);
    triangle(x+it,100+it,x+it,50+it,x2+it,y+50+it);
    triangle(x+it,y+it,x+it,y+it+50,x+it+50,y+it);
    triangle(50+it,y2+it,100+it,y2+it,100+it,y+it);
    triangle(100+it,y2+it,150+it,y2+it,150+it,y+it);
    triangle(150+it,y2+it,150+it,y+it,200+it,y+it);
    triangle(200+it,y2+it,200+it,y+it,250+it,y+it);
    triangle(250+it,y2+it,300+it,y2+it,300+it,y+it);
    triangle(300+it,y2+it,350+it,y2+it,350+it,y+it);
    triangle(350,y2,350,y,400,y);
  }
}