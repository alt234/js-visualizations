var grid;

$(function () {
	generateGrid();
});

function generateGrid() {	
	grid = new Array();
	
	var columns = $(window).width() / 10;
	var rows = ($(window).height() / 16) - 1;
	
	var i = 0;
	var j = 0;
	
	var add = function() {
		i++;
		
		if (i % columns === 0) {
			grid[i] = $("<span>#</span>").appendTo("#ascii");
			$("<br />").appendTo("#ascii");
			j++;
		}
		else {
			grid[i] = $("<span>#</span>").appendTo("#ascii");
		}
		
		if (i == columns) shimmer();
		
		if (j < rows) {
			setTimeout(add, 5);
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
		var color = colors[Math.floor(Math.random() * (colors.length - 1))];

		grid[rand].animate({color: colors[0]}, 700);
		
		setTimeout(shimmer, 20);
	}
	
	add();
}