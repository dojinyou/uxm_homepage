/*
	Telephasic by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		normal: ['1081px', '1280px'],
		narrow: ['821px', '1080px'],
		narrower: ['737px', '820px'],
		mobile: ['481px', '736px'],
		mobilep: [null, '480px'],
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		speed: 300,
		alignment: 'center',
		noOpenerFade: true,
	});

	// Nav.

	// Buton.
	$(
		'<div id="navButton">' +
			'<a href="#navPanel" class="toggle"></a>' +
			'</div>'
	).appendTo($body);

	// Panel.
	$('<div id="navPanel">' + '<nav>' + $('#nav').navList() + '</nav>' + '</div>')
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			resetScroll: true,
			resetForms: true,
			side: 'top',
			target: $body,
			visibleClass: 'navPanel-visible',
		});
})(jQuery);

// var map;
// function initMap() {
// 	map = new google.maps.Map(document.getElementById('map'), {
// 		center = {lat:37.580251, lng:126.923447},
// 		zoom:8
// 	});
// }

