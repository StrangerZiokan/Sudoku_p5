function sameSquare(i, num) {
  var x = (i%9);
  var y= floor(i/9);
  
  i = i- (x%3);
  i = i - (y%3)*9;
  
  for(var k=i; k< i+3; k++) {
    if(cell[k].num == num) {
      return 1;
    }
  }
  for(var k = i+9; k< i+12; k++) {
    if(cell[k].num == num) {
      return 1;
    }
  }
  for(var k= i+18; k< i+21; k++) {
    if(cell[k].num == num) {
      return 1;
    }
  }
  return 0;
}


function sameRow(i, num) {
  i = floor(i/9) * 9;
  
  for(var k = i; k< i+9 ; k++) {
    if(cell[k].num == num) {
      return 1;
    }
  }
  return 0;
}

function sameColumn(i, num) {
  i = (i% 9);
  var n = i;
  
  for(var k = i; k< i+9; k++) {
    if(cell[n].num == num) {
      return 1;
    }
    n+=9;
  }
  return 0;
}
