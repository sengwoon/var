var btnTeam, btnH1, btnH2, btnJ1, btnJ2, btnS1, btnS2, btnClose;
var BG, pop;

window.onload = function(){
	init();
}
function init(){
	BG = document.querySelector("#black");
	pop = document.querySelector("#pop");

	btnTeam = document.querySelector("#btnTeam");
	btnH1 = document.querySelector("#btnH1");
	btnH2 = document.querySelector("#btnH2");
	btnJ1 = document.querySelector("#btnJ1");
	btnJ2 = document.querySelector("#btnJ2");
	btnS1 = document.querySelector("#btnS1");
	btnS2 = document.querySelector("#btnS2");
	btnClose = document.querySelector("#btnClose");

	btnTeam.onclick = function(){
		if(BG.style.display!="block"){
			BG.style.display="block";
			pop.style.display="block";
			pop.innerHTML = '<iframe src="source/teamproject/game.html" id="Tproj"></iframe>';
			pop.style.marginLeft = "-380px";
			pop.style.marginTop = "-460px";
		}
	};
	btnH1.onclick = function(){
		if(BG.style.display!="block"){
			BG.style.display="block";
			pop.style.display="block";
		}
	};
	btnH2.onclick = function(){
		if(BG.style.display!="block"){
			BG.style.display="block";
			pop.style.display="block";
		}
	};
	btnJ1.onclick = function(){
		if(BG.style.display!="block"){
			BG.style.display="block";
			pop.style.display="block";
			pop.innerHTML = '<iframe src="source/Jproj1/index.html" id="Jproj1"></iframe>';
			pop.style.marginLeft = "-285px";
			pop.style.marginTop = "-177px";
		}
	};
	btnJ2.onclick = function(){
		if(BG.style.display!="block"){
			BG.style.display="block";
			pop.style.display="block";
			pop.innerHTML = '<iframe src="source/Jproj2/index.html" id="Jproj2"></iframe>';
			pop.style.marginLeft = "-100px";
			pop.style.marginTop = "-135px";
		}
	};
	btnS1.onclick = function(){
		if(BG.style.display!="block"){
			BG.style.display="block";
			pop.style.display="block";
			pop.innerHTML = '<iframe src="source/Sproj1/brush.html" id="Sproj1"></iframe>';
			pop.style.marginLeft = "-225px";
			pop.style.marginTop = "-177px";
		}
	};
	btnS2.onclick = function(){
		if(BG.style.display!="block"){
			BG.style.display="block";
			pop.style.display="block";
			pop.innerHTML = '<iframe src="source/Sproj2/wonderland.html" id="Sproj2"></iframe>';
			pop.style.marginLeft = "-480px";
			pop.style.marginTop = "-288px";
		}
	};
	btnClose.onclick = function(){
		if(BG.style.display!="none"){
			BG.style.display="none";
			pop.style.display="none";
			pop.innerHTML = '';
		}
	};
	BG.onclick = function(){
		if(BG.style.display!="none"){
			BG.style.display="none";
			pop.style.display="none";
			pop.innerHTML = '';
		}
	};
}
