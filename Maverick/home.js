

jQuery( document ).ready(function() {
    if(jQuery(window).width() < 769) {
        try {
            jQuery('#quiz_element').insertBefore('#mens_block');
        }catch(e){}
    }
    
    jQuery(window).resize(function() {
        if(jQuery(window).width() < 769) {
            try {
                jQuery('#quiz_element').insertBefore('#mens_block');
            }catch(e){}
        } else {
            try {
                jQuery('#mens_block').insertBefore('#quiz_element');
            }catch(e){}
        }
    });
    jQuery('#mens_social_video').click(function(){
        if (this.paused == true) {
            this.play();
            playButton.innerHTML = "Pause";
        } else {
            this.pause();
            playButton.innerHTML = "Play";
        }
    });
    jQuery('#women_social_video').click(function(){
        if (this.paused == true) {
            this.play();
            playButton.innerHTML = "Pause";
        } else {
            this.pause();
            playButton.innerHTML = "Play";
        }
    });
});