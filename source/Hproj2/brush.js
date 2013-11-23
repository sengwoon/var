var c;
var g;
var btWhite;
var btRed;
var btGreen ;
var btBlue;
var btClear1;
var btClear2;

var color = 'rgba(255, 255, 255, 0.1)';
var mDown; 

window.onmousedown = function(e) {
  mDown = true;
};

window.onmouseup = function(e) {
  mDown = false;
};

window.onmousemove = function(e) {
  if( mDown == true ) {
    g.fillStyle = color;
    g.beginPath();
    g.arc(e.pageX, e.pageY, 20, 0, Math.PI * 2);
    g.fill();
  }
};

window.onload = function(){
  c = document.querySelector('#c');
  g = c.getContext('2d');
  c.width = 600;
  c.height = 200;

  btWhite = document.querySelector('#white');
  btRed = document.querySelector('#red');
  btGreen = document.querySelector('#green');
  btBlue = document.querySelector('#blue');
  btClear1 = document.querySelector('#clear1');
  btClear2 = document.querySelector('#clear2');

  btClear1.onclick = function() {
    g.clearRect(0, 0, 300, c.height);
  };
  btClear2.onclick = function() {
    g.clearRect(300, 0, c.width, c.height);
  };
  btWhite.onclick = function() {
    color = 'rgba(255, 255, 255, 0.1)';
  };
  btRed.onclick = function() {
    color = 'rgba(255, 0, 0, 0.1)';
  };
  btGreen.onclick = function() {
    color = 'rgba(0, 255, 0, 0.1)';
  };
  btBlue.onclick = function() {
    color = 'rgba(0, 0, 255, 0.1)';
  };
}