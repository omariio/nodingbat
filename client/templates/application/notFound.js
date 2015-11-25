window.addEventListener('load', eventWindowLoaded, false);

var videoEl;
var videoDiv;

Template.notFound.rendered = function(){
  globalApp();
}

function eventWindowLoaded(){
	// create HTML elements in DOM tree
	videoEl = document.createElement("video");
	videoDiv = document.createElement("div");
	document.body.appendChild(videoDiv);
	videoDiv.appendChild(videoEl);

	// display video only on canvas
	videoDiv.setAttribute("style", "display:none");

	// preload video
	videoEl.addEventListener("canplaythrough", videoLoaded, false);

	// set video attributes
	videoEl.setAttribute("src", "baby.mp4");
	videoEl.setAttribute("autoplay", "autoplay");
	videoEl.setAttribute("loop", "loop");
	videoEl.setAttribute("muted", "muted");
}

function globalApp(){

	var canvas = document.querySelector("#canvas");
	if(canvas.getContext){
		var ctx = canvas.getContext("2d");
		var w = canvas.width, h = canvas.height;
		var posX = 0
		var diffx = 5;

		function drawScreen(){
			ctx.drawImage(videoEl, posX, 0);
		}

		function gameLoop(){
			window.setTimeout(gameLoop, 20);
			drawScreen();
			if( posX > w ) posX = -w;
			posX += diffx;
		}

		// start video
		videoEl.play();
		if(videoEl.ended) videoEl.play();

		// loop video
		gameLoop();

	}

}
