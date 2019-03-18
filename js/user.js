$('.cx').hover(function() {
    $('.con-head .line').fadeIn(50);
    $('.con-main .cx-con').show();
    $('.con-main .ad-con').hide();
}, function() {
    $('.con-head .line').fadeOut(50);
})
$('.ad').hover(function() {
    $('.con-head .line2').fadeIn(50);
    $('.con-main .cx-con').hide();
    $('.con-main .ad-con').show();
}, function() {
    $('.con-head .line2').fadeOut(50);
})

$('.service .sort li').hover(function() {
    var index = parseInt($(this).index()) + 1;
    $(this).children().css({
        color: '#e01222',
        background: 'url(./images/pic' + index + index + '.png) no-repeat',
        backgroundSize: '30px 35px',
        backgroundPosition: '50% 30%',
    })
}, function() {
    var index = parseInt($(this).index()) + 1;
    $(this).children().css({
        color: '#bea68d',
        background: 'url(./images/pic' + index + '..png) no-repeat',
        backgroundSize: '30px 35px',
        backgroundPosition: '50% 30%',
    })
})