$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true
    });

    $('.main-menu > ul:nth-of-type(2)').hide()

    $('.toggler').click(function(){
        $('.main-menu > ul:nth-of-type(2)').toggle();
        $('.drop').css({'display':'block','position':'relative'});
    })
});