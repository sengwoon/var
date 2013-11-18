var q3_wr, q4_wr, q5_wr;
var blur, filter, closebtn;
var body;
var outer;
var nav = 0;

var init = function() {
	var q3_wr = document.querySelector('#Q3_wr');
	var q4_wr = document.querySelector('#Q4_wr');
	var q5_wr = document.querySelector('#Q5_wr');
	var closebtn = document.querySelector('#closebtn');
	var blur = document.querySelector('#blur');
	var filter = document.querySelector('#filter');
	var body = document.body;
	var outer = document.querySelector('#outer');

	closebtn.onclick = function() {
		blur.style['display'] = 'none';
		filter.style['display'] = 'none';
		filter.style['opacity'] = '0';
		body.style['overflow'] = 'auto';
		body.style['overflowX'] = 'hidden';
		outer.style['display'] = 'none';
		outer.style['opacity'] = '0';
		closebtn.style['transition'] = '0s';
		closebtn.style['opacity'] = '0';
		if(nav == 1 ){
			for(var i=1; i<14 ; i++){
				var sel_screen = document.querySelector('#screen_set'+i);
				sel_screen.style['display'] = 'none';
				sel_screen.childNodes[1].style['display'] = 'none';	
			}
		}else if(nav == 2){
			for(var i=1; i<15 ; i++){	
				var sel_screen = document.querySelector('#screen_set2_'+i);
				sel_screen.style['display'] = 'none';
				sel_screen.childNodes[1].style['display'] = 'none';
			}
		}else if(nav == 3){
			for(var i=1; i<14 ; i++){
				var sel_screen = document.querySelector('#screen_set3_'+i);
				sel_screen.style['display'] = 'none';
				sel_screen.childNodes[1].style['display'] = 'none';	
			}
		}
	};

	for(var i=0; i<13; i++){
		var thum = document.createElement('div');
		thum.className = 'thum_wr';
		thum.innerHTML = '<div class=\"thum\" ></div><div class=\"info\"></div>';
		q3_wr.appendChild(thum);

		q3_wr.childNodes[i+1].onmouseover = function() {
			this.style['top'] = '0px';
			this.style['left'] = '0px';
			this.style['position'] = 'relative';
			this.style['boxShadow'] = '10px 10px rgb(237, 47, 116)';
		};

		q3_wr.childNodes[i+1].onmouseout = function() {
			this.style['top'] = '10px';
			this.style['left'] = '10px';
			this.style['position'] = 'relative';	
			this.style['boxShadow'] = '0px 0px rgb(237, 47, 116)';
		};

		// q3_wr.childNodes[i+1].onclick = function() {
		// 	var screen_set = document.querySelector('#screen_set' + (i+1));
		// 	screen_set.style['display'] = 'block';
		// 	screen_set.childNodes[1].style['display'] = 'block';
		// 	setTimeout( function(){
		// 			outer.style.opacity = '1.0';
		// 		}, 50);
		// 	outer.style.display = 'block';
		// 	setTimeout( function(){
		// 			blur.style.opacity = '1.0';
		// 		}, 50);
		// 	blur.style.display = 'block';
		// 	setTimeout( function(){
		// 			filter.style.opacity = '0.95';
		// 		}, 50);
		// 	filter.style.display = 'block';
		// 	closebtn.style['transition'] = '0.5s';
		// 	setTimeout( function(){
		// 			closebtn.style.opacity = '1.0';
		// 		}, 50);
		// 	body.style['overflow'] = 'hidden';
		// };
	}


	q3_wr.childNodes[1].onclick = function() {
		var screen_set = document.querySelector('#screen_set1');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/caeCK\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[1].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_01.png\">";
	q3_wr.childNodes[1].childNodes[1].innerHTML = "한솔<br>Quest_3";

	q3_wr.childNodes[2].onclick = function() {
		var screen_set = document.querySelector('#screen_set2');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/iGDdg\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[2].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_02.png\">";
	q3_wr.childNodes[2].childNodes[1].innerHTML = "김단오<br>Quest_3";

	q3_wr.childNodes[3].onclick = function() {
		var screen_set = document.querySelector('#screen_set3');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/fdesG\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[3].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_03.png\">";
	q3_wr.childNodes[3].childNodes[1].innerHTML = "신나온<br>Quest_3";

	q3_wr.childNodes[4].onclick = function() {
		var screen_set = document.querySelector('#screen_set4');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/IriFk\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[4].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_04.png\">";
	q3_wr.childNodes[4].childNodes[1].innerHTML = "이준표<br>Quest_3";

	q3_wr.childNodes[5].onclick = function() {
		var screen_set = document.querySelector('#screen_set5');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/jlevm\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[5].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_05.png\">";
	q3_wr.childNodes[5].childNodes[1].innerHTML = "임주희<br>Quest_3";	

	q3_wr.childNodes[6].onclick = function() {
		var screen_set = document.querySelector('#screen_set6');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/uKnCy\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[6].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_06.png\">";
	q3_wr.childNodes[6].childNodes[1].innerHTML = "박승운<br>Quest_3";	

	q3_wr.childNodes[7].onclick = function() {
		var screen_set = document.querySelector('#screen_set7');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/Kbjvm\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[7].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_07.png\">";
	q3_wr.childNodes[7].childNodes[1].innerHTML = "이민선<br>Quest_3";

	q3_wr.childNodes[8].onclick = function() {
		var screen_set = document.querySelector('#screen_set8');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/vkpFy\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[8].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_08.png\">";
	q3_wr.childNodes[8].childNodes[1].innerHTML = "안현근<br>Quest_3";

	q3_wr.childNodes[9].onclick = function() {
		var screen_set = document.querySelector('#screen_set9');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/fczID\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[9].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_09.png\">";
	q3_wr.childNodes[9].childNodes[1].innerHTML = "오예전<br>Quest_3";

	q3_wr.childNodes[10].onclick = function() {
		var screen_set = document.querySelector('#screen_set10');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/DotEe\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[10].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_10.png\">";
	q3_wr.childNodes[10].childNodes[1].innerHTML = "강수영<br>Quest_3";

	q3_wr.childNodes[11].onclick = function() {
		var screen_set = document.querySelector('#screen_set11');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/kLdaf\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[11].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_11.png\">";
	q3_wr.childNodes[11].childNodes[1].innerHTML = "김화정<br>Quest_3";

	q3_wr.childNodes[12].onclick = function() {
		var screen_set = document.querySelector('#screen_set12');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/GaeLA\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[12].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_12.png\">";
	q3_wr.childNodes[12].childNodes[1].innerHTML = "김명진<br>Quest_3";

	q3_wr.childNodes[13].onclick = function() {
		var screen_set = document.querySelector('#screen_set13');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/gzncq\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 1;
	};
	q3_wr.childNodes[13].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q3_13.png\">";
	q3_wr.childNodes[13].childNodes[1].innerHTML = "김주용<br>Quest_3";

	for(var i=0; i<14; i++){
		var thum = document.createElement('div');
		thum.className = 'thum_wr';
		thum.innerHTML = '<div class=\"thum\" ></div><div class=\"info\"></div>';
		q4_wr.appendChild(thum);

		q4_wr.childNodes[i+1].onmouseover = function() {
			this.style['top'] = '0px';
			this.style['left'] = '0px';
			this.style['position'] = 'relative';
			this.style['boxShadow'] = '10px 10px';
			this.style['boxShadow'] = '10px 10px rgb(0, 98, 255)';
		};

		q4_wr.childNodes[i+1].onmouseout = function() {
			this.style['top'] = '10px';
			this.style['left'] = '10px';
			this.style['position'] = 'relative';	
			this.style['boxShadow'] = '0px 0px';
			this.style['boxShadow'] = '0px 0px rgb(0, 98, 255)';
		};
	}

	q4_wr.childNodes[1].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_1');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/mzuLq\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[1].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_01.png\">";
	q4_wr.childNodes[1].childNodes[1].innerHTML = "김명진<br>Quest_4";

	q4_wr.childNodes[2].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_2');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/GhkdC\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[2].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_02.png\">";
	q4_wr.childNodes[2].childNodes[1].innerHTML = "양다연<br>Quest_4";

	q4_wr.childNodes[3].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_3');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/Hzfsk\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[3].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_03.png\">";
	q4_wr.childNodes[3].childNodes[1].innerHTML = "김단오<br>Quest_4";

	q4_wr.childNodes[4].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_4');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/hovGx\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[4].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_04.png\">";
	q4_wr.childNodes[4].childNodes[1].innerHTML = "신나온<br>Quest_4";

	q4_wr.childNodes[5].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_5');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/dlcmw\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[5].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_05.png\">";
	q4_wr.childNodes[5].childNodes[1].innerHTML = "이민선<br>Quest_4";

	q4_wr.childNodes[6].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_6');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/dlcmw\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[6].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_07.png\">";
	q4_wr.childNodes[6].childNodes[1].innerHTML = "임주희<br>Quest_4";

	q4_wr.childNodes[7].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_7');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/dbyEc\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[7].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_08.png\">";
	q4_wr.childNodes[7].childNodes[1].innerHTML = "박경원<br>Quest_4";

	q4_wr.childNodes[8].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_8');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/Dytxr\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[8].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_06.png\">";
	q4_wr.childNodes[8].childNodes[1].innerHTML = "박승운<br>Quest_4";

	q4_wr.childNodes[9].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_9');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/FJGlK\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[9].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_09.png\">";
	q4_wr.childNodes[9].childNodes[1].innerHTML = "이준표<br>Quest_4";

	q4_wr.childNodes[10].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_10');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/mfEol\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[10].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_10.png\">";
	q4_wr.childNodes[10].childNodes[1].innerHTML = "김주용<br>Quest_4";

	q4_wr.childNodes[11].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_11');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/Dhcjq\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[11].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_11.png\">";
	q4_wr.childNodes[11].childNodes[1].innerHTML = "김화정<br>Quest_4";

	q4_wr.childNodes[12].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_12');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/Lzmvn\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[12].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_12.png\">";
	q4_wr.childNodes[12].childNodes[1].innerHTML = "오예전<br>Quest_4";

	q4_wr.childNodes[13].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_13');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/FkqBl\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[13].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_13.png\">";
	q4_wr.childNodes[13].childNodes[1].innerHTML = "안현근<br>Quest_4";

	q4_wr.childNodes[14].onclick = function() {
		var screen_set = document.querySelector('#screen_set2_14');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/aHcov\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 2;
	};
	q4_wr.childNodes[14].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q4_14.png\">";
	q4_wr.childNodes[14].childNodes[1].innerHTML = "강수영<br>Quest_4";

	for(var i=0; i<13; i++){
		var thum = document.createElement('div');
		thum.className = 'thum_wr';
		thum.innerHTML = '<div class=\"thum\" ></div><div class=\"info\"></div>';
		q5_wr.appendChild(thum);

		q5_wr.childNodes[i+1].onmouseover = function() {
			this.style['top'] = '0px';
			this.style['left'] = '0px';
			this.style['position'] = 'relative';
			this.style['boxShadow'] = '10px 10px';
			this.style['boxShadow'] = '10px 10px rgb(155, 0, 255)';
		};

		q5_wr.childNodes[i+1].onmouseout = function() {
			this.style['top'] = '10px';
			this.style['left'] = '10px';
			this.style['position'] = 'relative';	
			this.style['boxShadow'] = '0px 0px';
			this.style['boxShadow'] = '0px 0px rgb(155, 0, 255)';
		};
	}

	q5_wr.childNodes[1].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_1');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/LxAvg\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[1].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_01.png\">";
	q5_wr.childNodes[1].childNodes[1].innerHTML = "이준표<br>Quest_5";

	q5_wr.childNodes[2].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_2');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/EHIaJ\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[2].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_02.png\">";
	q5_wr.childNodes[2].childNodes[1].innerHTML = "박승운<br>Quest_5";

	q5_wr.childNodes[3].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_3');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/GBctg\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[3].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_03.png\">";
	q5_wr.childNodes[3].childNodes[1].innerHTML = "박경원<br>Quest_5";

	q5_wr.childNodes[4].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_4');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/hCjyn\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[4].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_04.png\">";
	q5_wr.childNodes[4].childNodes[1].innerHTML = "신나온<br>Quest_5";

	q5_wr.childNodes[5].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_5');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/Iejht\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[5].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_05.png\">";
	q5_wr.childNodes[5].childNodes[1].innerHTML = "김화정<br>Quest_5";

	q5_wr.childNodes[6].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_6');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/bHDtw\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[6].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_06.png\">";
	q5_wr.childNodes[6].childNodes[1].innerHTML = "양다연<br>Quest_5";

	q5_wr.childNodes[7].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_7');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/auKkj\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[7].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_07.png\">";
	q5_wr.childNodes[7].childNodes[1].innerHTML = "한솔<br>Quest_5";

	q5_wr.childNodes[8].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_8');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/CkHmy\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[8].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_08.png\">";
	q5_wr.childNodes[8].childNodes[1].innerHTML = "오예전<br>Quest_5";

	q5_wr.childNodes[9].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_9');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/poxnu\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[9].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_09.png\">";
	q5_wr.childNodes[9].childNodes[1].innerHTML = "강수영<br>Quest_5";

	q5_wr.childNodes[10].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_10');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/Jwigs\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[10].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_10.png\">";
	q5_wr.childNodes[10].childNodes[1].innerHTML = "이민선<br>Quest_5_1";

	q5_wr.childNodes[11].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_11');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/gthcx\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[11].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_11.png\">";
	q5_wr.childNodes[11].childNodes[1].innerHTML = "이민선<br>Quest_5_2";

	q5_wr.childNodes[12].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_12');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/DmpKJ\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[12].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_12.png\">";
	q5_wr.childNodes[12].childNodes[1].innerHTML = "김명진<br>Quest_5";

	q5_wr.childNodes[13].onclick = function() {
		var screen_set = document.querySelector('#screen_set3_13');
		screen_set.childNodes[3].innerHTML = "<iframe src=\"http://cdpn.io/wzfkb\" class=\"in_screen\" scrolling=\"no\"></iframe>";
		screen_set.style['display'] = 'block';
		screen_set.childNodes[1].style['display'] = 'block';
		setTimeout( function(){
				outer.style.opacity = '1.0';
			}, 50);
		outer.style.display = 'block';
		setTimeout( function(){
				blur.style.opacity = '1.0';
			}, 50);
		blur.style.display = 'block';
		setTimeout( function(){
				filter.style.opacity = '0.95';
			}, 50);
		filter.style.display = 'block';
		closebtn.style['transition'] = '0.5s';
		setTimeout( function(){
				closebtn.style.opacity = '1.0';
			}, 50);
		body.style['overflow'] = 'hidden';
		nav = 3;
	};
	q5_wr.childNodes[13].childNodes[0].innerHTML = "<img class=\"thum_img\" src=\"./images/thumbnail/Q5_13.png\">";
	q5_wr.childNodes[13].childNodes[1].innerHTML = "김주용<br>Quest_5";
};

window.onload = function(){
	init();
};