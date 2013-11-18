var game;
function GameState(){
	//객체 불러옴
	this.npc = new NPC();
	this.player = new Player();
	//게임 전체 제어
	this.gameTime = 0;
	this.score = 0;
	this.isOver = false;
	//배경 제어
	this.BGY = 5628;
	this.speed = 1;
	this.BGframe=1;
	//아이템 제어
	this.arrItem = new Array();
	this.itemFrame = 0;
	this.itemInterval = 6000; // 맨 첫 6초에 아이템 생성후 렌덤으로 바꿈
	this.itemGetFrame=0;
	this.itemGet = "none";
	//폭탄 제어
	this.intBomb = 3;
	this.flagBomb = false;
	this.bombFrame = 0;
	
	game = this;
}

GameState.prototype.Init = function (){
	soundArr.push( {name:"bgm_play", sound:bgmPlay, isPlaying:false} );
	for(var i=0; i<soundArr.length; i++){
		if(soundArr[i].name == "bgm_play"){
			if(soundArr[i].isPlaying==false){
				soundArr[i].sound.currentTime = 0;
			}
			soundArr[i].sound.play();
			soundArr[i].sound.loop = true;
			soundArr[i].sound.volume = 1;
			soundArr[i].isPlaying = true;
		}
		if(soundArr[i].name == "bgm_ready"){
			soundArr[i].sound.pause();
		}
	}
};

GameState.prototype.Render = function (){
	Context.clearRect(0, 0, theCanvas.width, theCanvas.height);
	Context.globalAlpha = 1;
	Context.drawImage(imgMap, 0, this.BGY, 760, 920, 0, 0, 760, 920);

	this.npc.Render();
	this.player.Render();

	//아이템 그리기
	for(var i=0; i<this.arrItem.length; i++){
		if(this.arrItem[i].type=="style")
			Context.drawImage(sprItemS, Math.floor(this.arrItem[i].frame)*70, 0, 70, 70, this.arrItem[i].x, this.arrItem[i].y, 70, 70);
		if(this.arrItem[i].type=="power")
			Context.drawImage(imgItemP, this.arrItem[i].x, this.arrItem[i].y);
		if(this.arrItem[i].type=="bomb" )
			Context.drawImage(imgItemB, this.arrItem[i].x, this.arrItem[i].y);
	}
	//폭탄 효과 그리기
	if(this.bombFrame>800 && this.bombFrame<3800){
		Context.globalAlpha = 0.6;
		Context.fillStyle = "#ffffff";
		Context.fillRect(0, 0, theCanvas.width, theCanvas.height);		
	}
	Context.globalAlpha = 1;
	//아이템 획득 이펙트 그리기
	if(this.itemGetFrame>0){
		Context.drawImage(imgItemGet, theCanvas.width/2-imgItemGet.width/2, theCanvas.height/2-imgItemGet.height/2);
		if(this.itemGet=="shotgun")
			Context.drawImage(sprItemS, 0, 0, 70, 70, theCanvas.width/2-35, theCanvas.height/2-35, 70, 70);
		else if(this.itemGet=="machinegun")
			Context.drawImage(sprItemS, 70, 0, 70, 70, theCanvas.width/2-35, theCanvas.height/2-35, 70, 70);
		else if(this.itemGet=="sub")
			Context.drawImage(sprItemS, 140, 0, 70, 70, theCanvas.width/2-35, theCanvas.height/2-35, 70, 70);
	}
	//남은 총알 수 그리기
	if(this.player.ballRemain > 0 ){
		if(this.player.ballType == "shotgun"){
			for(var i=0; i<this.player.ballRemain; i++){
				Context.drawImage(imgBallRemain, 30+i*imgBallRemain.width, theCanvas.height-100);
			}
		} else if(this.player.ballType == "machinegun"){
			for(var i=0; i<this.player.ballRemain; i+=10){
				Context.drawImage(imgBallRemain, 30+i*0.1*imgBallRemain.width, theCanvas.height-100);
			}
			for(var i=5; i<this.player.ballRemain; i+=10){
				Context.drawImage(imgBallRemain, 30+imgBallRemain.width/2+(i-5)*0.1*imgBallRemain.width, theCanvas.height+imgBallRemain.height-100);
			}
		}
	}

	//게임 진행 변수
	Context.fillStyle = "#ffffff";
	Context.textBaseline = "top";
	Context.font="20px Arial";
	Context.fillText("TIME : "+Math.floor(this.gameTime/1000), 10, 5);
	Context.fillText("Score : "+this.score, 10, 30);
	Context.fillText("Bomb : "+this.intBomb, 10, 875);
	Context.fillText("Weapon : LV"+this.player.ballLevel, 200, 875);
	if(this.player.flagSubLeft || this.player.flagSubRight)
		Context.fillText("Sub : LV"+this.player.subBallLevel, 400, 875);

	//게임 종료시 출력
	if(this.isOver){
		Context.globalAlpha = 0.6;
		Context.fillStyle = "#000000";
		Context.fillRect(0, 0, theCanvas.width, theCanvas.height);
		Context.globalAlpha = 1;
		Context.fillStyle = "#ffffff";
		Context.fillText("End", theCanvas.width/2, theCanvas.height/2);
		Context.fillText("Your score is "+this.score+"!!", theCanvas.width/2, theCanvas.height/2+20);
	}
};

GameState.prototype.Update = function (){	
	if(this.isOver){
	
		if(keyEnter){
			ChangeState(new ReadyState());
		}
	} else {
		
		this.gameTime += (1000/FPS);
		this.npc.Update();
		this.player.Update();
		//배경 반복
		this.BGY -= this.speed;
		if(this.BGY<0) this.BGY = 5628;
		//아이템 생성 / 아이템 분류 함수에서 다음 인터벌을 렌덤하게 정할 것
		this.itemFrame += (1000/FPS);
		if(this.itemFrame>=this.itemInterval){
			this.sortingItem();
			this.itemFrame = 0;
		}
		//아이템 이동 제어
		for(var i=0; i<this.arrItem.length; i++){
			this.arrItem[i].y += this.arrItem[i].speed;
			if(this.arrItem[i].type == "style"){
				this.arrItem[i].frame += 0.05;
				if( Math.floor(this.arrItem[i].frame)>=3)
					this.arrItem[i].frame = 0;
				this.arrItem[i].x += this.arrItem[i].speedX;
				if( this.arrItem[i].x<0 || this.arrItem[i].x>theCanvas.width-imgItemP.width )
					this.arrItem[i].speedX *= -1;
			}
			//충돌 박스 최신화
			this.arrItem[i].colBox = { left:this.arrItem[i].x, right:this.arrItem[i].x+imgItemP.width, top:this.arrItem[i].y, bottom:this.arrItem[i].y+imgItemP.height };
			if( this.arrItem[i].y>theCanvas.height ){
				this.arrItem.splice(i, 1);
				continue;
			}
		}
		//아이템 획득 이펙트 제어
		if(this.itemGetFrame>0){
			this.itemGetFrame += (1000/FPS);
			if(this.itemGetFrame >= 2500){
				this.itemGet = "none";
				this.itemGetFrame = 0;
			}
		}
		//폭탄 아이템 사용 제어
		if(keyQ){
			if( (this.flagBomb==false)&&(this.intBomb>0) ){
				this.bombFrame++;
				this.intBomb-=1;
				addSound("bomb");
				this.player.isBeatable = false;
				this.flagBomb = true;
			}
		}
		if(this.flagBomb){
			this.bombFrame += (1000/FPS);
			if(this.bombFrame>800){
				for(var i=0; i<this.npc.arrNPC.length; i++){
					if((this.npc.arrNPC[i].x>100)&&(this.npc.arrNPC[i].x<theCanvas.width+100)&&(this.npc.arrNPC[i].y>-200)&&(this.npc.arrNPC[i].y<theCanvas.height)){
						this.npc.arrBlast.push( {x:this.npc.arrNPC[i].x, y:this.npc.arrNPC[i].y, frame:0} );
						this.score += 100;
						this.npc.arrNPC.splice(i,1);
						continue;
					}
				}
			}
			if(this.bombFrame > 3800){
				this.bombFrame = 0;
				this.player.isBeatable = true;
				this.flagBomb = false;
			}
		}

		//충돌 영향 제어
		for(var i=0; i<this.npc.arrNPC.length; i++){
			//플레이어가 적과 충돌할 시 / 게임종료
			if( this.colCheck(this.player, this.npc.arrNPC[i]) && this.player.isBeatable ){
				soundArr.push( {name:"bgm_end", sound:bgmEnd} );
				for(var i=0; i<soundArr.length; i++){
					if(soundArr[i].name == "bgm_end"){
						soundArr[i].sound.currentTime = 0;
						soundArr[i].sound.play();
						soundArr[i].sound.loop = true;
					}
					if(soundArr[i].name == "bgm_play"){
						soundArr[i].sound.pause();
					}
				}
				this.isOver = true;
			}
			//서브가 부딛히면 flase로 바뀔것
			if( this.colCheck(this.player.subLeft, this.npc.arrNPC[i]) && this.player.subLeft.isReady ){
				this.npc.arrBlast.push( {x:this.player.subLeft.x, y:this.player.subLeft.y, frame:0} );
				this.player.flagSubLeft = false;
			}
			if( this.colCheck(this.player.subRight, this.npc.arrNPC[i]) && this.player.subRight.isReady ){
				this.npc.arrBlast.push( {x:this.player.subRight.x, y:this.player.subRight.y, frame:0} );
				this.player.flagSubRight = false;
			}
			for(var j=0; j<this.player.arrBall.length; j++){
				//엔피씨가 무기와 충돌할 시
				if( this.colCheck(this.npc.arrNPC[i], this.player.arrBall[j]) ){
					//엔피씨가 적 이면 적의 피를 깎고 충돌 이펙트나 폭파 이펙트를 생성하고 무기 제거
					if(this.npc.arrNPC[i].class == "enemy"){
						this.npc.arrNPC[i].HP -= this.player.arrBall[j].power;
						if(this.npc.arrNPC[i].HP >0) {
							addSound("hit");
							this.npc.arrShot.push( {x:this.player.arrBall[j].x, y:this.player.arrBall[j].y, frame:0} );
							this.score += 50;
						} else {
							addSound("explode");
							this.npc.arrBlast.push( {x:this.npc.arrNPC[i].x, y:this.npc.arrNPC[i].y, frame:0} );
							this.score += 100;
						}
						this.player.arrBall.splice(j, 1);
						continue;
					//엔피씨가 장애물이면 충돌 이펙트만 생성하고 무기 제거
					} else if(this.npc.arrNPC[i].class == "obstacle"){
						addSound("hit");
						this.npc.arrShot.push( {x:this.player.arrBall[j].x, y:this.player.arrBall[j].y, frame:0} );
						this.player.arrBall.splice(j, 1);
						continue;
					}
				}
			}
		}
		//플레이어가 아이템과 충돌할 시 / 아이템 타입에 따라 효과 적용
		for(var i=0; i<this.arrItem.length; i++){
			if( this.colCheck(this.player, this.arrItem[i]) ){
				if(this.arrItem[i].type=="style"){
					if(Math.floor(this.arrItem[i].frame)==0 ){
						this.arrItem[i].frame = 0;
						this.itemGet = "shotgun";
						this.player.ballType = "shotgun";
						this.player.ballRemain = 10;
						this.itemGetFrame += (1000/FPS);
					} else if(Math.floor(this.arrItem[i].frame)==1 ){
						this.arrItem[i].frame = 1;
						this.itemGet = "machinegun";
						this.player.ballType = "machinegun";
						this.player.ballRemain = 200;
						this.itemGetFrame += (1000/FPS);
					} else if(Math.floor(this.arrItem[i].frame)==2 ){
						this.arrItem[i].frame = 2;
						this.itemGet = "sub";
						if( (this.player.flagSubLeft==false)||(this.player.flagSubRight==false) ){
							this.player.flagSubLeft =true;
							this.player.flagSubRight=true;
						} else if(this.player.flagSubLeft&&this.player.flagSubRight){
							this.player.subBallLevel++;
							if(this.player.subBallLevel>=5)
								this.player.subBallLevel=5;
						}
						this.itemGetFrame += (1000/FPS);
					}
				} else if(this.arrItem[i].type=="power"){
					this.player.ballLevel++;
					if(this.player.ballLevel>=5)
						this.player.ballLevel=5;
				} else if(this.arrItem[i].type=="bomb"){
					this.intBomb ++;
				}
				addSound("item");
				this.arrItem.splice(i, 1);
				continue;
			}
		}
	}
};
//아이템 생성 프레임이 되면 각 타입마다 확률을 계산해서 생성
GameState.prototype.sortingItem = function(){
	var itemSCheck = Math.random();
	var itemPCheck = Math.random();
	var itemBCheck = Math.random();
	if(itemSCheck <=0.4)
		this.addItem( 540*Math.random(), -300*(1-Math.random()), 3, "style" );
	if(itemPCheck <=0.2)
		this.addItem( 540*Math.random(), -300*(1-Math.random()), 7, "power" );
	if(itemBCheck <=0.3)
		this.addItem( 540*Math.random(), -300*(1-Math.random()), 5, "bomb" );
	//다음 아이템 생성을 8~12초로 렌덤하게
	this.itemInterval = (8+Math.random()*4)*1000;
};
//아이템 생성 함수
GameState.prototype.addItem = function(_x, _y, _speed, _type){
	var obj = {};
	obj.class = "item";
	obj.type = _type;
	if(_type == "style"){
		obj.frame = 0;
		obj.speedX = _speed/2;
	}
	obj.x = _x;
	obj.y = _y;
	obj.speed = _speed;
	obj.colBox = {left:_x, right:_x+imgItemP.width, top:_y, bottom:_y+imgItemP.height};
	this.arrItem.push( obj );
};
//충돌 계산 함수
GameState.prototype.colCheck = function( _A, _B ){
	var targetBoxA = _A.colBox;
	var targetBoxB = _B.colBox;
	if( (targetBoxA.left<targetBoxB.right)&&(targetBoxA.right>targetBoxB.left)&&(targetBoxA.top<targetBoxB.bottom)&&(targetBoxA.bottom>targetBoxB.top) ){
		return true;
	}
};