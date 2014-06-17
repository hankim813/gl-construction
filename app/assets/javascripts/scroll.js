$(document).ready(function() {
	$("a[target='#top']").click(function() {
  $("html, body").animate({ scrollTop: 300 }, "slow");
  return false;
});
});
