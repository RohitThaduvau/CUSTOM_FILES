try {

		function disclaimerPopUP() {

			var helmetpopup = $('<div class="disclaimer-popup" style="display:none"><div class="c-call-to-action-grid__heading">Heads Up!</div><p class="disclaimer-copy">For the best fit, we recommend you visit your local retailer.</p><div class="disclaimer-popup-links"><a title="Find a Store" id="find-store" class="c-button c-button--tertiary-outline c-button--full-width" target="_blank" href="https://staging-na01-peakachievementathletics.demandware.net/s/Bauer/en-US/stores"><svg class="c-icon c-icon-location-blue" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-location-blue"></use></svg><span>Find a Store</span></a><button id="add-to-cart" type="submit" title="Add to Cart" value="Add to Cart" class="c-button c-product-details__add-to-cart-button add-to-cart"><svg class="c-icon c-icon-cart-white" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-cart-white"></use></svg><span>Add to Cart</span></button></div></div>');

			$(".c-product-details__quantity-add-to-cart").before(helmetpopup);
			getLocaleLanguage();
			
		}

		function getLocaleLanguage() {
			var disclaimer_heading = "Heads Up!";
			var disclaimer_copy = "For the best fit, we recommend you visit your local retailer.";
			var language_toggle = ["fr_CA", "fr-CA"];
			for ( var i=0; i< language_toggle.length ; i++ ) {
				if(window.location.href.indexOf(language_toggle[i]) > -1) {
					disclaimer_heading = "La tête haute!";
					disclaimer_copy = "Pour le meilleur ajustement, nous vous recommandons de visiter votre détaillant local.";
					$('.disclaimer-popup .c-call-to-action-grid__heading').text(disclaimer_heading);
					$('.disclaimer-popup .disclaimer-copy').text(disclaimer_copy);
					$('.disclaimer-popup #find-store span').text('Ajouter au panier');
					$('.disclaimer-popup #add-to-cart span').text('Trouver un magasin');
					break;
				}
			}
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
		

		function validateRegionNA() {
			var language_toggle = ["en-US", "en-CA", "fr-CA"];
			for ( var i=0; i< language_toggle.length ; i++ ) {
				if(window.location.href.indexOf(language_toggle[i]) > -1) {
					
					break;
				}
			}
		}
		
		$('#dwfrm_singleshipping_shippingAddress_addressFields_country').click(function() {
			console.log("clicked");
		});

		$('.c-product-details__quantity-add-to-cart #add-to-cart').attr('disabled')
		

		function addDealerLocatorToNav() {
			try{
				var dealerlocator = $('<div class="" id="nav-store-locator"><a href="" class=""><img src="https://bauer.a.bigcontent.io/v1/static/Location-Icon" alt="Find Retailer Icon"><span>FIND A RETAILER</span></a></div>');
				$('.st-global-header__cart-search-wrapper__search').after(dealerlocator);

				$('#mini-cart .mini-cart-link svg').remove();
				var minicarticon = $('<img src="https://bauer.a.bigcontent.io/v1/static/Cart-Icon" alt="" class="mini-cart-icon">');
				$('#mini-cart .mini-cart-link span').after(minicarticon);
			}catch(e){}
		}

    } catch (e) {}


