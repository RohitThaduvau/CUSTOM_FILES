


jQuery( document ).ready(function() {
    
});

jQuery('.sod_select').click(function(){
    jQuery('.sod_list .sod_option:first').html('COLOR');  
    console.log("danher")
});

try {
    if(jQuery('.pdp-logo-wrapper a').last().attr('href') == 'https://maveriklacrosse.com/find-a-store/') {
        jQuery('.pdp-logo-wrapper a').last().css('padding', 0);
    }
}catch(e){}
