var images = jQuery('img.attachment-shop_single.size-shop_single').map(function(){
    return jQuery(this).attr('src')
}).get()
