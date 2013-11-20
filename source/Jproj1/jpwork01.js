
var c = document.getElementsByClassName("pigeon");
var x = 0
var y = 15
  
window.onkeydown = function(e) {
    if(e.keyCode == 37) { // up
      x= x-10
     c[0].style.left = x + 'px';
    }
  if(e.keyCode == 39) { // up
      x= x+10
     c[0].style.left = x + 'px';
    }
    if(e.keyCode == 40) { // up
      y = y - 10
     c[0].style.bottom = y + 'px';
    }
   if(e.keyCode == 38) { // up
      y = y + 10
     c[0].style.bottom = y + 'px';
    }
}

