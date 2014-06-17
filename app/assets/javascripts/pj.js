$(document).ready(function() {
	
	$('#project1').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#show-p1').delay(300).removeClass("hide")
		$('#goback').click(function() {
			$('#show-p1').addClass("hide")
			$('#the-projects').fadeIn("slow")
		});
	});
	$('#project2').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#show-p2').delay(300).removeClass("hide")
		$('#goback2').click(function() {
			$('#show-p2').addClass("hide")
			$('#the-projects').fadeIn("slow")
		});
	});
	$('#project3').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#show-p3').delay(300).removeClass("hide")
		$('#goback3').click(function() {
			$('#show-p3').addClass("hide")
			$('#the-projects').fadeIn("slow")
		});
	});
	$('#project4').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#show-p4').delay(300).removeClass("hide")
		$('#goback4').click(function() {
			$('#show-p4').addClass("hide")
			$('#the-projects').fadeIn("slow")
		});
	});
	$('#project5').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#show-p5').delay(300).removeClass("hide")
		$('#goback5').click(function() {
			$('#show-p5').addClass("hide")
			$('#the-projects').fadeIn("slow")
		});
	});
	$('#view-completed-projects').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#cour').fadeOut("slow")
		$('#realized, #show-completed-proj').delay(300).removeClass("hide")
		$('#goback6').click(function() {
			$('#realized, #show-completed-proj').addClass("hide")
			$('#cour, #the-projects').fadeIn("slow")
		});
	});
});



