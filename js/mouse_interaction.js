var grid;

$(function () {
	generateGrid();
});

function generateGrid() {	
	grid = new Array();
		
	var columns = $(window).width() / 10;
	var rows = ($(window).height() / 16) - 1;
	
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < columns; j++) {
			//grid[j] = $("<span>&#9608;</span>").appendTo("#ascii");
			grid[j] = $("<span>#</span>").appendTo("#ascii");
			
			grid[j].mouseover(function () {
				$(this).animate({color: "red"}, 700);
			});
			
			grid[j].mouseout(function () {
				$(this).animate({color: "blue"}, 2000).animate({color: "#222"}, 4000);
			});
		}
		$("<br />").appendTo("#ascii");
	}
}