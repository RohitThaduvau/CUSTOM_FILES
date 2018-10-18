

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
    
    //redirect 
	$('#asset-31b329d3c692-4786-92af-0bd587eb13d4 a.c-banners__button.c-button').click(function(e) {
        e.preventDefault();
        window.location.href = 'https://www.bauer.com/en-US/hockey-sticks/supreme-sticks/';
	});
    
    //Hide LiveChat on everything except for product related pages
    
    // try {
    // 	var rightNow = new Date(); 
    // 	if(rightNow.getHours() < 8 ||  rightNow.getHours() >= 17 || rightNow.getDay() == 0 || rightNow.getDay() == 6) {
    // 		$('.s-live-chat.livechat_button').hide();
    // 	}else if(window.location.href.match(/(hockey-|search)/)) {
    // 		$('.s-live-chat.livechat_button').show();
    // 	}else {
    // 		$('.s-live-chat.livechat_button').hide();
    // 	}
    
    // } catch (e) {}
    
    //Live chat functionality
    
    try {
        if(window.location.href.match(/(hockey-|search)/)) {
            $('.s-live-chat.livechat_button').show();
        }else {
            $('.s-live-chat.livechat_button').hide();
        }
    }catch(e){}
    
    //french nav fix
    
        try{
            if(window.location.href.indexOf("/fr") > -1 && $(window).width() > 1279) {
                $('.c-navigation-global__item+.c-navigation-global__item').css('margin-left', '12px');
            }
        }catch(e){}
    
    
    //autoplay videos
    
    $(document).ready(function(){
        var videoelements = document.getElementsByTagName('video');
        for (var i=0; i<videoelements.length; i++) {
            if(!videoelements[i].hasAttribute("playsinline")) {
                videoelements[i].setAttribute('playsinline','');
            }
        }
    });
    
    //Validate Region
    
    var validregion = true;
    var defaultregion = true;
    var regionname = "/en-US";
    var findstoreLink = "";
    var clicked = true;
    var helmetsproductpage = window.location.href.indexOf("hockey-helmets") > -1 ? true : false;
    var skatesproductpage = window.location.href.indexOf("hockey-skates") > -1 ? true : false;
    
    function validateRegionNA() {
        var language_toggle = ["/ru", "/sv", "/de", "/en-US", "/en-CA", "/fr-CA"];
        for ( var i=0; i< language_toggle.length ; i++ ) {
            if(window.location.href.indexOf(language_toggle[i]) > -1) {
                regionname = language_toggle[i];
                defaultregion = false;
                setLanguageRegion();
                validateValidRegion(regionname);
                addDealerLocatorToNav();
                addFindStoreBlock();	
                validateDisclaimerPage();
                addingStickCharts();
                addingStickyNav();
                addSAaleBadge();
                notificationChangeCountry();
                break;
            }
        }
        if(!validregion) {
            hideCart();
            $(document).delegate('.c-accordion__body.js-accordion__body a', 'click', function(){
                setTimeout(function(){
                    hideCartOnProductPage();
                }, 1000);
            });
            $(document).delegate('.c-search-options-block__select.js-select-advanced.select2-hidden-accessible', 'change', function(){
                setTimeout(function(){
                    hideCartOnProductPage();
                }, 1000);
            });
        }
        if(defaultregion) {
            setLanguageRegion();
            addDealerLocatorToNav();
            addFindStoreBlock();
        }
    }
    
    validateRegionNA();
    
    //Disable flash player on mobile
    
    function detectMobileFlash() {
        try{
            if(window.location.href.indexOf('mybauer-sticks') > -1) {
                var hasFlash = false;
                try {
                    var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                    if (fo) {
                        hasFlash = true;
                    }
                } catch (e) {
                    if (navigator.mimeTypes
                            && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
                            && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                        hasFlash = true;
                    }
                }
                var check = false;
                (function() {
                    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
                    return check;
                }());
                
                var flasherror = $('<div class="flash-error-desktop"><img src="http://i1.adis.ws/i/bauer/Adobe_Flash_Player" style=height:100px;width:100px;"/><h2>Sorry! This application requires flash.</h2><p>Please use desktop browsers to access this application.</p></div>');
                var flasherror_desktop = $('<div class="flash-error-desktop"><img src="http://i1.adis.ws/i/bauer/Adobe_Flash_Player" style=height:100px;width:100px;"/><h2>This Content Requires Flash</h2><p>The MyBauer stick Customizer does not support your browsers settings. Please install the latest version of Flash plugin, or use a Desktop/Laptop browser that has flash installed.</p><a href="https://get.adobe.com/flashplayer/" target="_blank" style="display:block; padding-top: 30px;"><img src="http://i1.adis.ws/i/bauer/Adobe_Flash_Player"/ style="height:50px;width:50px;"><span style="display:block; font-size: 12px; color: #fff;">Download the flash player</span></a></div>');
    
                if(!hasFlash && check) {
                    $('.row.center.mt-2').remove();
                    $('#primary').append(flasherror);
                }else if(!hasFlash && document.getElementById('flashcontent').clientHeight == 0) {
                    $('#primary').append(flasherror_desktop);
                }	
            }
        }catch(e) {}
    }
    detectMobileFlash();
    
    //adding dealer locator to nav
    
    function addDealerLocatorToNav() {
        try{
            var dealerlocator = $('<div class="" id="nav-store-locator"><a href="" class=""><img src="https://bauer.a.bigcontent.io/v1/static/Location-Icon" alt="Find Retailer Icon"><span>FIND A RETAILER</span></a></div>');
            $('.st-global-header__cart-search-wrapper__search').after(dealerlocator);
            $('#nav-store-locator a').attr('href', findstoreLink);
            var usericon = $('<img src="https://bauer.a.bigcontent.io/v1/static/ProfileIcon" alt="User Login" class="usericon"/>');
            var chaticon = $('<img src="https://bauer.a.bigcontent.io/v1/static/ChatIcon" alt="Chat Icon" class="chaticon"/>');
            $('.user-info a svg').remove();
            $('.c-icon-contact-us').remove();
            
            $('.user-info a').first().append(usericon);
            $('.st-global-header__utility-navigation.s-utility-navigation ul li').last().find('a').append(chaticon);
    
            if(validregion) {
                $('#mini-cart .mini-cart-link svg').remove();
                var minicarticon = $('<img src="https://bauer.a.bigcontent.io/v1/static/Cart-Icon" alt="" class="mini-cart-icon">');
                $('#mini-cart .mini-cart-link span').after(minicarticon);
            }else{
                $('#mini-cart .mini-cart-link').remove();
            }
        }catch(e){}
    }
    
    //setting region-language
    
    function setLanguageRegion() {
        try {
            if(window.location.href.indexOf("staging") > -1) {
                findstoreLink = '/s/Bauer'+ regionname + '/stores';
            }else {
                findstoreLink = regionname + '/stores'
            }
        }catch(e){}
    }
    
    //validate region 
    
    function validateValidRegion(locale) {
        var excludeRegions = ["/ru.", "/sv.", "/de.", "/ru-", "/sv-", "/de-"];
        for(var i=0; i < excludeRegions.length; i++ ) {
            if(window.location.href.indexOf(excludeRegions[i]) > -1) {
                validregion = false;
                break;
            }
        }
    }
    
    //excluding helmets-skates from diclaimers
    
    function validateDisclaimerPage() {
        try {
            if (validregion) {
                var excludeskates = ["612410", "620133", "673400"];
                for ( var i=0; i< excludeskates.length ; i++ ) {
                    if(window.location.href.indexOf(excludeskates[i]) > -1) {
                        skatesproductpage = false;
                        break;
                    }
                }
                var excludehelmets = ["636968", "695989", "649867"];
                for ( var i=0; i< excludehelmets.length ; i++ ) {
                    if(window.location.href.indexOf(excludehelmets[i]) > -1) {
                        helmetsproductpage = false;
                        break;
                    }
                }
            }
        }catch(e) {}
    }
    
    //add customer-service styling
    
    try {
        if(window.location.href.indexOf("bauer-support") > -1) {
            $( "#main" ).addClass( "customer-service" );
        } 
    }catch(e) {}
    
    // adding sale badge to the product tiles
    
    function addSAaleBadge() {
        try{
            if(window.location.href.indexOf("hockey-sticks/supreme-sticks") > -1 && validregion) {
                var sale = $('<div class="sale--badge">20% off</div>');
                $('#search-result-items .st-tile-grid__wrapper .c-product-tile .c-product-tile__image-wrapper').before(sale);
                if(window.location.href.indexOf("/fr-CA") > -1) {
                    $('.sale--badge').text('vente');
                }
                
            }
        }catch(e) {}
    }
    
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
                $('.c-product-details__price.product-price').remove();
            }
            $('.c-product-tile__price.product-pricing').remove();
            $('.c-accordion__body-link.js-category-refinement-link.js-price-refinement').parent().parent().remove();
            $('.c-navigation-global__wrapper.c-navigation-global__list .c-navigation-global__item.js-drawer-navigation-global__item:last').last().remove()
            $('.s-live-chat.livechat_button').hide();
        }catch(e) {}
    }
    
    //Adding Disclaimers to product pages for helmets and sticks
    
    function disclaimerPopUP() {
        try {
            var helmetpopup = $('<div class="disclaimer-popup" style="display:none"><div class="c-call-to-action-grid__heading"></div><p class="disclaimer-copy"></p><div class="disclaimer-popup-links"><a title="Find a Store" id="find-a-store" class="c-button c-button--tertiary-outline c-button--full-width" target="_blank" href=""><svg class="c-icon c-icon-location-blue" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-location-blue"></use></svg><span>Find a Store</span></a><button id="add-to-cart" type="submit" title="Add to Cart" value="Add to Cart" class="c-button c-product-details__add-to-cart-button add-to-cart"><svg class="c-icon c-icon-cart-white" aria-hidden="true"><use xlink:href="/on/demandware.static/Sites-Bauer-Site/-/default/dwdb329b63/svg/symbols.svg#svg-icon-cart-white"></use></svg><span>Add to Cart</span></button></div></div>');
    
            $(".c-product-details__quantity-add-to-cart").before(helmetpopup);
            $(".disclaimer-popup #find-a-store").attr('href', findstoreLink);
    
            if(helmetsproductpage) {
                getLocaleLanguageHelmets();
            }else if(skatesproductpage) {
                getLocaleLanguageSkates();
            }
        }catch(e){}	
    }
    
    function getLocaleLanguageHelmets() {
        try {
            var disclaimer_heading = "Heads Up!";
            var disclaimer_copy = "For the best fit, we recommend you visit your local retailer.";	
            if(window.location.href.indexOf("/fr") > -1) {
                disclaimer_heading = "La tête haute!";
                disclaimer_copy = "Pour le meilleur ajustement, nous vous recommandons de visiter votre détaillant local.";
                $('.disclaimer-popup #find-a-store span').text('Ajouter au panier');
                $('.disclaimer-popup #add-to-cart span').text('Trouver un magasin');
            }		
            $('.disclaimer-popup .c-call-to-action-grid__heading').text(disclaimer_heading);
            $('.disclaimer-popup .disclaimer-copy').text(disclaimer_copy);
        }catch(e) {}
    }
    
    function getLocaleLanguageSkates() {
        try {
            var disclaimer_heading = "Heads Up!";
            var disclaimer_copy = "We recommend you visit your local retailer to get the proper fit. You may also incur additional cost for sharpening and baking your skates if you do not purchase directly from one of our retail partners.";	
            if(window.location.href.indexOf("/fr") > -1) {
                disclaimer_heading = "La tête haute!";
                disclaimer_copy = "Nous vous recommandons de visiter votre détaillant local pour obtenir le meilleur ajustement possible. Vous pouvez également encourir des frais supplémentaires pour aiguiser et chauffer vos patins, si vous n’achetez pas directement auprès de l'un de nos détaillants partenaires.";
                $('.disclaimer-popup #find-a-store span').text('Ajouter au panier');
                $('.disclaimer-popup #add-to-cart span').text('Trouver un magasin');
            }	
            $('.disclaimer-popup .c-call-to-action-grid__heading').text(disclaimer_heading);
            $('.disclaimer-popup .disclaimer-copy').text(disclaimer_copy);
        }catch(e) {}		
    }
    
    var disableClick = function(e) {
        if($('.disclaimer-popup').length  == 1 && clicked) {
            e.preventDefault();
            (e.stopPropagation) ? e.stopPropagation() : e.cancelBubble = true;
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
    
    //Sticky Nav - product pages
    
    function addingStickyNav() {
        try {
            if($('#pdpMain').length == 1 && validregion) {
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
    
    //add Price ToA vailability 
    
    var priceChanged = true;
    function addPriceToAvailability(price) {
        if($('.price-above-cart').length == 0) {
            var addingprice = $('<span class="price-above-cart"></span>');
        }
        // $('.availability.availability-web span.value, .c-product-details__quantity-add-to-cart .inventory').after(addingprice);
        $('.c-product-details__quantity-add-to-cart .inventory').before(addingprice);
        $('.price-above-cart').text(price);
        $('.c-quantity__button.js-quantity-button').click(function(){
            console.log($('#quantity').val() , price);
            // updatePrice($('#quantity').val());
        });
    }
    
    //update price on selection
    
    function updatePrice(quantity) {
        try{
            var pricelen = window.dataLayer.length;
            for(var i=pricelen-1; pricelen > 0; i--) {
                var checkprice = window.dataLayer[i].google_tag_params;
                if(typeof checkprice !== 'undefined') {
                    var finalprice = (checkprice.ecomm_totalvalue)*quantity;
                    $('.price-above-cart').text(finalprice);
                    break;
                }
            }
        }catch(e){}
    }
    
    //Add Find Store block`
    
    function addFindStoreBlock() {
    
        try{
            var addfindstore = $('<div id="map-finder"><a href="" class="href" target="_blank"><div class="map-finder-icon"><img src="https://bauer.a.bigcontent.io/v1/static/map-finder-icon" alt="Store Finder Logo" class="src"></div><div class="map-finder-image"><img src="https://i1.adis.ws/i/bauer/map-finder" alt="Store Finder Map Image" class="src"></div></a></div>');
            
            $( addfindstore ).insertBefore( ".st-global-footer.s-footer" );
            $('#map-finder a').attr('href', findstoreLink);
        }catch(e){}
    
    }
    
    //Error notification for country in shipping address
    function notificationChangeCountry() {
        try{
            var notification = $('<div id="dwfrm_singleshipping_shippingAddress_addressFields_country-js-error" class="country-change-notification">Sorry! We have detected that you are a U.S. resident and therefore can only ship product to a U.S. address.</div>');
            var ca_notification = $('<div id="dwfrm_singleshipping_shippingAddress_addressFields_country-js-error" class="country-change-notification">Sorry! We have detected that you are a Canadian resident and therefore can only ship product to a Canadian address.</div>');
            var fr_notification = $("<div id='dwfrm_singleshipping_shippingAddress_addressFields_country-js-error' class='country-change-notification'>Désolé! Nous avons détecté que vous êtes un résident du Canada et que, et ne peut donc expédier le produit qu'à une adresse canadienne.</div>");
            $('#dwfrm_singleshipping_shippingAddress_addressFields_country, #dwfrm_shiptostore_country').on('click', function() {
                if(window.location.href.indexOf("/fr") > -1) {
                    $(this).after(fr_notification);
                }else if(window.location.href.indexOf("en_CA") > -1 || window.location.href.indexOf("en-CA") > -1){
                    $(this).after(ca_notification);
                }else {
                    $(this).after(notification);
                }
            });
    
            if ( /shipping/.test(window.location.href) > -1 ) {
                var txt = $("#dwfrm_singleshipping_shippingAddress_addressFields_address2");
                var shipnote = true;
                var func = function(e) {
                  txt.val(txt.val().replace(/\s/g, ''));
                  if(shipnote && e.which === 32 && window.location.href.indexOf("/fr") > -1) {
                    $(txt).after('<div class="country-shipping-notification">*les espaces ne sont pas permis dans ce domaine (au-dessus)</div>');
                    shipnote = false;
                  }else if(shipnote && e.which === 32)  {
                    $(txt).after('<div class="country-shipping-notification">*Spaces are not permitted in this field (see above).</div>');
                    shipnote = false;
                  }
                }
                txt.keypress(func).blur(func);
            }
        }catch(e){}
    }
    
    //Modal pop up for sticks page
    
    function addingStickCharts() {
        try {
            if(window.location.href.indexOf("hockey-sticks") > -1) {
                addFlexChart();
                addSizeChart();
                zoomImage();
            }else if(window.location.href.indexOf("hockey-gloves") > -1) {
                addGlovesChart();
                zoomImage();
            }
        }catch(e) {}
    }	
    
    function addGlovesChart () {
        try{
            if(window.location.href.indexOf("hockey-gloves") > -1) {
                var modalflex = $('<span class="modal-custom-popup"><img class="ruler-icon" src="https://bauer.a.bigcontent.io/v1/static/RulerIcon" alt="Ruler"/></span><div class="modal-dialog-custom"><img id="flex-chart-image" src="https://i1.adis.ws/i/bauer/hockey_gloves_size_chart_popup" style="display:none;" /><div id="flex-chart-data-image" class="modal-custom-image" data-scale="1.6" data-image="https://i1.adis.ws/i/bauer/hockey_gloves_size_chart_popup"></div><span class="modal-custom-close">&nbsp;</span></div>');
                $('#product-content .c-product-variations ul').children('li.variant-button-group').eq(1).find('label').append(modalflex);
            }
        }catch(e) {}
    }
    
    function addFlexChart () {
        try{
            if(window.location.href.indexOf("hockey-sticks") > -1) {
                var modalflex = $('<span class="modal-custom-popup"><img class="ruler-icon" src="https://bauer.a.bigcontent.io/v1/static/RulerIcon" alt="Ruler"/></span><div class="modal-dialog-custom"><img id="flex-chart-image" src="https://i1.adis.ws/i/bauer/SizeChart" style="display:none;" /><div id="flex-chart-data-image" class="modal-custom-image" data-scale="1.6" data-image="https://i1.adis.ws/i/bauer/SizeChart"></div><span class="modal-custom-close">&nbsp;</span></div>');
                $('#product-content .c-product-variations ul').children('li.variant-button-group').eq(1).find('label').append(modalflex);
            }
        }catch(e) {}
    }
    
    function addSizeChart() {
        try {
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
    
                var modalsize = $('<span class="modal-custom-popup"><img class="ruler-icon" src="https://bauer.a.bigcontent.io/v1/static/RulerIcon" alt="Ruler"/></span><div class="modal-dialog-custom"><img id="size-chart-image" src="" style="display:none;" /><div id="size-chart-data-image" class="modal-custom-image size" data-scale="1.6" data-image=""></div><span class="modal-custom-close">&nbsp;</span><div>');
                $('#product-content .c-product-variations ul').children('li.variant-button-group').eq(0).find('label').append(modalsize);
    
                $('img#size-chart-image').attr('src', stick_image_src);
                $('#size-chart-data-image').attr('data-image', stick_image_src);
            }
        }catch(e){} 
    }
    
    function zoomImage() {
        try{
            if(window.location.href.indexOf("hockey-sticks") > -1 || window.location.href.indexOf("hockey-gloves") > -1) {
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
                        .on('touchstart', function() {
                            $(this).children('.custom-zoom').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
                        })
                        .on('touchend', function() {
                            $(this).children('.custom-zoom').css({'transform': 'scale(1)'});
                        })
                        .on('touchmove', function(e) {
                            e.preventDefault();
                            $(this).children('.custom-zoom').css({'transform-origin': ((e.originalEvent.touches ?  e.originalEvent.touches[0].pageX : e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + (((e.originalEvent.touches ?  e.originalEvent.touches[0].pageY : e.pageY) - $(this).offset().top) / $(this).height()) * 100 +'%'});
                        })
                        .each(function(){
                        $(this)                
                            .append('<div class="custom-zoom"></div>')
                            .children('.custom-zoom').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
                        })
            }
        }catch(e) {}
    }
    
    try {
        var targetNode = document.getElementById('product-content');
        var config = { attributes: true, childList: true, subtree: true };
        var callback = function(mutationsList) {
            if($('.modal-custom-popup').length  == 0) {
                addFlexChart();
                addSizeChart();
                addGlovesChart();
                zoomImage();
            }
            if(($('.availability-msg').length > 0 && priceChanged) || ($('.availability-msg').length > 0  && $('.price-above-cart').text() == "")) {
                var pushnavprice = $('.c-product-details__price.product-price span').text();
                if($('.c-product-details__price.product-price span.price-sales').length == 1) {
                    pushnavprice = $('.c-product-details__price.product-price span.price-sales').text();
                }
                addPriceToAvailability(pushnavprice);
            }
            if($('.c-product-details__quantity-add-to-cart #add-to-cart').attr('disabled') !== 'disabled' && validregion) {
                var pushnavimage = $('.c-product-details__brand-image').attr('src');
                var pushnavtitile = $('.c-product-details__product-name.product-name').text();
                var pushnavprice = $('.c-product-details__price.product-price span').text();
                if($('.c-product-details__price.product-price span.price-sales').length == 1) {
                    pushnavprice = $('.c-product-details__price.product-price span.price-sales').text();
                }
                $('img.push-nav-logo').attr('src', pushnavimage);
                $('.push-nav-title').text(pushnavtitile);
                $('.push-nav-price').text(pushnavprice);
                scrollNotiificationMenu();
                priceChanged = false;
            } 
            if ($('#push-nav-find-store').length == 0 && validregion) {
                addPushNavNotificationMobile();
            }
            if (!validregion) {
                hideCartOnProductPage();
            }
            if((skatesproductpage || helmetsproductpage) && $('.disclaimer-popup').length  == 1 && validregion) {
                $('#add-to-cart.c-button.c-product-details__add-to-cart-button.add-to-cart').off('click');
                $('#add-to-cart.c-button.c-product-details__add-to-cart-button.add-to-cart').on('click', disableClick);
            }else if((skatesproductpage || helmetsproductpage) && clicked && validregion){
                disclaimerPopUP();
                $('#add-to-cart.c-button.c-product-details__add-to-cart-button.add-to-cart').on('click', disableClick);
            }
        }
        var observer = new MutationObserver(callback);  
        observer.observe(targetNode, config);
    } catch(e) {}
    
    }); // DOM Ready