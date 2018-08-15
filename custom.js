

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
	
	
	
	
	
	//Modal pop up for sticks page	
	
	try {
		
		addFlexChart();  
	
		function addFlexChart () {
			if(window.location.href.indexOf("hockey-sticks") > -1) {
				var modaldiv = $('<span class="modal-custom-popup"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32.07px" viewBox="0 0 32 32.07" xml:space="preserve"><path d="M16,21.025c-2.836,0-5.144-2.238-5.144-4.99s2.307-4.99,5.144-4.99c2.836,0,5.144,2.238,5.144,4.99 S18.836,21.025,16,21.025z M16,12.828c-1.854,0-3.361,1.439-3.361,3.208c0,1.768,1.508,3.207,3.361,3.207s3.36-1.438,3.36-3.207 C19.36,14.267,17.854,12.828,16,12.828z"></path><path d="M16,25.114c-8.175,0-14.616-8.184-14.886-8.532L0.69,16.036l0.424-0.546C1.384,15.141,7.825 6.956,16,6.956c8.175,0,14.616,8.185,14.886,8.533l0.424,0.546l-0.424,0.546C30.615,16.93,24.175,25.114,16,25.114z M2.981,16.036c1.555,1.78,6.87,7.295,13.019,7.295c6.161,0,11.467-5.514,13.02-7.294c-1.556-1.78-6.871-7.298-13.02-7.298S4.537,14.255,2.981,16.036z"></path></svg></span><div class="modal-dialog-custom"><img src="https://i1.adis.ws/i/bauer/Pop-Up-Flext-Chart-Mat" style="display:none;" /><div class="modal-custom-image" data-scale="1.6" data-image="https://i1.adis.ws/i/bauer/Pop-Up-Flext-Chart-Mat"></div><span class="modal-custom-close">&nbsp;</span><div>');
				$('#product-content .c-product-variations ul').children('li.variant-button-group').eq(1).find('label').append(modaldiv);
	
				$( ".modal-custom-popup" ).click(function(event) {
					event.preventDefault();
					$(this).next('.modal-dialog-custom').toggle();
				});
			
				$( ".modal-custom-close" ).click(function() {
					$('.modal-dialog-custom').css("display","none");
				});
	
				$('.modal-custom-image')
					.on('mouseover', function(){
						$(this).children('.custom-zoom').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
					})
					.on('mouseout', function(){
						$(this).children('.custom-zoom').css({'transform': 'scale(1)'});
					})
					.on('mousemove', function(e){
						$(this).children('.custom-zoom').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
					})
					.each(function(){
					$(this)                
						.append('<div class="custom-zoom"></div>')
						.children('.custom-zoom').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
					})	  
			}
		}
	
		var targetNode = document.getElementById('product-content');
		var config = { attributes: true, childList: true, subtree: true };
		var callback = function(mutationsList) {
			if($('.modal-custom-popup').length  == 0) {
				addFlexChart();
			}
			if($('.heads-up-helmet').length == 0) {
				console.log("added style")
			}
		}
		var observer = new MutationObserver(callback);  
		observer.observe(targetNode, config);
	
	} catch (e) {}	

	try {

		function disclaimerPopUP() {

			var helmetpopup = $('<div class="disclaimer-popup" style="display:none"><div class=".c-call-to-action-grid__heading">Heads Up!</div><p>For the best fit, we recommend you visit your local retailer.</p><div class="disclaimer-popup-links"><a title="Find a Store" class="c-button c-button--tertiary-outline c-button--full-width" href="https://staging-na01-peakachievementathletics.demandware.net/s/Bauer/en-US/stores"><svg class="c-icon c-icon-location-blue" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-location-blue"></use></svg>Find a Store</a><button id="add-to-cart" type="submit" title="Add to Cart" value="Add to Cart" class="c-button c-product-details__add-to-cart-button add-to-cart"><svg class="c-icon c-icon-cart-white" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-cart-white"></use></svg>Add to Cart</button></div></div>');
			var skatestpopup = $('<div class="disclaimer-popup"><div class=".c-call-to-action-grid__heading">Heads Up!</div><p>We recommend you visit your local retailer to get the proper fit. you may also incur additional cost for sharpening and banking your skates if you do not purchase directly from one of our retail partners.</p></div>');
			$(".c-product-details__quantity-add-to-cart").before(helmetpopup);

			
		}

		var clicked = true;

		var disableClick = function(e) {
			if($('.disclaimer-popup').length  == 1 && clicked) {
				e.stopPropagation();
				$('.disclaimer-popup').toggle();
				$(this).removeClass("c-button c-product-details__add-to-cart-button add-to-cart");
				$(this).addClass("c-button c-button--disabled c-product-details__add-to-cart-button js-add-to-cart-button-disabled");
				$(this).attr("disabled","disabled");
				clicked = false;

			}else {
				$('.disclaimer-popup').hide();
				var enableclick = $('.c-button.c-button--disabled.c-product-details__add-to-cart-button.js-add-to-cart-button-disabled');
				enableclick.removeClass("c-button c-button--disabled c-product-details__add-to-cart-button js-add-to-cart-button-disabled");
				enableclick.addClass("c-button c-product-details__add-to-cart-button add-to-cart");
				enableclick.removeAttr("disabled");
			}
		}
	
		var targetNode = document.getElementById('product-content');
		var config = { attributes: true, childList: true, subtree: true };
		var callback = function(mutationsList) {
			if($('.disclaimer-popup').length  == 1) {
				$('#add-to-cart.c-button.c-product-details__add-to-cart-button.add-to-cart').off('click');
				$('#add-to-cart.c-button.c-product-details__add-to-cart-button.add-to-cart').on('click', disableClick);
			}else if( clicked ){
				disclaimerPopUP();
				$('#add-to-cart.c-button.c-product-details__add-to-cart-button.add-to-cart').on('click', disableClick);
			}else {
			}
		}
		var observer = new MutationObserver(callback);  
		observer.observe(targetNode, config);
		

	} catch (e) {}
	
	}); // DOM Ready