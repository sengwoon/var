function addImg(fileName){
 	var img = new Image();
	img.src = fileName;
	img.addEventListener("load", loadChck, false);
	return img;
};

function loadChck(){
	countLoaded ++;
	LoadState();
	if( countLoaded==(totalResource) ){
		LoadState();
		gameInit();
	}
};