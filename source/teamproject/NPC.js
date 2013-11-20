var gameNPC;
function NPC(){
	this.arrNPC = new Array();
	this.enemyFrame = 0;
	this.arrShot = new Array();
	this.arrBlast = new Array();
	this.level = 1;
	gameNPC = this;
}

NPC.prototype.Render = function(){
	//엔피씨 종류에 따라 그리기
	for(var i=0; i<this.arrNPC.length; i++){
		if(this.arrNPC[i].class == "enemy")
			Context.drawImage(imgEnemy, Math.floor(this.arrNPC[i].sprframe)*140,  0, 140, 100, this.arrNPC[i].x, this.arrNPC[i].y, 140, 100);
		if(this.arrNPC[i].class == "obstacle"){
			if(this.arrNPC[i].frame <= 3000)
				Context.drawImage(imgWarn, this.arrNPC[i].x, 0);
			else
				Context.drawImage(imgObstacle, this.arrNPC[i].x, this.arrNPC[i].y);
		}
	}
	//무기와의 충돌 이펙트
	for(var i=0; i<this.arrShot.length; i++){
		Context.drawImage(imgShot, this.arrShot[i].x, this.arrShot[i].y);
	}
	//폭발 이펙트 그리기
	for(var i=0; i<this.arrBlast.length; i++){
		Context.drawImage(sprBlast, this.arrBlast[i].frame*160, 0, 160, 160, this.arrBlast[i].x-5, this.arrBlast[i].y-5, 160, 160);
	}
};

NPC.prototype.Update = function(){
	this.enemyFrame += (1000/FPS);
	//적 생성 / 3초마다 1마리씩 추가
	if(game.gameTime<15000){
		this.level = 1;
		if( this.enemyFrame>=3000 ){
			var rd = Math.random()*2;
			for(var i=0; i<rd; i++){
				this.sortingEnemy();
			}
			this.enemyFrame = 0;
		}
	} else if (game.gameTime>=15000&&game.gameTime<60000 ){
		this.level = 2;
		if( this.enemyFrame>=2800 ){
			var rd = Math.random()*3;
			for(var i=0; i<1+rd; i++){
				this.sortingEnemy();
			}
			this.enemyFrame = 0;
		}
	} else if (game.gameTime>=60000&&game.gameTime<120000){
		this.level = 3;
		if( this.enemyFrame>=2500 ){
			var rd = Math.random()*4;
			for(var i=0; i<1+rd; i++){
				this.sortingEnemy();
			}
			this.enemyFrame = 0;
		}
	} else if ( game.gameTime>=120000&&game.gameTime<180000){
		this.level = 4;
		if( this.enemyFrame>=2000 ){
			var rd = Math.random()*2;
			for(var i=0; i<3+rd; i++){
				this.sortingEnemy();
			}
			this.enemyFrame = 0;
		}
	} else if ( game.gameTime>=180000){
		this.level = 5;
		if( this.enemyFrame>=2000 ){
			var rd = Math.random();
			for(var i=0; i<4+rd; i++){
				this.sortingEnemy();
			}
			this.enemyFrame = 0;
		}
	}
	//적 위치 및 충돌상자 최신화
	for(var i=0; i<this.arrNPC.length; i++){
		if(this.arrNPC[i].class == "enemy"){
			if(this.arrNPC[i].type == "zigzag"){
				this.arrNPC[i].zigFrame ++;
				this.arrNPC[i].x = this.arrNPC[i].refX+Math.cos(this.arrNPC[i].zigFrame*0.02)*this.arrNPC[i].zigRange;
			}
			this.arrNPC[i].y += this.arrNPC[i].speed;
			this.arrNPC[i].sprframe += 0.5;
			if(Math.floor(this.arrNPC[i].sprframe) >= 16) this.arrNPC[i].sprframe = 0;
			this.arrNPC[i].colBox = {left: this.arrNPC[i].x+15, right: this.arrNPC[i].x+140-15, top: this.arrNPC[i].y+30, bottom: this.arrNPC[i].y+100};
			//화면밖으로 벗어나면 제거
			if(this.arrNPC[i].y>theCanvas.height){
				this.arrNPC.splice(i, 1);
				continue;
			//게임 상태에서 충돌 계산으로 피가 줄어들어 0이하로 떨어지면 제거
			} else if (this.arrNPC[i].HP<=0){
				this.arrNPC.splice(i, 1);
				continue;
			}
		}
	}
	//무기충돌 이펙트 제어
	for(var i=0; i<this.arrShot.length; i++){
		this.arrShot[i].frame += (1000/FPS);
		this.arrShot[i].y += game.speed;
		if(this.arrShot[i].frame >=300){
			this.arrShot.splice(i, 1);
			continue;
		}
	}
	//폭파 이펙트 제어
	for(var i=0; i<this.arrBlast.length; i++){
		this.arrBlast[i].frame ++;
		this.arrBlast[i].y += game.speed;
		if(this.arrBlast[i].frame >= 16){
			this.arrBlast.splice(i, 1);
			continue;
		}
	}
};
//적 생성 프레임이 되면 적 생성 / 시간에 따라 적의 타입을 조절하는 함수가 될 예정
NPC.prototype.sortingEnemy = function(){
	var rd = Math.random();
	if(this.level<3){
	 	if(rd<0.6)
	 		this.addNPC( Math.floor(Math.random()*(theCanvas.width-100)), Math.floor(Math.random()*550-600), "enemy");
		else
			this.addNPC( Math.floor(Math.random()*(theCanvas.width-100)), Math.floor(Math.random()*550-600), "enemy", "zigzag");
	} else {
		if(rd<0.4)
	 		this.addNPC( Math.floor(Math.random()*(theCanvas.width-100)), Math.floor(Math.random()*550-600), "enemy");
		else
			this.addNPC( Math.floor(Math.random()*(theCanvas.width-100)), Math.floor(Math.random()*550-600), "enemy", "zigzag");
	}
}
//적 생성 함수
NPC.prototype.addNPC = function(_x, _y, _class, _type){
	var obj = {};
	if(_class == "enemy"){
		if(this.level == 1){
			obj.speed=2;
			obj.HP=2;
		} else if (this.level == 2){
			obj.speed=2.2;
			obj.HP=4;
		} else if (this.level == 3){
			obj.speed=2.4;
			obj.HP=8;
		} else if (this.level == 4){
			obj.speed=2.6;
			obj.HP=16;
		} else if (this.level == 5){
			obj.speed=3;
			obj.HP=32;
		}
		if(_type == "zigzag"){
			obj.refX = _x;
			obj.zigFrame = 0;
			obj.zigRange = (Math.floor(7+Math.random()*3))*10;
			obj.type=_type;
		}
		colBox = {left: _x+15, right: _x+140-15, top: _y+30, bottom: _y+100};
		obj.sprframe = 0;
	}
	if(_class == "obstacle"){
		obj.speed = game.speed;
		obj.frame = 0;
		colBox = {left: _x, right: _x+imgObstacle.width, top: _y, bottom: _y+imgObstacle.height};
	}
	obj.class=_class;
	obj.x=_x;
	obj.y=_y;
	this.arrNPC.push(obj);
};