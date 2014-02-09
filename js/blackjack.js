function Deck(){

	//create custom decks
	
	//standard deck
	this.hearts = createSuit("H");//hearts is an object inside object Deck
	this.spades = createSuit("S");
	this.clubs = createSuit("C");
	this.diamonds = createSuit("D");
	this.deck = createDeck(this.hearts,this.spades,this.clubs,this.diamonds);//object deck merges the Deck (note the capital) together
	this.shuffledeck = shuffle(this.deck);

	/**
	* createSuit(suitname)
	*
	* params 
	* str suitName = a name you want to create.
	*
	* returns 
	* an array of a created suit. 
	*/
	function createSuit(suitName){
		//create the suit array
		var cardSuit = [];

		//get the first 10 numbers autogenerate
		for(var i=2; i<=10; i++){

			cardSuit.push(i+"_"+suitName);
		}

		//add the final special cards
		cardSuit.push("J_"+suitName);
		cardSuit.push("Q_"+suitName);
		cardSuit.push("K_"+suitName);
		cardSuit.push("A_"+suitName);

		//return the array
		return cardSuit;
	}

	/**
	* createDeck(suits)
	*
	* params 
	* array suits = a variable number of arrays to make an array, must be at least four
	*
	* returns 
	* array of the deck 
	* null if the suits aren't at least 13 cards long 
	*/
	function createDeck(suits){
		var cDeck = [];
		var suitsLength = arguments.length;
		var suitHand = "";
		
		//check how long suits are needs to pass at least two
		if(suitsLength <=1 ){
			return null;
		}
		//go through all the array
		for(var i =0; i < suitsLength; i++ ){
			//get the suit itself
			suitHand = arguments[i];
			//loop through all the cards
			for(var k =0; k<13; k++){
				//add it to the deck
				cDeck.push(suitHand[k]);
			}
		}
		//return the created deck
		return cDeck;
	}

	/**
	* shuffle(array)
	*
	* params 
	* str array = a deck array to shuffle
	*
	* returns 
	* an array of a shuffled deck
	*/
	function shuffle (array) {
	
		var m = array.length;
		var t;//this is an element that is going to be switched 
		var i;//this is another element that is going to be switched

		while (m > 0) {

			// Pick a remaining element..
			i = Math.floor(Math.random() * m--);

			// swapping
			t = array[m];
			array[m] = array[i];
			array[i] = t;

		}

		return array;
	}

	/**
	* deal(num)
	*
	* params 
	* integer num = a number of dealt cards. (can only be ints)
	*
	* returns 
	* an array of dealt cards
	* null if it can't deal any more cards 
	*/
	this.deal = function(num){
		//make sure the cards are whole cards
		this.num = Math.floor(num);
		var i = 0;
		var dealt = [];

		//check if the deck is empty 
		if(this.deck.length === 0){
			alert("no more cards in the deck");
			return null;
		}
		//push each card to a hand
		while(i < num){
			dealt.push(this.deck.shift());
			i++;
		}

		return dealt;
	};

	this.addToDeck = function(importDeck){
		
		for(var i = 0; i < deck.shuffledeck.length; i++ ){
			this.deck.push(importDeck[i]);
		}

		this.deck.shuffle(this.deck);
		return this.deck;
	};
}

function blackJack() {
	this.handvalue = function(dealthand) {
		var hand = 0;
		var value = 0;
		var currentCard;
		for (i=0; i<dealthand.length; i++) {
			currentCard = dealthand[i].substring(0,2);
			switch (currentCard)
			{
				case "10": 
				case "J_": 
				case "Q_": 
				case "K_":  value = 10;
							break;

				case "2_": value = 2;
					break;
				case "3_": value = 3;
					break;
				case "4_": value = 4;
					break;
				case "5_": value = 5;
					break;
				case "6_": value = 6;
					break;
				case "7_": value = 7;
					break;
				case "8_": value = 8;
					break;
				case "9_": value = 9;
					break;
				case "A_": if ( hand > 10) {
					 value = 1;
				}else{ value= 11;
					}
					break;
			}
			hand+=value;
		}
		return hand;
	};

	this.hit = function(playerHand, deck){
		var currentHand = [];
		if(playerHand.length == 0){
			currentHand = deck.deal(2);
		}
		else if(playerHand.length != 5){
			currentHand = deck.deal(1);
		}
		else{
			alert("no more cards allowed")
		}
		return currentHand;
	}
}

$(document).ready(function(){

	var currentHand = [];
	var playerHand =[];
 	var computerHand = [];
 	var gameDeck;
 	var game;
	//patience is a virture or something
	var deck_position = $('#guiDeck').position();
	var top_card_count = 0;
	var btm_card_count = 0;

	//Buttons & actions
	$('#strt_btn').on("click", function() {
		console.log("Start Game");
		$(this).hide();
		game = new blackJack();
		gameDeck = new Deck();
	});

	$('#hit').on("click", function() {
		currentHand = game.hit(playerHand, gameDeck);
		for(var h = 0; h<currentHand.length; h++){
			playerHand.push(currentHand[h]);
		}
		console.log(playerHand);
		if(playerHand.handvalue(playerHand) == 21{
			alert("you win")
		})
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



	// 2. Dealing Triggers
	function guiDealCard(player) {

		//get Card here

		var which_player = player;
		var which_card_position = ++top_card_count;
		if (which_player === "btm-player") {
			which_card = ++btm_card_count;
		}
		$('#' + which_player + "-" + which_card_position).fadeTo(1000, 1);
	}


});

