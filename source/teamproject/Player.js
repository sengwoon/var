var gamePlayer;
function Player(){
	this.x = 320;
	this.y = 700;
	this.speedX = 0;
	this.speedY = 0;
	this.accelX = 0;
	this.accelY = 0;
	this.class = "player";
	this.colBox = {left:this.x+10, right:this.x+90-10, top:this.y+10, bottom:this.y+68-10};
	this.isBeatable = true;

	this.arrBall = new Array();
	this.ballFrame = 0;
	this.pX = 0; //발사 위치 조절!!!
	this.pY = 0; //발사 위치 조절!!!
	this.ballType = "default";
	this.ballLevel = 1;
	this.ballPower = 1;
	this.ballInterval = 1000;
	this.ballRemain = 0;

	this.subLeft = { x:-300, y:theCanvas.height/2, initFrame:0, isReady:false, colBox:{} };
	this.subRight = { x:theCanvas.width+300, y:theCanvas.height/2, initFrame:0, isReady:false, colBox:{} };
	this.flagSubLeft = false;
	this.flagSubRight = false;
	this.subBallFrame = 0;
	this.subBallLevel = 1;
	this.subBallPower = 0.5;
	this.subBallInterval = 2000;
    this.sprframe = 0;

	gamePlayer = this;
}

Player.prototype.Render = function(){
	//서브 무기 그리기
	if(this.flagSubLeft || this.flagSubRight){
		Context.drawImage(imgPlayerSub, this.subLeft.x, this.subLeft.y);
		Context.drawImage(imgPlayerSub, this.subRight.x, this.subRight.y);
	}
	//플레이어의 무기 그리기
	for(var i=0; i<this.arrBall.length; i++){
		if(this.arrBall[i].sort=="sub")
			Context.drawImage(imgSubBall, this.arrBall[i].x, this.arrBall[i].y);
		else
			Context.drawImage(imgBall, this.arrBall[i].x, this.arrBall[i].y);
	}
	//플레이어 그리기
	if (this.speedX==0) Context.drawImage(imgPlayerFront, Math.floor(this.sprframe)*90, 0, 90, 68, this.x, this.y, 90, 68);
	if (this.speedX>0) Context.drawImage(imgPlayerRight, Math.floor(this.sprframe)*90, 0, 90, 68, this.x, this.y, 90, 68);
	if (this.speedX<0) Context.drawImage(imgPlayerLeft, Math.floor(this.sprframe)*90, 0, 90, 68, this.x, this.y, 90, 68);
	
	
};

Player.prototype.Update = function(){
	// 플레이어의 속도는 가속도 만큼 계속 증가한다. 아래의 if 구문에 의해 속도는 10을 넘지 않는다.
	this.sprframe += 0.5;
	if(Math.floor(this.sprframe)>=16) this.sprframe = 0;
	this.speedX += this.accelX;
	this.speedY += this.accelY;
	//플레이어의 위치는 속도 만큼 계속 증가한다. 이하의 if 구문에 의해 위치는 화면을 넘지 않는다.
	this.x += this.speedX;		
	this.y += this.speedY;
	if(this.x<0) this.x=0;
	if(this.x>theCanvas.width - 90) this.x = (theCanvas.width-90);
	if(this.y<0) this.y=0;
	if(this.y>theCanvas.height - 68) this.y=theCanvas.height - 68;
	if(this.speedX>8) this.speedX=8;
	if(this.speedX<-8) this.speedX=-8;
	if(this.speedY>8) this.speedY=8;
	if(this.speedY<-8) this.speedY=-8;
	//키 조작에 따른 가속도 변화
	if(keyLeft==true && keyRight==false) {
		this.accelX = -0.5;
	} else if (keyRight==true && keyLeft==false){
		this.accelX = 0.5;
	} else {
		if(this.speedX>0) this.accelX = -0.5;
 		if(this.speedX<0) this.accelX = 0.5;
 		if(this.speedX==0) this.accelX = 0;
	}
	if(keyUp==true && keyDown==false){
		this.accelY = -0.5;
	} else if(keyDown==true && keyUp==false){
		this.accelY = 0.5;
	} else {
		if(this.speedY>0) this.accelY = -0.5;
 		if(this.speedY<0) this.accelY = 0.5;
 		if(this.speedY==0) this.accelY = 0;
	}
	//충돌박스 최신화
	this.colBox = {left:this.x+10, right:this.x+90-10, top:this.y+10, bottom:this.y+68-10};

	this.ballLevelSetting();
	this.subBallLevelSetting();
	//무기 발사 제어
	this.ballFrame += (1000/FPS);
	if(keySpace){
		if(this.ballType=="default"){
			if(this.ballFrame >= this.ballInterval*0.4){
				this.addBall( this.x+90/2-imgBall.width/2+this.pX, this.y-this.pY, this.ballPower, this.ballType );
				this.ballFrame=0;
				addSound("fire");
			}
		} else if(this.ballType=="shotgun"){
			if(this.ballFrame >= this.ballInterval){
				var range;
				if(this.ballLevel<3)
					range=7;
				else
					range=9;
				for(var i=0; i<range; i++){
					this.addBall( this.x+90/2-imgBall.width/2+this.pX, this.y-this.pY, this.ballPower, this.ballType, i );
				}
				this.ballRemain --;
				this.ballFrame=0;
				addSound("fire");
			}
		} else if(this.ballType=="machinegun"){
			if(this.ballFrame >= this.ballInterval*0.1){
				for(var i=-1; i<2; i+=2){
					this.addBall( this.x+90/2-imgBall.width/2+this.pX+i*20, this.y-this.pY, this.ballPower, this.ballType );
					this.ballRemain--;
				}
				this.ballFrame=0;
				addSound("fire");
			}
		}
	}
	//탄알 소진시 디폴트로 전환
	if(this.ballRemain<=0)
		this.ballType = "default";
	//무기 이동 제어 및 충돌박스 최신화
	for(var i=0; i<this.arrBall.length; i++){
		//샷건 이동 방식
		if(this.arrBall[i].sort=="shotgun"){
			this.arrBall[i].frame += (1000/FPS);
			if(this.arrBall[i].num==0){
				this.arrBall[i].x += Math.cos(Math.PI/18*6)*(this.arrBall[i].speed);
				this.arrBall[i].y -= Math.sin(Math.PI/18*6)*(this.arrBall[i].speed);
			} else if(this.arrBall[i].num==1){
				this.arrBall[i].x += Math.cos(Math.PI/18*7)*(this.arrBall[i].speed);
				this.arrBall[i].y -= Math.sin(Math.PI/18*7)*(this.arrBall[i].speed);
			} else if(this.arrBall[i].num==2){
				this.arrBall[i].x += Math.cos(Math.PI/18*8)*(this.arrBall[i].speed);
				this.arrBall[i].y -= Math.sin(Math.PI/18*8)*(this.arrBall[i].speed);
			} else if(this.arrBall[i].num==3){
				this.arrBall[i].x += Math.cos(Math.PI/18*9)*(this.arrBall[i].speed);
				this.arrBall[i].y -= Math.sin(Math.PI/18*9)*(this.arrBall[i].speed);
			} else if(this.arrBall[i].num==4){
				this.arrBall[i].x += Math.cos(Math.PI/18*10)*(this.arrBall[i].speed);
				this.arrBall[i].y -= Math.sin(Math.PI/18*10)*(this.arrBall[i].speed);
			} else if(this.arrBall[i].num==5){
				this.arrBall[i].x += Math.cos(Math.PI/18*11)*(this.arrBall[i].speed);
				this.arrBall[i].y -= Math.sin(Math.PI/18*11)*(this.arrBall[i].speed);
			} else if(this.arrBall[i].num==6){
				this.arrBall[i].x += Math.cos(Math.PI/18*12)*(this.arrBall[i].speed);
				this.arrBall[i].y -= Math.sin(Math.PI/18*12)*(this.arrBall[i].speed);
			//레벨3이면 양옆으로 한발씩 추가
			} else if(this.arrBall[i].num==7){
				this.arrBall[i].x += Math.cos(Math.PI/18*5)*(this.arrBall[i].speed);
				this.arrBall[i].y -= Math.sin(Math.PI/18*5)*(this.arrBall[i].speed);
			} else if(this.arrBall[i].num==8){
				this.arrBall[i].x += Math.cos(Math.PI/18*13)*(this.arrBall[i].speed);
				this.arrBall[i].y -= Math.sin(Math.PI/18*13)*(this.arrBall[i].speed);
			}
			this.arrBall[i].colBox = {left:this.arrBall[i].x, right:this.arrBall[i].x+imgBall.width, top:this.arrBall[i].y, bottom:this.arrBall[i].y+imgBall.height};
			if(this.arrBall[i].frame >= 200) {
				this.arrBall.splice(i, 1);
				continue;
			}
		//서브 유도미사일 이동 방식
		} else if(this.arrBall[i].sort=="sub"){
			if(gameNPC.arrNPC.length>0){
				var minX;
				var minY;
				if( (gameNPC.arrNPC.length == 1)&&( (gameNPC.arrNPC[0].y)<this.arrBall[i].y) ){
					minX = gameNPC.arrNPC[0].x+imgEnemy.width/2;
					minY = gameNPC.arrNPC[0].y;
				}else {
					for(var j=0; j<gameNPC.arrNPC.length-1; j++){
						if((gameNPC.arrNPC[j].y)<this.arrBall[i].y){
							if(this.arrBall[i].y-(gameNPC.arrNPC[j].y) <  this.arrBall[i].y-(gameNPC.arrNPC[j+1].y)){
								minX = gameNPC.arrNPC[j].x+140/2;;
								minY = gameNPC.arrNPC[j].y;
							} else {
								minX = gameNPC.arrNPC[j+1].x+140/2;;
								minY = gameNPC.arrNPC[j+1].y;
							}
						}
					}
				}
				if(minX!=undefined || minY!=undefined){
					var angle = Math.atan2(minY-this.arrBall[i].y, minX-this.arrBall[i].x);
					this.arrBall[i].x += Math.cos(angle)*this.arrBall[i].speed;
					this.arrBall[i].y += Math.sin(angle)*this.arrBall[i].speed*0.3-this.arrBall[i].speed;
				} else {
					this.arrBall[i].y -= (this.arrBall[i].speed);
				}
				this.arrBall[i].colBox = {left:this.arrBall[i].x, right:this.arrBall[i].x+imgBall.width, top:this.arrBall[i].y, bottom:this.arrBall[i].y+imgBall.height};
			//디폴트, 머신건 이동 방식
			} else {
				this.arrBall[i].y -= (this.arrBall[i].speed);
				this.arrBall[i].colBox = {left:this.arrBall[i].x, right:this.arrBall[i].x+imgBall.width, top:this.arrBall[i].y, bottom:this.arrBall[i].y+imgBall.height};
			}
			//화면 밖으로 나가면 제거
			if( this.arrBall[i].y<-50 ) {
				this.arrBall.splice(i, 1);
				continue;
			}
		} else {
			this.arrBall[i].y -= (this.arrBall[i].speed);
			this.arrBall[i].colBox = {left:this.arrBall[i].x, right:this.arrBall[i].x+imgBall.width, top:this.arrBall[i].y, bottom:this.arrBall[i].y+imgBall.height};
			//화면 밖으로 나가면 제거
			if( this.arrBall[i].y<-50 ) {
				this.arrBall.splice(i, 1);
				continue;
			}
		}
	}
	//보조 제어 / 왼쪽
	if(this.flagSubLeft){
		this.subLeft.initFrame += (1000/FPS);
		this.subLeft.x = this.subLeft.x + ((this.x-imgPlayerSub.width-40)-this.subLeft.x)*0.1;
		this.subLeft.y = this.subLeft.y + ((this.y+40)-this.subLeft.y)*0.05;
		this.subLeft.colBox = { left:this.subLeft.x, right:this.subLeft.x+30, top:this.subLeft.y, bottom:this.subLeft.y+40 };
		if(this.subLeft.initFrame>=2000) this.subLeft.isReady=true;
	} else {
		this.subLeft.x 		= -300;
		this.subLeft.y 		= theCanvas.height/2;
		this.subLeft.colBox = { left:this.subLeft.x, right:this.subLeft.x+30, top:this.subLeft.y, bottom:this.subLeft.y+40 };
		this.subLeft.initFrame = 0;
		this.subLeft.isReady 	= false;
	}
	//보조 제어 / 오른쪽
	if(this.flagSubRight){
		this.subRight.initFrame += (1000/FPS);
		this.subRight.x = this.subRight.x + ((this.x+90+40)-this.subRight.x)*0.1;
		this.subRight.y = this.subRight.y + ((this.y+40)-this.subRight.y)*0.05;
		this.subRight.colBox = { left:this.subRight.x, right:this.subRight.x+30, top:this.subRight.y, bottom:this.subRight.y+40 };
		if(this.subRight.initFrame>=2000) this.subRight.isReady=true;
	} else {
		this.subRight.x 		= theCanvas.width+300;
		this.subRight.y 		= theCanvas.height/2;
		this.subRight.colBox = { left:this.subRight.x, right:this.subRight.x+30, top:this.subRight.y, bottom:this.subRight.y+40 };
		this.subRight.initFrame = 0;
		this.subRight.isReady 	= false;
	}
	//보조 공격 제어
	if( this.flagSubLeft||this.flagSubRight ){
		this.subBallFrame += (1000/FPS);
		if(this.subBallFrame >= this.subBallInterval){
			if(this.subLeft.isReady){
				this.addBall( this.subLeft.x+imgPlayerSub.width/2-imgBall.width/2, this.subLeft.y, this.subBallPower, "sub");
				addSound("fire");
			}
			if(this.subRight.isReady){
				this.addBall( this.subRight.x+imgPlayerSub.width/2-imgBall.width/2, this.subRight.y, this.subBallPower, "sub");
				addSound("fire");
			}
			this.subBallFrame=0;
		}
	//보조 둘다 죽으면 레벨초기화
	} else {
		this.subBallLevel = 1;
		this.subBallFrame = 0;
	}
};

Player.prototype.dist = function(A, B){
	var dis = Math.sqrt( (A.x-B.x)*(A.x-B.x)+(A.y-B.y)*(A.y-B.y) );
	return dis;
};

Player.prototype.ballLevelSetting = function(){
	if(this.ballLevel == 1){
		this.ballPower = 1;
		this.ballInterval = 1000;
	} else if(this.ballLevel == 2){
		this.ballPower = 2;
		this.ballInterval = 900;
	} else if(this.ballLevel == 3){
		this.ballPower = 4;
		this.ballInterval = 800;
	} else if(this.ballLevel == 4){
		this.ballPower = 8;
		this.ballInterval = 700;
	} else if(this.ballLevel == 5){
		this.ballPower = 16;
		this.ballInterval = 600;
	}
};
Player.prototype.subBallLevelSetting = function(){
	if(this.subBallLevel == 1){
		this.subBallPower = 0.5;
		this.subBallInterval = 2000;
	} else if(this.subBallLevel == 2){
		this.subBallPower = 1;
		this.subBallInterval = 1600;
	} else if(this.subBallLevel == 3){
		this.subBallPower = 2;
		this.subBallInterval = 1500;
	} else if(this.subBallLevel == 4){
		this.subBallPower = 3.5;
		this.subBallInterval = 1300;
	} else if(this.subBallLevel == 5){
		this.subBallPower = 6;
		this.subBallInterval = 1000;
	}
};

Player.prototype.addBall = function(_x, _y, _power, _sort, _num){
	var obj = {};
	if(_sort == "default"){
		obj.power = _power;
		if(this.ballLevel<3)
			obj.speed = 12;
		else
			obj.speed = 16;
		obj.colBox = {left:_x, right:_x+imgBall.width, top:_y, bottom:_y+imgBall.height};
	} else if(_sort == "shotgun"){
		obj.power = _power*2;
		if(this.ballLevel<3)
			obj.speed = 30;
		else 
			obj.speed = 35;
		obj.colBox = {left:_x, right:_x+imgBall.width, top:_y, bottom:_y+imgBall.height};
		obj.num=_num;
		obj.frame=0;
	} else if(_sort == "machinegun"){
		obj.power = _power*0.5;
		if(this.ballLevel<3)
			obj.speed = 16;
		else
			obj.speed = 20;
		obj.colBox = {left:_x, right:_x+imgBall.width, top:_y, bottom:_y+imgBall.height};
	} else if(_sort == "sub"){
		obj.power = _power;
		if(this.subBallLevel<3)
			obj.speed = 7;
		else
			obj.speed = 10;
		obj.colBox = {left:_x, right:_x+imgSubBall.width, top:_y, bottom:_y+imgSubBall.height};
	}
	obj.class = "ball";	
	obj.sort = _sort;
	obj.x = _x
	obj.y = _y;
	this.arrBall.push( obj );
};