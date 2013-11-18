var countLoaded = 0;
var totalResource = 17;

function addImg(fileName){
 	var img = new Image();
	img.src = fileName;
	img.addEventListener("load", loadChck, false);
	return img;
};

function loadChck(){
	countLoaded ++;
	if( countLoaded==(totalResource) ){
		gameInit();
	}
};