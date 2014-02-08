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
	};

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
	};

	/**
	* shuffle(array)
	*
	* params 
	* str array = a deck array to shuffle
	*
	* returns 
	* an array of a shuffled deck
	*/
	function shuffle(array) {
	
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
	};

	/**
	* deal(num)
	*
	* params 
	* integer num = a number of dealt cards. (can only be ints)
	*
	* returns 
	* an array of a dealt cards
	* null if it can't deal any more cards 
	*/
	function deal(num){
		//make sure the cards are whole cards
		this.num = Math.floor(num);
		var i = 0;
		var dealt = [];

		//check if the deck is empty 
		if(deck.length === 0){
			alert("no more cards in the deck");
			return null;
		}
		//push each card to a hand
		while(i < num){
			dealt.push(deck.shift());
			i++;
		}

		return dealt;
	};

	function addToDeck(importDeck){
		
		for(var i = 0; i < deck.shuffledeck.length; i++ ){
			this.deck.push(importDeck[i]);
		}

		this.deck.shuffle(this.deck);
		return this.deck;
	}
}
$(document).ready(){
	var d = new Deck();


}
