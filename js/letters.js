$(function () {
	setTimeout(generateGrid, 100);
});

function generateGrid() {
	var letters = [["48", "0"], ["49", "1"], ["50", "2"], ["51", "3"], ["52", "4"], ["53", "5"], ["54", "6"], ["55", "7"], ["56", "8"], ["57", "9"], ["65", "a"], ["66", "b"], ["67", "c"], ["68", "d"], ["69", "e"], ["70", "f"], ["71", "g"], ["72", "h"], ["73", "i"], ["74", "j"], ["75", "k"], ["76", "l"], ["77", "m"], ["78", "n"], ["79", "o"], ["80", "p"], ["81", "q"], ["82", "r"], ["83", "s"], ["84", "t"], ["85", "u"], ["86", "v"], ["87", "w"], ["88", "x"], ["89", "y"], ["90", "z"]];
	
	var columns = $(window).width() / 10;
	var rows = ($(window).height() / 16) - 1;
	
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < columns; j++) {
			var letter = letters[Math.floor(Math.random() * (letters.length - 1))];
			$("<span class='" + letter[0] + "'>" + letter[1] + "</span>").appendTo("#ascii");
		}
		$("<br />").appendTo("#ascii");
	}

	$(window).keyup(function(event) {
		var character = event.which;
		//alert(character);
		
		$("." + event.which).animate({color: "#FFF"}, 750).animate({color: "#222"}, 900);
	});
	
	$("#loading").hide();
}