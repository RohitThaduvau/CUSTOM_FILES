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

<div id="flat-shipping-rate" class='header-promotion'><img src="https://bauer.a.bigcontent.io/v1/static/icon-truck" alt=""/><span class="shipping-price">$8.99</span><span>FLAT RATE SHIPPING</span> ON STANDARD ORDERS*</div>
<div id="ship-to-store" class='header-promotion'><img src="https://bauer.a.bigcontent.io/v1/static/icon-store" alt=""/><span>FREE SHIPPING </span>ON INSTORE ORDERS*</div>

var shiprate = "$8.99";

function validateShipping() {
	try{
		var flatrate = false;
		$('#ship-to-store').hide();
		setInterval(swapShippingTags, 5000);
		var shiprate = "$8.99";
		var shipregions= ['fr.','fr-CA', 'en-CA'];
		for(var i=0; i<shipregions.length; i++) {
			if(window.location.href.indexOf(shipregions[i]) > -1) {
				shiprate = "$11.99"
				$('#flat-shipping-rate span.shipping-price').html(shiprate);
				break;
			}
		}
	}catch(e){}
	
}

function swapShippingTags() {
	try{
		if(flatrate) {
			$('#flat-shipping-rate').hide().slideDown('slow').delay(4000).slideUp('slow');
			flatrate = false;
		}else{
			$('#flat-shipping-rate').hide();
			$('#ship-to-store').hide().slideDown('slow').delay(4000).slideUp('slow');
			flatrate = true;
		}
	}catch(e){}	
}

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script>
var flatrate = false;
$('#ship-to-store').hide();
setInterval(swapShippingTags, 5000);
function swapShippingTags() {
	if(flatrate) {
		$('#flat-shipping-rate').hide().slideDown('slow').delay(4000).slideUp('slow');
		flatrate = false;
	}else{
		$('#flat-shipping-rate').hide();
		$('#ship-to-store').hide().slideDown('slow').delay(4000).slideUp('slow');
		flatrate = true;
	}
}
</script>


try{
	var flatrate = false;
	$('#ship-to-store').hide();
	var shiprate = "$8.99";
	var shipregions= ['fr.','fr-CA', 'en-CA'];
	for(var i=0; i<shipregions.length; i++) {
		if(window.location.href.indexOf(shipregions[i]) > -1) {
			shiprate = "$11.99"
			$('#flat-shipping-rate span.shipping-price').html(shiprate);
			break;
		}
	}
	setInterval(swapShippingTags, 5000);
	function swapShippingTags() {
		if(flatrate) {
			$('#flat-shipping-rate').hide().slideDown('slow').delay(4000).slideUp('slow');
			flatrate = false;
		}else{
			$('#flat-shipping-rate').hide();
			$('#ship-to-store').hide().slideDown('slow').delay(4000).slideUp('slow');
			flatrate = true;
		}
	}
}catch(e){}


//last - one 

<div id="flat-shipping-rate" class='header-promotion'><img src="https://bauer.a.bigcontent.io/v1/static/icon-truck" alt=""/><span class="shipping-price">$8.99 </span><span id="">FLAT RATE SHIPPING</span> ON STANDARD ORDERS*</div>
<div id="ship-to-store" class='header-promotion'><img src="https://bauer.a.bigcontent.io/v1/static/icon-store" alt="store-icon"/><span>FREE SHIPPING </span>ON ORDERS SHIPPED TO A RETAILER*</div>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script>
try{
	var flatrate = false;
	$('#ship-to-store').hide();
	var shiprate = "$8.99 ";
	var shipregions= ['fr.','fr-CA', 'en-CA'];
	for(var i=0; i<shipregions.length; i++) {
		if(window.location.href.indexOf(shipregions[i]) > -1) {
			shiprate = "$11.99 "
			$('#flat-shipping-rate span.shipping-price').html(shiprate);
			break;
		}
	}
	var fr_flatrateshipping = $('<img src="https://bauer.a.bigcontent.io/v1/static/icon-truck" alt=""/><span>11,99 $ expédition de taux plat sur les commande standard*</span>');
	var fr_shiprate = $('<img src="https://bauer.a.bigcontent.io/v1/static/icon-store" alt="store-icon"/><span>Livraison gratuite sur les commandes expédiées au magasin*</span>');
	if(window.location.href.indexOf("/fr") > -1) {
		$('#flat-shipping-rate').html(fr_flatrateshipping);
		$('#ship-to-store').html(fr_shiprate);
	}
	setInterval(swapShippingTags, 5000);
	function swapShippingTags() {
		if(flatrate) {
			$('#flat-shipping-rate').hide().slideDown('slow').delay(4000).slideUp('slow');
			flatrate = false;
		}else{
			$('#flat-shipping-rate').hide();
			$('#ship-to-store').hide().slideDown('slow').delay(4000).slideUp('slow');
			flatrate = true;
		}
	}
}catch(e){}
</script>


// var shipaddressnotification = $('<div class="country-shipping-notification">Spaces are not permitted in this field*</div>'); var fr_shipaddressnotification = $('<div class="country-shipping-notification">Spaces are not permitted in this field*</div>'); $('#dwfrm_singleshipping_shippingAddress_addressFields_address2').keypress(function(e) { var spacenote = true; var current_val = $(this).val(); current_val = current_val.replace(/\s+/g, '-'); $(this).val(current_val); if(spacenote && e.which === 32) { $(this).after(shipaddressnotification); spacenote = false; } });

var filterObj = window.dataLayer.filter(function(e) {
	console.log(e.google_tag_params) ;
	if( e.google_tag_param !== undefined) {
		console.log("second")
		return e.google_tag_params.ecomm_totalvalue;
		exit;
	}
 });

 var dataLayer = [{google_tag_params1: {
	ecomm_pagetype: 'product',
	ecomm_prodid: "688698240436",
	ecomm_totalvalue: 949.99
	}}, {google_tag_params: {
		ecomm_pagetype: 'product',
		ecomm_prodid: "688698240436",
		ecomm_totalvalue: 949.99}},

		{google_tag_params2: {
		ecomm_pagetype: 'product',
		ecomm_prodid: "688698240436",
		ecomm_totalvalue: 949.99}}, 

		{google_tag_params: {
		ecomm_pagetype: 'product',
		ecomm_prodid: "688698240436",
		ecomm_totalvalue: 949.99}}];

 function containsObject(obj, list) {
    var i = list.length;
    for (i = 0; i < list.length; i++) {
        if (list[i].google_tag_param !== 'undefined') {
			
		}
    }

}

function updatePrice() {
	try{
		var pricelen = window.dataLayer.length;
		var checkprice = window.dataLayer[pricelen-1].google_tag_params;
		if(checkprice !== 'undefined') {
			var finalprice = checkprice.ecomm_totalvalue;
			console.log(finalprice);
		}
	}catch(e){}
}


 var dataLayer = [{google_tag_params1: {
containsObject(google_tag_params, dataLayer);