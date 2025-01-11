jQuery(function($) {
    $( window ).scroll(function() {
        if($(this).scrollTop() >= 48) {
            $('nav.navbar').addClass('active', 3000);
            $('a.navbar-brand img').attr('src','assets/images/MPV_Wordmark_320x132px.png');
        }else {
            $('nav.navbar').removeClass('active', 3000);
            $('a.navbar-brand img').attr('src','assets/images/MPV_Wordmark_320x132px_KO.png');
        }
    });
    });


    jQuery('#bottomToTop').on('click', function(){
		jQuery("html, body").animate({ scrollTop: 0 }, 800); 
	});    