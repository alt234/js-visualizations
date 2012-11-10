var grid;

$(function () {
	setTimeout(generateGrid, 100);
});

function generateGrid() {
	grid = new Array();
		
	var columns = $(window).width() / 10;
	var rows = ($(window).height() / 16) - 1;
	
	for (var i = 0; i < rows; i++) {
		grid[i] = new Array();
		for (var j = 0; j < columns; j++) {
			grid[i][j] = $("<span>*</span>").appendTo("#ascii");
		}
		$("<br />").appendTo("#ascii");
	}
	
	var timeout = 300;
	setInterval(function() {
		timeout = Math.round(Math.random() * 500) + 1;
	}, 3000);
	
	var shimmer = function() {
		var randRow = Math.floor(Math.random() * grid.length);
		var randCol = Math.floor(Math.random() * grid[randRow].length);

		grid[randRow][randCol].animate({color: "white"}, 700).animate({color: "purple"}, 2000).animate({color: "#222"}, 4000);

		setTimeout(shimmer, timeout);
	}
	
	$("#loading").hide();
	
	shimmer();
}