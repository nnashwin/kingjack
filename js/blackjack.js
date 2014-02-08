function Deck{
	var hearts = createSuit(H);
	var spades = createSuit(S);
	var clubs = createSuit(C);
	var diamonds = createSuit(D);

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
}
