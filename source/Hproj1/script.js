var box;

var init = function() {
    box = document.querySelector('#box');
    box.x = 0;
    box.y = 50;
    box.style['left'] = box.x + 'px';  
    box.style['top'] = box.y + 'px';

};

window.onload = function(e) {
    init();    
};

window.onkeydown = function(e) {
    if(e.keyCode == 38) { // up
        box.y = box.y - 10;  
        box.style['top'] = box.y + 'px';
    }
    else if(e.keyCode == 40) { //down
        box.y = box.y + 10;  
        box.style['top'] = box.y + 'px';
    }   
};

window.onmousemove = function(e) {
    box.y = e.pageY;
    box.style['top'] = box.y + - 10 +'px';
};