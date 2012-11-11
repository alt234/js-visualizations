var grid;

$(function () {
	generateGrid();
});

function generateGrid() {	
	grid = new Array();
	
	var columns = Math.floor($(window).width() / 10);
	var rows = Math.floor($(window).height() / 16);
	
	var col = 0;
	var row = 0;
	
	var add = function() {
		col++;
		
		if (col % columns === 0) {
			grid[col] = $("<span>#</span>").appendTo("#ascii");
			$("<br />").appendTo("#ascii");
			row++;
		}
		else {
			grid[col] = $("<span>#</span>").appendTo("#ascii");
		}
		
		if (col === columns) shimmer();

		if (row < rows) {
			setTimeout(add, 3);
		}
    }

	var colors = new Array();
	colors[0] = "red";
	colors[1] = "blue";
	colors[2] = "green";
	colors[3] = "yellow";
	colors[4] = "orange";
	colors[5] = "#DDD";
	
	var shimmer = function() {
		var rand = Math.floor(Math.random() * (grid.length - 1));
		//var color = colors[Math.floor(Math.random() * (colors.length - 1))];

		grid[rand].animate({color: "white"}, 700).animate({color: "#05F2F2"}, 1500);
		
		setTimeout(shimmer, 20);
	}
	
	add();
}