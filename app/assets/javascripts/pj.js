$(document).ready(function() {
	$('#show-p1').hide();
	$('#show-p2').hide();
	$('#show-p3').hide();
	$('#show-p4').hide();
	$('#show-p5').hide();
	$('#realized').hide();
	$('#show-completed-proj').hide();

	$('#project1').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#show-p1').delay(700).fadeIn("slow")
		$('#goback').click(function() {
			$('#show-p1').fadeOut("slow")
			$('#the-projects').delay(700).fadeIn("slow")
		});
	});

	$('#project2').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#show-p2').delay(700).fadeIn("slow")
		$('#goback2').click(function() {
			$('#show-p2').fadeOut("slow")
			$('#the-projects').delay(700).fadeIn("slow")
		});
	});

	$('#project3').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#show-p3').delay(700).fadeIn("slow")
		$('#goback3').click(function() {
			$('#show-p3').fadeOut("slow")
			$('#the-projects').delay(700).fadeIn("slow")
		});
	});

	$('#project4').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#show-p4').delay(700).fadeIn("slow")
		$('#goback4').click(function() {
			$('#show-p4').fadeOut("slow")
			$('#the-projects').delay(700).fadeIn("slow")
		});
	});

	$('#project5').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#show-p5').delay(700).fadeIn("slow")
		$('#goback5').click(function() {
			$('#show-p5').fadeOut("slow")
			$('#the-projects').delay(700).fadeIn("slow")
		});
	});

	$('#view-completed-projects').click(function() {
		$('#the-projects').fadeOut("slow")
		$('#cour').fadeOut("slow")
		$('#realized').fadeIn("slow")
		$('#show-completed-proj').delay(700).fadeIn('slow')
		$('#goback6').click(function() {
			$('#realized').fadeOut("slow")
			$('#show-completed-proj').fadeOut("slow")
			$('#cour').fadeIn("slow")
			$('#the-projects').delay(700).fadeIn("slow")
		});
	});

});



