$(document).ready(function () {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
		},
	});
	$('.sub_menu > 	ul > li > a').click(function () {
		$('.on').removeClass('on');
		$(this).addClass('on');
	});
});
