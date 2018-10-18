try {
    if($('.c-banners.c-banners--marketing').length == 1) {
        $('.c-banners__button-row .c-banners__button.c-button').remove();
        var arrowAnimation = $('<div class="banner__arrow__animation"><a><img src="https://bauer.a.bigcontent.io/v1/static/banner_icon_chevron" alt=""></a></div>');

        $('.c-banners__header-block').append(arrowAnimation);
        $('.banner__arrow__animation a').click(function() {
            console.log("clicked now");
            $('html,body').animate({
                scrollTop: $('#primary.o-layout__item.primary-content').offset().top + 20},
            'slow');
        });
    }
}catch(e) {}