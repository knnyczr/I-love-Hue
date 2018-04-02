//$(function(){

//let $body = $('body');
let $input = $('input');
let $form = $('form');
let $board = $('#board');
let yourName = "";
let $matrix;
let sq1 = []; 
let sq2 = []; 
let x = true; 
let colors = ["rgb(218, 148, 255)", "rgb(174, 165, 255)", "rgb(118, 187, 255)", "rgb(57, 209, 255)"];



// name input
// on click of submission of name push into h1 in game/selectionscreen
$form.submit(function(event){
	event.preventDefault(); 
	yourName = $input.val(); 
	$('h1').push(yourName);
});


// gradient matrix
function colorMatrix(){
	for(let i = 0; i < 16; i++){
		const row = Math.floor(i/colors.length);
		$matrix = $("<div></div>");
		$matrix.addClass('matrix ' + row );
		$matrix.attr('id', i);
		$matrix.click(swap);
		$matrix.css('background', colors[Math.floor(i/colors.length)]);
		$board.append($matrix);
	}
}


// winning combination function
// // array analysis from tic tac toe?



// color scrambler 
// // shuffler from the high low game?
function colorScrambler(){
	$matrix = $('.matrix');
	let arr = $matrix.sort(() => 0.5 - Math.random());
	arr.appendTo($board);
}

function swap(){
	if (x === true){
		sq1.pop();
		sq1.push($(this)); 
		sq1.forEach(() => sq1[0].addClass('selected'));
//		debugger;
		return x = false;
	}else if (($(this) === sq1[0])&&(x === false)){
		sq1.forEach(() => sq1[0].removeClass('selected'));
		sq1.pop();
//		debugger; 
		return x = true;
		}
	else{
		sq2.pop();
		debugger; 
		sq2.push($(this)); 
		sq2.forEach(() => sq2[0].addClass('selected'));
		return x = true; 
		}
}



colorMatrix(); 
colorScrambler(); 
//});

