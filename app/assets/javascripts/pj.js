$(document).ready(function() {
	$("#completed-proj").click(function() {
		$("#the-projects").fadeOut("slow")
	});

	$("#current-proj").click(function() {
		$("#the-projects").fadeIn("slow")
	});

});

