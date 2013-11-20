var ready;
function ReadyState(){
	this.frame = 0;
	ready = this;
}
ReadyState.prototype.Init = function (){
	soundArr.push( {name:"bgm_ready", sound:bgmReady, isPlaying:false} );
	for(var i=0; i<soundArr.length; i++){
		if(soundArr[i].name == "bgm_ready"){
			soundArr[i].sound.currentTime = 0;
			soundArr[i].sound.play();
			soundArr[i].sound.loop = true;
		}
		if(soundArr[i].name == "bgm_end"){
			soundArr[i].sound.pause();
		}
	}
};

ReadyState.prototype.Render = function (){
	Context.globalAlpha = 1;
	Context.drawImage(imgMap, 0, 0);
	Context.globalAlpha = 0.5;
	Context.fillStyle = "#000000";
	Context.fillRect(0, 0, theCanvas.width, theCanvas.height);
	Context.globalAlpha = 1;
	Context.fillStyle = "#ffffff";
	Context.textBaseline = "top";
	Context.font="20px Arial";
	Context.fillText("Ready", theCanvas.width/2, theCanvas.height/2);
	Context.fillText("ENTER : start / pause game", 100, 620);
	Context.fillText("SPACEBAR : shoot", 100, 650);
	Context.fillText("Q : blow up bomb", 100, 680);
};

ReadyState.prototype.Update = function (){

	this.frame += (1000/FPS);
	//종료상태에서 엔터누르면 준비상태를 스킵하는 것을 방지하기 위해 프레임 삽입
	if(keyEnter && this.frame>300){
		ChangeState(new GameState());
	}
};