$(document).ready(function(){
	//patience is a virture or something

	//Buttons
	$('#strt_btn').on("click", function(){
		console.log("Start Game");
		$(this).hide();
		initGame();
	});

	$('#hit').on("click", function(){
		console.log("Pressed Hit");
	});

	$('#hold').on("click", function(){
		console.log("Pressed Hold");
	});

	$('#top-player-area').append("<div class=\"guiCard\"></div>");
	$('#top-player-area').append("<div class=\"guiCard\"></div>");
	$('#top-player-area').append("<div class=\"guiCard\"></div>");
	$('#top-player-area').append("<div class=\"guiCard\"></div>");
	$('#top-player-area').append("<div class=\"guiCard\"></div>");

	$('#btm-player-area').prepend("<div class=\"guiCard\"></div>");
	$('#btm-player-area').prepend("<div class=\"guiCard\"></div>");
	$('#btm-player-area').prepend("<div class=\"guiCard\"></div>");
	$('#btm-player-area').prepend("<div class=\"guiCard\"></div>");
	$('#btm-player-area').prepend("<div class=\"guiCard\"></div>");


});