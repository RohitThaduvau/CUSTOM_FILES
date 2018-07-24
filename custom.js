

$( document ).ready(function() {

	

//Add slide hint to slick slider	

try {

	$('.slick-slider').on('mouseenter', '.slick-slide', function (e) {

	$('.slick-track').stop().animate({left: "-25px" }, 500).delay(250);

	console.log('slick hover');

}).on('mouseleave', '.slick-slide', function (e) {

	$('.slick-track').stop().animate({left: "0px"}, 200);

});

} catch (e) {}

	



//Hide LiveChat on everything except for product related pages

try {

	$('.s-live-chat.livechat_button a').hide();

	if(window.location.href.match(/(hockey-|search)/) ) {

		$('.s-live-chat.livechat_button a').show();

	}

} catch (e) {}

	

	

	



}); // DOM Ready