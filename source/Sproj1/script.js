var canvas, ctx;
var mouseX, mouseY, mDown;
var tool=1;
var sub = new Array(6);
var btBrush, btSize, btColor, btAlpha, btErase;
var btRect, btEllipse, btX, btY, btR, btG, btB, btA, btEraser, btClear;
var style = "ellipse";
var sizeX=10;
var sizeY=10;
var r=0;
var g=0;
var b=0;
var a=0.5;
var infoBrush="Ellipse";

window.onload = function() {
  init();
};
var init = function() {
  canvas = document.querySelector('#c');
  ctx = canvas.getContext('2d');
  
  //툴박스 선택
  btBrush = document.querySelector('#brush');
  btSize = document.querySelector('#size');
  btColor = document.querySelector('#color');
  btAlpha = document.querySelector('#alpha');
  btErase = document.querySelector('#erase');
  //서브박스 선택
  btRect = document.querySelector('#rect');
  btEllipse = document.querySelector('#ellipse');
  btX = document.querySelector('#sizeX');
  btY = document.querySelector('#sizeY');
  btR = document.querySelector('#colorR');
  btG = document.querySelector('#colorG');
  btB = document.querySelector('#colorB');
  btA = document.querySelector('#a');
  btEraser = document.querySelector('#eraser');
  btClear = document.querySelector('#clear');
  for(var i=0; i<6; i++){
    sub[i] = document.querySelector('#subbox'+i);
  }
  
  canvas.width = 450;
  canvas.height = 300;
  
  var loop = setInterval(function(){render();update();}, 1000/60);
};

var render = function() {
  //브러시 설정
  if( mDown ) {
    ctx.fillStyle = 'rgba('+r+', '+g+', '+b+', '+a+')';
    if(mouseX>0 && mouseY>0 && mouseX<300 && mouseY<300){
      if(style=="ellipse"){
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, sizeX/2, 10, 0, Math.PI * 2);
        ctx.fill();
      } else if(style=="rect"){
        ctx.fillRect(mouseX-sizeX/2, mouseY-sizeY/2, sizeX, sizeY);
      }
    }
  }
  ctx.fillStyle="#eeeeee";
  ctx.fillRect(300, 0, 150, 300);
  ctx.fillStyle="#ffffff";
  ctx.fillRect(302, 27, 146, 146);
  ctx.fillStyle="#000000";
  ctx.textBaseline="top";
  ctx.font="14px Verdana";
  ctx.strokeStyle="#000000";
  ctx.lineWidth = 2;
  ctx.strokeRect(302, 27, 146, 146);
  ctx.fillText("brush", 304, 0);
  ctx.fillStyle = 'rgba('+r+', '+g+', '+b+', '+a+')';
  if(style=="ellipse"){
    ctx.beginPath();
    ctx.arc(375, 100, sizeX/2, 10, 0, Math.PI * 2);
    ctx.fill();
  } else if(style=="rect"){
    ctx.fillRect(375-sizeX/2, 100-sizeY/2, sizeX, sizeY);
  }
  if(r==255&&g==255&&b==255){
    ctx.lineWidth = 1;
    if(style=="ellipse"){
      ctx.beginPath();
      ctx.arc(375, 100, sizeX/2, 10, 0, Math.PI * 2);
      ctx.stroke();
    } else if(style=="rect"){
      ctx.strokeRect(375-sizeX/2, 100-sizeY/2, sizeX, sizeY);
    }
  }
  
};

var update = function() {
  //서브박스 선택 
  btBrush.onclick = function() {
    sub[0].style.display="none";
    sub[1].style.display="block";
    sub[2].style.display="none";
    sub[3].style.display="none";
    sub[4].style.display="none";
    sub[5].style.display="none";
  };
  btSize.onclick = function() {
    sub[0].style.display="none";
    sub[1].style.display="none";
    sub[2].style.display="block";
    sub[3].style.display="none";
    sub[4].style.display="none";
    sub[5].style.display="none";
  };
  btColor.onclick = function() {
    sub[0].style.display="none";
    sub[1].style.display="none";
    sub[2].style.display="none";
    sub[3].style.display="block";
    sub[4].style.display="none";
    sub[5].style.display="none";
  };
  btAlpha.onclick = function() {
    sub[0].style.display="none";
    sub[1].style.display="none";
    sub[2].style.display="none";
    sub[3].style.display="none";
    sub[4].style.display="block";
    sub[5].style.display="none";
  };
  btErase.onclick = function() {
    sub[0].style.display="none";
    sub[1].style.display="none";
    sub[2].style.display="none";
    sub[3].style.display="none";
    sub[4].style.display="none";
    sub[5].style.display="block";
  };
  //툴박스1: 브러시 스타일
  btRect.onclick = function() {
    style = "rect";
    infoBrush="Rect";
  };
  btEllipse.onclick = function() {
    style = "ellipse";
    infoBrush="Ellipse";
  };
  //툴박스2: 브러시 크기
  btX.onclick = function() {
    sizeX = mouseX;
  };
  btY.onclick = function() {
    sizeY = mouseX-152;
  };
  //툴박스3: 브러시 컬러
  btR.onclick = function() {
    r=Math.round((mouseX-1)/93*255);
  };
  btG.onclick = function() {
    g=Math.round((mouseX-102)/93*255);
  };
  btB.onclick = function() {
    b=Math.round((mouseX-203)/93*255);
  };
  //툴박스4: 알파값
  btA.onclick = function() {
    a=(mouseX-1)/299;
  };
  //툴박스5: 지우개
  btEraser.onclick = function() {
    r=255;
    g=255;
    b=255;
    a=1;
  };
  btClear.onclick = function() {
    ctx.fillStyle ="#ffffff";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
};

window.onmousedown = function(e) {
  mDown = true;
};
window.onmouseup = function(e) {
  mDown = false;
};
window.onmousemove = function(e) {
  mouseX=e.pageX;
  mouseY=e.pageY-50;  
};

