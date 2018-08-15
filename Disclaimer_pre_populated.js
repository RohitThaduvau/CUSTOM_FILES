try {

		function disclaimerPopUP() {

			var helmetpopup = $('<div class="disclaimer-popup"><div class=".c-call-to-action-grid__heading">Heads Up!</div><p>For the best fit, we recommend you visit your local retailer.</p><div class="disclaimer-popup-links"><a title="Find a Store" class="c-button c-button--tertiary-outline c-button--full-width" href="https://staging-na01-peakachievementathletics.demandware.net/s/Bauer/en-US/stores"><svg class="c-icon c-icon-location-blue" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-location-blue"></use></svg>Find a Store</a><button id="add-to-cart" type="submit" title="Add to Cart" value="Add to Cart" class="c-button c-product-details__add-to-cart-button add-to-cart"><svg class="c-icon c-icon-cart-white" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-cart-white"></use></svg>Add to Cart</button></div></div>');
			var skatestpopup = $('<div class="disclaimer-popup"><div class=".c-call-to-action-grid__heading">Heads Up!</div><p>We recommend you visit your local retailer to get the proper fit. you may also incur additional cost for sharpening and banking your skates if you do not purchase directly from one of our retail partners.</p></div>');
			$(".c-product-details__quantity-add-to-cart").before(helmetpopup);
			
		}
	
		disclaimerPopUP();
	
		var targetNode = document.getElementById('product-content');
		var config = { attributes: true, childList: true, subtree: true };
		var callback = function(mutationsList) {
			if($('.disclaimer-popup').length  == 0 && $('#add-to-cart.c-button.c-product-details__add-to-cart-button.add-to-cart').length  == 1) {
				var addtocart = $("#add-to-cart.c-button.c-product-details__add-to-cart-button.add-to-cart");
				addtocart.removeClass("c-button c-product-details__add-to-cart-button add-to-cart");
				addtocart.addClass("c-button c-button--disabled c-product-details__add-to-cart-button js-add-to-cart-button-disabled");
				addtocart.attr("disabled","disabled");
				disclaimerPopUP();
			}
		}
		var observer = new MutationObserver(callback);  
		observer.observe(targetNode, config);
		

	} catch (e) {}