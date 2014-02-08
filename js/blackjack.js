function Deck(){
	
	this.hearts = createSuit("H");//hearts is an object inside object Deck
	this.spades = createSuit("S");
	this.clubs = createSuit("C");
	this.diamonds = createSuit("D");
	this.deck = createDeck(this.hearts,this.spades,this.clubs,this.diamonds);//object deck merges the Deck (note the capital) together
	this.shuffledeck = shuffle(this.deck);

	function createSuit(suitName){
		var cardSuit = [];
		for(var i=2; i<=10; i++){
			cardSuit.push(i+"_"+suitName);
		}
		cardSuit.push("J_"+suitName);
		cardSuit.push("Q_"+suitName);
		cardSuit.push("K_"+suitName);
		cardSuit.push("A_"+suitName);
		return cardSuit;
	}

	function createDeck(Hearts, Spades, Clubs, Diamonds){
		var deck = [];
		for(var i =0; i<4; i++ ){
			var suit = arguments[i];
			for(var k =0; k<13; k++){
				deck.push(suit[k]);
			}
		}
		return deck;
	}


	//this function shuffles array of cards

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
	}

	function deal(num){
		var i = 0;
		var dealt = [];
		if(deck.length === 0){
			alert("no more cards in the deck");
		}
		else{
			while(i < num){
				dealt.push(deck.shift());
				i++;
			}
		}
		return dealt;
	}
}
var d = new Deck();
