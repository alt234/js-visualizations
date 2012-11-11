$(function () {
	generateGrid();
});

function generateGrid() {
	var timeout = 300;
	
	setInterval(function() {
		timeout = Math.round(Math.random() * 500) + 1;
	}, 3000);
	
	var shimmer = function() {
		var x = Math.floor(Math.random() * ($(window).width() + 1));
		var y = Math.floor(Math.random() * ($(window).height() + 1));

		$("<span style='position: absolute; top:" + y + "px; left:" + x + "px;'>*</span>")
			.appendTo("#ascii")
			.animate({color: "white"}, 700)
			.animate({color: "purple"}, 2000)
			.animate({color: "#222"}, 4000);

		setTimeout(shimmer, timeout);
	}
	
	$("#loading").hide();
	
	shimmer();
}