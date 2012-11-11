var grid;

$(function () {
	setTimeout(generateGrid, 100);
});

function generateGrid() {
	grid = new Array();
		
	var columns = Math.floor($(window).width() / 10);
	var rows = Math.floor($(window).height() / 16);
	
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < columns; j++) {
			//grid[j] = $("<span>&#9608;</span>").appendTo("#ascii");
			grid[j] = $("<span>#</span>").appendTo("#ascii");
			
			grid[j].mouseover(function () {
				$(this).animate({color: "white"}, 700);
			});
			
			grid[j].mouseout(function () {
				$(this).animate({color: "purple"}, 2000).animate({color: "#222"}, 4000);
			});
		}
		$("<br />").appendTo("#ascii");
	}
	
	$("#loading").hide();
}