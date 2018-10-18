
try {

		function disclaimerPopUP() {

			var helmetpopup = $('<div class="disclaimer-popup"><div class=".c-call-to-action-grid__heading">Heads Up!</div><p>For the best fit, we recommend you visit your local retailer.</p><div class="disclaimer-popup-links"><a title="Find a Store" class="c-button c-button--full-width c-product-variations__button-group-item right-margin" href="https://staging-na01-peakachievementathletics.demandware.net/s/Bauer/en-US/stores"><svg class="c-icon c-icon-location-blue" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-location-blue"></use></svg>Find a Store</a><a id="got-it-cta" title="Okay got it" value="Okay Got It" class="c-button c-button--full-width c-product-variations__button-group-item" >Okay Got It</a></div></div>');
			var skatestpopup = $('<div class="disclaimer-popup"><div class="c-call-to-action-grid__heading">Heads Up!</div><p>We recommend you visit your local retailer to get the proper fit. you may also incur additional cost for sharpening and banking your skates if you do not purchase directly from one of our retail partners.</p></div>');
            $(".c-product-details__quantity-add-to-cart").before(helmetpopup);
			
		}
	
        disclaimerPopUP();
        
        var clicked = true;

		var disableClick = function() {
			if($('.disclaimer-popup').length  == 1 && clicked) {
				var disableclick = $('.c-button.c-product-details__add-to-cart-button.add-to-cart');
				disableclick.removeClass("c-button c-product-details__add-to-cart-button add-to-cart");
				disableclick.addClass("c-button c-button--disabled c-product-details__add-to-cart-button js-add-to-cart-button-disabled");
				disableclick.attr("disabled","disabled");

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
                clicked = false;
                $('#got-it-cta').on('click', disableClick);
			}else if ($('.disclaimer-popup').length  == 0){
                clicked = true;
                disclaimerPopUP();
                disableClick();
            }else {
            } 
		}
		var observer = new MutationObserver(callback);  
		observer.observe(targetNode, config);
		

	} catch (e) {}