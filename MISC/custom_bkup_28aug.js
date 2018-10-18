

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
	
		
	//Hide breadcrumb on MyBauer
	if(/mybauer-custom/.test(window.location.href)) {
		$('.breadcrumb').hide();
	}
	
	
	
	//Hide LiveChat on everything except for product related pages
	
	try {
	
		$('.s-live-chat.livechat_button').hide();
	
		if(window.location.href.match(/(hockey-|search)/) ) {
	
			$('.s-live-chat.livechat_button').show();
	
		}
	
	} catch (e) {}
	
	//Validate Region
	
	var validregion = false;
	var regionname = "en-US";
	var findstoreLink = "";
	
	function validateRegionNA() {
		var language_toggle = ["en-US/", "en-CA/", "fr-CA/", "ru/", "nl/", "sv/"];
		for ( var i=0; i< language_toggle.length ; i++ ) {
			if(window.location.href.indexOf(language_toggle[i]) > -1) {
				regionname = language_toggle[i];
				setLanguageRegion();
				addingStickCharts();
				addingStickyNav();
				addFindStoreBlock();
				validregion = true;
				break;
			}
		}
		if (!validregion) {
			hideCart();
		}
	}
	
	validateRegionNA();
	
	//setting region-language
	function setLanguageRegion() {
		try {
			if(window.location.href.indexOf("staging") > -1) {
				findstoreLink = '/s/Bauer/'+ regionname + 'stores';
			}else {
				findstoreLink = '/Bauer/'+ regionname + 'stores'
			}
		}catch(e){}
	}
	
	//add customer-service styling
	
	try {
		if(window.location.href.indexOf("bauer-support") > -1) {
			$( "#main" ).addClass( "customer-service" );
		} 
	}catch(e) {}
	
	//Hide cart
	
	function hideCart() {
		try {
			hideCartInNav();
			hideCartOnProductPage();
		}catch(e) {}
	}
	
	function hideCartInNav() {
		try {
			$('#mini-cart').remove();
		}catch(e) {}
	}
	
	function hideCartOnProductPage() {
		try {
			if($('#pdpMain').length == 1) {
				$('.c-product-details form').remove();
				$('.c-product-details__actions.product-actions').remove();
			}
		}catch(e) {}
	}
	
	//Sticky Nav - product pages
	
	function addingStickyNav() {
		try {
			if($('#pdpMain').length == 1) {
				addPushNavNotificationDesktop();
				addPushNavNotificationMobile();
			}
		}catch(e) {}
	}
	
	function addPushNavNotificationDesktop() {
		try {
			if($('#pdpMain').length == 1) {
				var notification = $('<div class="push-nav-notification" style="display:none;"><div class="push-nav-left"><img class="push-nav-logo" src=""  /><h2 class="push-nav-title"></h2></div><div class="push-nav-right"><div class="push-nav-price"></div><button id="add-to-cart-notification" type="submit" title="Add to Cart" value="Add to Cart" class="c-button c-product-details__add-to-cart-button add-to-cart"><svg class="c-icon c-icon-cart-white" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-cart-white"></use></svg><span>Add to Cart</span></button><a title="Find a Store" id="find-store" class="c-button c-button--tertiary-outline c-button--full-width" target="_blank" href=""><svg class="c-icon c-icon-location-blue" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-location-blue"></use></svg><span>Find a Store</span></a></div></div>');
	
				$('header.st-global-header').after(notification);
	
				$('a#find-store').attr('href', findstoreLink);
				$('#add-to-cart-notification.c-button.c-product-details__add-to-cart-button.add-to-cart').on('click', function(){
					$( ".c-product-details__quantity-add-to-cart #add-to-cart.c-button.c-product-details__add-to-cart-button.add-to-cart" ).trigger( "click" );
				});
			}
		}catch(e) {} 
	}
	
	function addPushNavNotificationMobile() {
		try {
			if($('#pdpMain').length == 1) {
				var mobilenotification = $('<a title="Find a Store" id="push-nav-find-store" class="c-button c-button--tertiary-outline c-button--full-width" href=""><svg class="c-icon c-icon-location-blue" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-location-blue"></use></svg><span>Find a Store</span></a>');
	
				$('.c-product-details__quantity-add-to-cart').append(mobilenotification);
				$('a#push-nav-find-store').attr('href', findstoreLink);
				
				var addtocarticon = $('<svg class="c-icon c-icon-cart-white" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-cart-white"></use></svg><span>Add to Cart</span>');
				$('.c-product-details__quantity-add-to-cart #add-to-cart').html(addtocarticon);
			}
		}catch(e) {}  
	}
	
	function scrollNotiificationMenu() {
		try {
			if($('#pdpMain').length == 1 && $(window).width() > 1279) {
				var lastScrollTop = $(window).scrollTop();
				$(window).scroll(function(event){
				var st = $(this).scrollTop();
				var cart_el = $('.c-product-details__quantity-add-to-cart').offset().top;
				var nv = $('header.st-global-header').outerHeight();
				if (st > lastScrollTop && nv == 0 && $(window).width() > 1279 && lastScrollTop > cart_el){
					$('.push-nav-notification').css('top', '0');
					$('.push-nav-notification').show();
				}else if (lastScrollTop > st && lastScrollTop > cart_el && $(window).width() > 1279){
					$('.st-global-header__main-bar').css('display', 'none');
				}else {
					$('.push-nav-notification').hide();
					$('.st-global-header__main-bar').css('display', 'block');
				}
				lastScrollTop = st;
				});
			}else {
				$('.push-nav-notification').hide();
			}
		}catch(e) {} 
	}
	
	//Add Find Store block
	
	function addFindStoreBlock() {
	
		try{
			var addfindstore = $('<div id="map-finder"><a href="" class="href" target="_blank"><div class="map-finder-icon"><img src="https://bauer.a.bigcontent.io/v1/static/map-finder-icon" alt="Store Finder Logo" class="src"></div><div class="map-finder-image"><img src="https://i1.adis.ws/i/bauer/map-finder" alt="Store Finder Map Image" class="src"></div></a></div>');
			
			$( addfindstore ).insertBefore( ".st-global-footer.s-footer" );
			$('#map-finder a').attr('href', findstoreLink);
		}catch(e){}
	
	}
	
	//Modal pop up for sticks page
	
	function addingStickCharts() {
		try {
			if(window.location.href.indexOf("hockey-sticks") > -1) {
				addFlexChart();
				addSizeChart();
				zoomImage();
			}
		}catch(e) {}
	}	
	
	function addFlexChart () {
		if(window.location.href.indexOf("hockey-sticks") > -1) {
			var stick_image = "vapor-sticks";
			var stick_types = ["vapor-sticks", "nexus-sticks", "supreme-sticks"];
			for ( var i=0; i< stick_types.length ; i++ ) {
				if(window.location.href.indexOf(stick_types[i]) > -1) {
					stick_image = stick_types[i];
					break;
				}
			}
			var stick_image_src = 'https://i1.adis.ws/i/bauer/' + stick_image;
	
			var modalflex = $('<span class="modal-custom-popup"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32.07px" viewBox="0 0 32 32.07" xml:space="preserve"><path d="M16,21.025c-2.836,0-5.144-2.238-5.144-4.99s2.307-4.99,5.144-4.99c2.836,0,5.144,2.238,5.144,4.99 S18.836,21.025,16,21.025z M16,12.828c-1.854,0-3.361,1.439-3.361,3.208c0,1.768,1.508,3.207,3.361,3.207s3.36-1.438,3.36-3.207 C19.36,14.267,17.854,12.828,16,12.828z"></path><path d="M16,25.114c-8.175,0-14.616-8.184-14.886-8.532L0.69,16.036l0.424-0.546C1.384,15.141,7.825 6.956,16,6.956c8.175,0,14.616,8.185,14.886,8.533l0.424,0.546l-0.424,0.546C30.615,16.93,24.175,25.114,16,25.114z M2.981,16.036c1.555,1.78,6.87,7.295,13.019,7.295c6.161,0,11.467-5.514,13.02-7.294c-1.556-1.78-6.871-7.298-13.02-7.298S4.537,14.255,2.981,16.036z"></path></svg></span><div class="modal-dialog-custom"><img id="flex-chart-image" src="" style="display:none;" /><div id="flex-chart-data-image" class="modal-custom-image" data-scale="1.6" data-image=""></div><span class="modal-custom-close">&nbsp;</span></div>');
			$('#product-content .c-product-variations ul').children('li.variant-button-group').eq(1).find('label').append(modalflex);
	
			$('img#flex-chart-image').attr('src', stick_image_src);
			$('#flex-chart-data-image').attr('data-image', stick_image_src);
		}
	}
	
	function addSizeChart() {
		if(window.location.href.indexOf("hockey-sticks") > -1) {
			var modalsize = $('<span class="modal-custom-popup"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32.07px" viewBox="0 0 32 32.07" xml:space="preserve"><path d="M16,21.025c-2.836,0-5.144-2.238-5.144-4.99s2.307-4.99,5.144-4.99c2.836,0,5.144,2.238,5.144,4.99 S18.836,21.025,16,21.025z M16,12.828c-1.854,0-3.361,1.439-3.361,3.208c0,1.768,1.508,3.207,3.361,3.207s3.36-1.438,3.36-3.207 C19.36,14.267,17.854,12.828,16,12.828z"></path><path d="M16,25.114c-8.175,0-14.616-8.184-14.886-8.532L0.69,16.036l0.424-0.546C1.384,15.141,7.825 6.956,16,6.956c8.175,0,14.616,8.185,14.886,8.533l0.424,0.546l-0.424,0.546C30.615,16.93,24.175,25.114,16,25.114z M2.981,16.036c1.555,1.78,6.87,7.295,13.019,7.295c6.161,0,11.467-5.514,13.02-7.294c-1.556-1.78-6.871-7.298-13.02-7.298S4.537,14.255,2.981,16.036z"></path></svg></span><div class="modal-dialog-custom"><img src="https://i1.adis.ws/i/bauer/SizeChart" style="display:none;" /><div class="modal-custom-image size" data-scale="1.6" data-image="https://i1.adis.ws/i/bauer/SizeChart"></div><span class="modal-custom-close">&nbsp;</span><div>');
			$('#product-content .c-product-variations ul').children('li.variant-button-group').eq(0).find('label').append(modalsize);
		}
	}
	
	function zoomImage() {
		if(window.location.href.indexOf("hockey-sticks") > -1) {
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
	
	try {
		var targetNode = document.getElementById('product-content');
		var config = { attributes: true, childList: true, subtree: true };
		var callback = function(mutationsList) {
			if($('.modal-custom-popup').length  == 0) {
				addFlexChart();
				addSizeChart();
				zoomImage();
			}
			if($('.add-to-cart.c-button.c-product-details__add-to-cart-button.add-to-cart').length  > 1) {
				var pushnavimage = $('.c-product-details__brand-image').attr('src');
				var pushnavtitile = $('.c-product-details__product-name.product-name').text();
				var pushnavprice = $('.c-product-details__price.product-price span').text();
				$('img.push-nav-logo').attr('src', pushnavimage);
				$('.push-nav-title').text(pushnavtitile);
				$('.push-nav-price').text(pushnavprice);
				scrollNotiificationMenu();
			} 
			if ($('#push-nav-find-store').length == 0) {
				addPushNavNotificationMobile();
			}
			if (!validregion) {
				hideCartOnProductPage();
			}
		}
		var observer = new MutationObserver(callback);  
		observer.observe(targetNode, config);
	} catch(e) {}
	
	}); // DOM Ready