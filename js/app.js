//$(function(){

let $input = $('input');
let $form = $('form');
let $board = $('#board');
let yourName = "";
let $matrix;
let sq1 = null; 
let sq2 = null;
let sq1Prev;
let sq2Prev;
let x = true; 
let colors = ["rgb(218, 148, 255)", "rgb(174, 165, 255)", "rgb(118, 187, 255)", "rgb(57, 209, 255)"];



// name input
// on click of submission of name push into h1 in game/selectionscreen
$form.submit(function(event){
	event.preventDefault(); 
	yourName = $input.val(); 
	$('h1').text(yourName);
	$('#landing').fadeOut('slow');
	$('h1').fadeIn(3500); 
	$('#selectionscreen').fadeIn(4000);
});
// gradient matrix
// this creates a grid based on parameter n.
function colorMatrix(){
	for(let i = 0; i < 16; i++){
		const row = Math.floor(i/colors.length);
		$matrix = $("<div></div>");
		$matrix.addClass('matrix ' + row );
		$matrix.click(swap);
		$matrix.css('background', colors[Math.floor(i/colors.length)]);
		$board.append($matrix);
	}
}
// color scrambler 
// // shuffler from the high low game?
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
	}else if (($(this)[0] == sq1[0])&&(x === false)){
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

// 
function winner(){
	let win = true; 
	$matrix = $('.matrix');
	$matrix.each(function(i){
		if (!$(this).hasClass(`${Math.floor(i / colors.length)}`)){
			win = false;
		}})
	return win;
}

colorMatrix(); 
colorScrambler(); 
//winner();
//});

