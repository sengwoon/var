//윈도우가 시작되면 일단 load 함수를 실행
window.addEventListener("load", Load, false);
window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", onkeyup, false);
//이미지 변수 전역으로 선언
var imgMap;
var imgPlayerFront, imgPlayerRight, imgPlayerLeft;
var imgBall, imgBallRemain;
var sprItemT;
var imgItemP, imgItemB;
var imgItemGet;
var imgEnemy;
var imgShot, imgBlast1, imgBlast2;
var imgWarn, imgObstacle;

var theCanvas, Context;
var LOOP, FPS;
var state;
var keyEnter = false;
var keySpace = false;
var keyQ = false;
var keyUp = false;
var keyDown = false;
var keyLeft = false;
var keyRight = false;

var soundArr = new Array();
var bgmReady = new Audio();
bgmReady.src = "sound/bgm_ready.mp3";
//document.body.appendChild(bgmReady);
var bgmPlay = new Audio();
bgmPlay.src = "sound/bgm_play.mp3";
//document.body.appendChild(bgmPlay);
var bgmEnd = new Audio();
bgmEnd.src = "sound/bgm_end.mp3";

//사운드 객체에 효과음 추가
function addSound(soundname){
	var soundMusic = new Audio();
	soundMusic.src = "sound/"+soundname+".mp3";
	document.body.appendChild(soundMusic);
	soundArr.push( {name:soundname, sound:soundMusic, isPlaying:false} );
}
//효과음 재생 및 제거
function soundPlay(){
	for(var i=0; i<soundArr.length; i++){
		if(soundArr[i].name == "fire"){
			if(soundArr[i].isPlaying == false){
				soundArr[i].sound.play();
				soundArr[i].sound.volume = 0.5;
				soundArr[i].isPlaying = true;
				continue;
			}
		}
	}
	for(var i=0; i<soundArr.length; i++){
		if(soundArr[i].name == "hit"){
			if(soundArr[i].isPlaying == false){
				soundArr[i].sound.play();
				soundArr[i].sound.volume = 1;
				soundArr[i].isPlaying = true;
				continue;
			}
		}
	}
	for(var i=0; i<soundArr.length; i++){
		if(soundArr[i].name == "explode"){
			if(soundArr[i].isPlaying == false){
				soundArr[i].sound.play();
				soundArr[i].sound.volume = 1;
				soundArr[i].isPlaying = true;
				continue;
			}
		}
	}
	for(var i=0; i<soundArr.length; i++){
		if(soundArr[i].name == "bomb"){
			if(soundArr[i].isPlaying == false){
				soundArr[i].sound.play();
				soundArr[i].sound.volume = 1;
				soundArr[i].isPlaying = true;
				continue;
			}
		}
	}
	for(var i=0; i<soundArr.length; i++){
		if(soundArr[i].name == "item"){
			if(soundArr[i].isPlaying == false){
				soundArr[i].sound.play();
				soundArr[i].sound.volume = 1;
				soundArr[i].isPlaying = true;
				continue;
			}
		}
	}
	for(var i=0; i<soundArr.length; i++){
		if(soundArr[i].name == "warning"){
			if(soundArr[i].isPlaying == false){
				soundArr[i].sound.play();
				soundArr[i].sound.volume = 1;
				soundArr[i].isPlaying = true;
				continue;
			}
		}
	}
	//재생 끝난 사운드 객체 제거
	for(var i=0; i<soundArr.length; i++){
		if(soundArr[i].sound.ended){
			soundArr.splice(i, 1);
			continue;
		}
	}
}
//정지된 배경음 배열 제거
function BGM(){
	for(var i=0; i<soundArr.length; i++){
		if(soundArr[i].sound.paused){
			soundArr.splice(i, 1);
			continue;
		}
	}
}
function Load(){
	imgMap = addImg("img/map.jpg");
	imgPlayerFront = addImg("img/sparrowsprit.png");
	imgPlayerRight = addImg("img/sparrowspritRturn.png");
	imgPlayerLeft = addImg("img/sparrowspritLturn.png");
	imgPlayerSub = addImg("img/player_sub.png");
	imgBall = addImg("img/player_ball.png");
	imgSubBall = addImg("img/player_subball.png");
	imgBallRemain = addImg("img/player_ball_remain.png");
	sprItemS = addImg("img/item_style.png");
	imgItemP = addImg("img/item_power.png");
	imgItemB = addImg("img/item_bomb.png");
	imgItemGet = addImg("img/item_get.png");
	imgEnemy = addImg("img/pigeon01sprit.png");
	imgShot = addImg("img/shot.png");
	sprBlast = addImg("img/bloodeffect.png");
	imgWarn = addImg("img/npc_obstacle_warn.png");
	imgObstacle = addImg("img/npc_obstacle.png");
}

function gameInit(){
	document.title = "V.A.R. Bird";
	theCanvas = document.getElementById("GameCanvas");
	Context = theCanvas.getContext("2d");
	
	FPS = 60;
	state = new ReadyState();
	state.Init();
	//루핑걸어줌
	LOOP = setInterval( function(){
		soundPlay();
		BGM();
		Render();
		Update();
	}, 1000/FPS);

}

function ChangeState(next){
	state = next;
	//각 스테이지로 전환되는 처음 1회만 실행됨.
	state.Init();	
}
//현재 state 함수에 불려있는 상태의 렌더링 부분을 루핑에 포함!
function Render(){
	state.Render();
}
//현재 state 함수에 불려있는 상태의 업데이트 부분을 루핑에 포함!
function Update(){
	state.Update();
}

function onkeydown(e){
	if(e.keyCode==13){
		keyEnter = true;
	}
	if(e.keyCode == 37){
		keyLeft=true;
	}
	if(e.keyCode == 39){
		keyRight=true;
	}
	if(e.keyCode == 38){
		keyUp=true;
	}
	if(e.keyCode == 40){
		keyDown=true;
	}
	if(e.keyCode == 32){
		keySpace=true;
	}
	if(e.keyCode==81){
		keyQ=true;
	}
}
function onkeyup(e){
	if(e.keyCode==13){
		keyEnter = false;
	}
	if(e.keyCode == 37){
		keyLeft=false;
	}
	if(e.keyCode == 39){
		keyRight=false;
	}
	if(e.keyCode == 38){
		keyUp=false;
	}
	if(e.keyCode == 40){
		keyDown=false;
	}
	if(e.keyCode == 32){
		keySpace=false;
	}
	if(e.keyCode==81){
		keyQ=false;
	}
}