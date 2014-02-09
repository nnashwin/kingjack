$(document).ready(function() {
	//patience is a virture or something
	var deck_position = $('#guiDeck').position();
	var top_card_count = 0;
	var btm_card_count = 0;

	//Buttons & actions
	$('#strt_btn').on("click", function() {
		console.log("Start Game");
		$(this).hide();
		initGame();
	});

	$('#hit').on("click", function() {
		console.log("Pressed Hit");
	});

	$('#hold').on("click", function() {
		console.log("Pressed Hold");
	});


	//Debug Tools
	$('#db-deal-top').on("click", function() {
		guiDealCard("top-player");
	});

	$('#db-deal-btm').on("click", function() {
		guiDealCard("btm-player");
	});

	// Functions
	// 1. Hand Creation
	// function guiBuildHand(player) {
	// 	var which_player = player;
	// 	for (var i = 1; i < 6; i++) {
	// 		$('#' + which_player).append("<div class=\"guiCard\" id=\"" + which_player + "-" + i + "\"></div>");
	// 	}
	// }

	function guiInitHands() {
		guiBuildHand("top-player");
		guiBuildHand("btm-player");
		$('.guiCard').fadeTo(0, 0);
	}

	// 2. Dealing Triggers
	function guiDealCard(player) {

		//get Card here

		var which_player = player;
		var which_card = ++top_card_count;
		if (which_player === "btm-player") {
			which_card = ++btm_card_count;
		}
		$('#' + which_player + "-" + which_card).fadeTo(1000, 1);
	}

	// 3. Restart game

	//Initialize
	guiInitHands();

	//beta brah
	var card_pos = $('#top-player-1').position();
	$('#guiDeck').animate({
		top: card_pos.top,
		left: card_pos.left
	}, 10000);

});