//$(function(){

const $input = $('input');
const $form = $('form');
let $board = $('#board');
let yourName = "";
let $matrix;
let b; 
let sq1 = null; 
let sq2 = null;
let sq1Prev;
let sq2Prev;
let x = true; 
let count = 10;
let colors = ["rgb(218, 148, 255)", "rgb(174, 165, 255)", "rgb(118, 187, 255)", "rgb(57, 209, 255)"];

//const colors = {
//b1 : ["rgb(218, 148, 255)", "rgb(174, 165, 255)", 
//	"rgb(118, 187, 255)", "rgb(57, 209, 255)"],
//
//b2 :  ["rgb(255, 142, 255)", "rgb(255, 173, 255)", 
//	"rgb(255, 196, 255)", "rgb(255, 220, 255)"],
//
//b3 : ["rgb(135, 233, 105)", "rgb(167, 203, 94)", 
//	"rgb(198, 185, 83)", "rgb(236, 157, 70)"],
//
//b4 : ["rgb(14, 194, 237)", "rgb(11, 176, 242)", 
//	"rgb(8, 155, 247)", "rgb(1, 135, 252)"],
//
//b5 : ["rgb(135, 233, 105)", "rgb(167, 203, 94)", 
//	"rgb(198, 185, 83)", "rgb(236, 157, 70)", "rgb(236, 1157, 70)"]
//};

// name input
// on click of submission of name push into h1 in game/selectionscreen
$form.submit(function(event){
	event.preventDefault(); 
	yourName = $input.val(); 
	$('h1').text(yourName);
	$('#landing').fadeOut('slow');
	$('h1').fadeIn(3500); 
//	$('#selectionscreen').fadeIn(4000);
	$('#game').fadeIn(4000);
//	timingScramble();
//	selectionBoards();
});

//these selectionBoard function creates boards for the user to select from an arays in the colors object
// loops through and names each board according to their object key name. 
// values are the array of colors for the matrix's 
function selectionBoards(){
	for (let i = 0; i < 5; i++){
		let $selections = $('<div>'); 
		$selections.addClass('selections');
		$('#selectionscreen').append($selections);
		$selections.click(function(){
			// for each of the ojects assign to one selection board
			// append image, on click push to the colorMatrix as an argument
			// **change parameter for color matrix insert it instead of colors.length
			
		})
	}
	
}


// gradient matrix
// this creates a grid based on parameter n.
// Math.floor(i/colors.length) allows to add color to the board depending on the length of the color array
// by adding the color to the div's this way it ensure every color in a row be the same color. 
function colorMatrix(){
	for(let i = 0; i < colors.length*colors.length; i++){
		const row = Math.floor(i/colors.length);
		$matrix = $("<div></div>");
		$matrix.addClass('matrix ' + row );
		$matrix.click(swap);
		$matrix.css('background', colors[Math.floor(i/colors.length)]);
		$board.append($matrix);
	}
}



//function timingScramble() {
//	setInterval(
//  		if (count === 1) {
//			clearInterval();
//			colorScrambler(); 
//		}else{
//  			count--;
//			$('.timer').text(count);
//		}
//	
//, 1000);
//}

$('#scramble').click(colorScrambler );
// color scrambler 
function colorScrambler(){
	$matrix = $('.matrix');
	let arr = $matrix.sort(() => 0.5 - Math.random());
	arr.appendTo($board);
}

// function allows to swap div's based on their position in the grid
// if statement allows to select first div, 
// else if allows you to unselect the initial div. 
// else swaps the chosen div with a second div to take it's place. 
// BUG :X the .prev and .insertAfter works for all div's in the board EXECPT
// EXCEPT the very first div which has no previous div to latch onto. 

function swap(){
	if (x === true){
		sq1 = $(this);
		sq1Prev = sq1.prev();
		sq1.addClass('selected');
		return x = false;
	}else if (($(this)[0] === sq1[0])&&(x === false)){
		sq1.removeClass('selected');
		return x = true;
		}
	else{
		sq2 = $(this); 
		sq2Prev = sq2.prev();
		sq1.insertAfter(sq2Prev);
		sq2.insertAfter(sq1Prev);
		sq1.removeClass('selected');
		console.log(winner());
		return x = true; 
		}
}

// compares the state of the board on every click as envoked in the swap 
// swap function evoked it everytime in the else statement
// it compares the state of the board to the length of the color array
function winner(){
	let win = true; 
	$matrix = $('.matrix');
	$matrix.each(function(i){
		if (!$(this).hasClass(`${Math.floor(i / colors.length)}`)){
			win = false;
		}else{
//		$('h3').fadeIn();
		return win;
		}
	});
}

colorMatrix(); 
//});

