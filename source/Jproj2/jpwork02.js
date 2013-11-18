var c, g, mDown;
var btClear;
var btRed;
var btGreen;
var btBlue;
var btRGBA
var slider
var sliderlabel
var test

var init = function() {
  c = document.querySelector('#c');
  g = c.getContext('2d');
  btClear = document.querySelector('#clear');
  btRed = document.querySelector('#red');
  btGreen = document.querySelector('#green');
  btBlue = document.querySelector('#blue');
  slider  = document.querySelector('#slider-input')
  sliderlabel = document.querySelector('#slider-label')
  c.width = 200;
  c.height = 200;
 
  btClear.onclick = function() {
    g.clearRect(0, 0, c.width, c.height);
  };

  btRed.onclick = function() {
  btRGBA =  'rgba(255, 0, 0, 0.1)';
  };
  btGreen.onclick = function() {
  btRGBA =  'rgba(0, 255 , 0, 0.1)';
  };
   btBlue.onclick = function() {
  btRGBA =  'rgba(0, 0, 255, 0.1)';
  };
  
  slider.change = function() {
    var val =  slider.val();
    test = Math.round( val * 10 ) / 10;
};
};


window.onload = function() {
  init();
};

window.onmousedown = function(e) {
  mDown = true;
};

window.onmouseup = function(e) {
  mDown = false;
};


window.onmousemove = function(e) {
  if( mDown == true ) {
    g.fillStyle = btRGBA
    g.beginPath();
      g.arc(e.pageX, e.pageY, 10, 0, Math.PI * 2);
    g.fill();
  };
};