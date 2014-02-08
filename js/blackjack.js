//this function shuffles array of cards
var array = [1, 3, 5, 7, 6, 8, 9, 0, 8, 7, 6, 5, 4, 3, 2];

function shuffle(array) {
	//
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
console.log(shuffle(array));