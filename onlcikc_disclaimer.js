try {

		function disclaimerPopUP() {

			var helmetpopup = $('<div class="disclaimer-popup" style="display:none"><div class="c-call-to-action-grid__heading">Heads Up!</div><p>For the best fit, we recommend you visit your local retailer.</p><div class="disclaimer-popup-links"><a title="Find a Store" class="c-button c-button--tertiary-outline c-button--full-width" target="_blank" href="https://staging-na01-peakachievementathletics.demandware.net/s/Bauer/en-US/stores"><svg class="c-icon c-icon-location-blue" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-location-blue"></use></svg>Find a Store</a><button id="add-to-cart" type="submit" title="Add to Cart" value="Add to Cart" class="c-button c-product-details__add-to-cart-button add-to-cart"><svg class="c-icon c-icon-cart-white" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-cart-white"></use></svg>Add to Cart</button></div></div>');

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
