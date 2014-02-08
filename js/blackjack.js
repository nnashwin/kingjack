function Deck(){

	this.hearts = createSuit("H");
	this.spades = createSuit("S");
	this.clubs = createSuit("C");
	this.diamonds = createSuit("D");
	this.deck = createDeck(hearts,spades,clubs,diamonds);
	
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
	};

	function createDeck(Hearts, Spades, Clubs, Diamonds){
		var deck = [];
		for(var i =0; i<4; i++ ){
			var suit = arugments[i];
			for(var k =0; k<13; k++){
				deck.push(suit[k]);
			}
		}
		return deck;
	}
}
