var cell = [];
var stack = [];
// var sudoku = [0,0,3,0,2,0,6,0,0,
//               9,0,0,3,0,5,0,0,1,
//               0,0,1,8,0,6,4,0,0,
//               0,0,8,1,0,2,9,0,0,
//               7,0,0,0,0,0,0,0,8,
//               0,0,6,7,0,8,2,0,0,
//               0,0,2,6,0,9,5,0,9,
//               8,0,0,2,0,3,0,0,9,
//               0,0,5,0,1,0,3,0,0];


var sudoku = [0,0,0,2,6,0,7,0,1,
              6,8,0,0,7,0,0,9,0,
              1,9,0,0,0,4,5,0,0,
              8,2,0,1,0,0,0,4,0,
              0,0,4,6,0,2,9,0,0,
              0,5,0,0,0,3,0,2,8,
              0,0,9,3,0,0,0,7,4,
              0,4,0,0,5,0,0,3,6,
              7,0,3,0,1,8,0,0,0];

var current;
var number = 1;    



function setup() {
  createCanvas(450, 450);
  var a=0;
  var b=0;
  for(var i=0; i<81;i++) {
    if(i%9 ==0 && i!=0) {
          b += 50;
          a =0;
    }
    cell[i] = new Cell(a, b, i , sudoku[i]);
    a+=50;
  }
  current = cell[0];
}
//
function draw() {
  background(51);
  for(var i=0; i<81;i++) {
    cell[i].show();
  }
  
  
  if(current.num == 0) {
    if(!sameColumn(current.i, number) && !sameRow(current.i, number) && !sameSquare(current.i, number) && number<10) {
      current.num = number;
      stack.push(current);
      number = 0;
      current = cell[current.i+1];
    } else {
      if(number > 8) {
        current.num = 0;
        current = stack.pop();
        number = current.num;
        current.num = 0;
      }
    }
  } else {
      current = cell[current.i+1];
      number =0;
  }
  number++;
}


function Cell(a,b, i, num) {
  this.a = a;
  this.b = b;
  this.i = i;
  this.num = num;
  
  this.show = function() {
    noFill();
    
    //
    beginShape();
    strokeWeight(5);
    stroke(255);
     line(0,0,0,450);
     line(0,0,450,0);
     line(0,450,450,450);
     line(450,0,450,450);
     line(0,150,450,150);
     line(150,0,150,450);
     line(0,300,450,300);
     line(300,0,300,450);
//     vertex(0,0);
//     vertex(0,150);
//     vertex(150,150);
//     vertex(150,0);
    
    endShape();
    //rect(this.a,this.b+150,150,50);
    //
    stroke(255);
    strokeWeight(1);
    noFill();
    rect(this.a,this.b,50,50);
    fill(255);
    stroke(255);
    
    textSize(32);
    if(this.num == 0) {
    text("", a+15, b+35);
    }
    else {
    text(this.num, a+15, b+35);
    }
    
  }
  
}
