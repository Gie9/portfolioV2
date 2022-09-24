$(document).ready(function(){
	/* ---------------------------------------------------------------------- */
	/*	Custom Functions
	/* ---------------------------------------------------------------------- */

	// Get the current year for the copyright
	$("#year").text(new Date().getFullYear());

	// Logo
	var $logo = $("#logo");

	// Show logo
	$(".menu .tabs a").click(function () {
		$logo.fadeIn("slow");
	});
	// Hide logo
	$(".tab-profile").click(function () {
		$logo.fadeOut("slow");
	});


	/* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */

	// Needed variables
	var $content = $("#content");

	// Run easytabs
	$content.easytabs({
		animate: true,
		updateHash: false,
		transitionIn: "slideDown",
		transitionOut: "slideUp",
		animationSpeed: 600,
		tabs: ".tab-menu",
		tabActiveClass: "active",
	});

	//Hover menu effect
	$(".tabs li a").hover(
		function () {
			$(this).stop().animate({ marginTop: "-0.625rem" }, 200);
		},
		function () {
			$(this).stop().animate({ marginTop: "0rem" }, 300);
		}
	);

	/* ---------------------------------------------------------------------- */
	/*	Resume
	/* ---------------------------------------------------------------------- */

	// Show/Hide Setting Gear
	var $sett = $(".setting-icon");
	var $btnStyle = $(".btn-style");
	
	// Hide icon setting
	$(".resume-x").click(function () {
		$sett.fadeOut("slow");
		$btnStyle.fadeOut("slow");
	});

	// Show icon setting
	$(".resume-set").click(function () {
		$sett.fadeIn("slow");
	});

	// Show/Hide Color Adjuste
	$(".setting-icon").click(function () {
		$($btnStyle).toggle();
	});


	// Change to Red
	$("#red-color").click(function () {
		$('.text-color').css("color","#cf455c");
		$('.bg-color').css("background-color","#cf455c");
		$('.brdr-color').css("border-color","#cf455c");
		$('.progress-bar').css("background-color","#cf455c");
	});

	// Change to Yellow
	$("#yellow-color").click(function () {
		$('.text-color').css("color","#FFB200");
		$('.bg-color').css("background-color","#FFB200");
		$('.brdr-color').css("border-color","#FFB200");
		$('.progress-bar').css("background-color","#FFB200");
	});

	// Change to Blue
	$("#blue-color").click(function () {
		$('.text-color').css("color","#2666CF");
		$('.bg-color').css("background-color","#2666CF");
		$('.brdr-color').css("border-color","#2666CF");
		$('.progress-bar').css("background-color","#2666CF");
	});

	// Change to Green
	$("#green-color").click(function () {
		$('.text-color').css("color","#42855B");
		$('.bg-color').css("background-color","#42855B");
		$('.brdr-color').css("border-color","#42855B");
		$('.progress-bar').css("background-color","#42855B");
	});



	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */
	$(".buttons").click(function () {
		$(this).addClass("active").siblings().removeClass("active");

		var filter = $(this).attr("data-filter");

		if (filter == "all") {
			$(".image").show(400);
		} else {
			$(".image")
				.not("." + filter)
				.hide(200);
			$(".image")
				.filter("." + filter)
				.show(400);
		}
	});
});