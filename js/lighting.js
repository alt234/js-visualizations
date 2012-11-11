var grid;

$(function () {
	setTimeout(generateGrid, 100);
});

function generateGrid() {
	grid = new Array();
	
	var letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	
	var columns = $(window).width() / 10;
	var rows = $(window).height() / 16;
	
	for (var i = 0; i < rows; i++) {
		grid[i] = new Array();
		for (var j = 0; j < columns; j++) {
			var letter = letters[Math.floor(Math.random() * (letters.length - 1))];
			grid[i][j] = $("<span>" + letter + "</span>").appendTo("#ascii");
		}
		$("<br />").appendTo("#ascii");
	}
	
	var timeout = 1000;
	setInterval(function() {
		timeout = Math.round(Math.random() * (1500 - 100)) + 1500;
	}, 500);
	
	var shimmer = function() {
		var randRow = Math.floor(Math.random() * grid.length);
		var randCol = Math.floor(Math.random() * grid[randRow].length);
		
		// Center
		grid[randRow][randCol].animate({color: "#FFF"}, 750).animate({color: "#222"}, 900);
		
		// left
		try { grid[randRow][randCol-1].animate({color: "#999"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		try { grid[randRow][randCol-2].animate({color: "#666"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		try { grid[randRow][randCol-3].animate({color: "#333"}, 900).animate({color: "#222"}, 400); } catch(err) {}
		
		// Up
		try { grid[randRow-1][randCol].animate({color: "#999"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		try { grid[randRow-2][randCol].animate({color: "#666"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		try { grid[randRow-3][randCol].animate({color: "#333"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		
		// Down
		try { grid[randRow+1][randCol].animate({color: "#999"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		try { grid[randRow+2][randCol].animate({color: "#666"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		try { grid[randRow+3][randCol].animate({color: "#333"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		
		// Right
		try { grid[randRow][randCol+1].animate({color: "#999"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		try { grid[randRow][randCol+2].animate({color: "#666"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		try { grid[randRow][randCol+3].animate({color: "#333"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		
		
		try { grid[randRow-1][randCol-1].animate({color: "#666"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		try { grid[randRow-1][randCol+1].animate({color: "#666"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		
		try { grid[randRow+1][randCol-1].animate({color: "#666"}, 900).animate({color: "#222"}, 600); } catch(err) {}
		try { grid[randRow+1][randCol+1].animate({color: "#666"}, 900).animate({color: "#222"}, 600); } catch(err) {}

		setTimeout(shimmer, timeout);
	}
	
	$("#loading").hide();
	
	shimmer();
}