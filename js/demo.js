//北京
$('.left-con li').hover(function() {
        $(this).children('.address').css({
            background: "#fff",
            borderLeft: '1px solid #999',
            borderRight: '1px solid #999'
        })
        $(this).children('.cities').show();
        $('.left-con li .cities li a').on('click', function() {
            $('.left-con li .cities li a').css({
                color: '#999',
                background: '#fff',
            })
            $(this).css({
                color: '#fff',
                background: '#f10215',
            })
            var text = $(this).text();
            console.log(text);
            $('.address span').text(text);
        })
        $('.others ul li').hover(function() {
            $(this).css({
                color: '#f10215'
            })
        }, function() {
            $(this).css({
                color: '#999'
            })
        })
    }, function() {
        $(this).children('.address').css({
            background: "#ddd",
            borderLeft: '1px solid #ddd',
            borderRight: '1px solid #ddd',
        })
        $(this).children('.cities').hide();
    })
    //我的京东
$('.select').hover(function() {
    $(this).children('.details').show();
    $(this).children('.dt-con').css({
        color: '#f10215',
        borderLeft: '1px solid #999',
        borderRight: '1px solid #999',
        borderBottom: '1px solid #fff',
    })
}, function() {
    $(this).children('.details').hide();
    $(this).children('.dt-con').css({
        color: '#999',
        borderLeft: '1px solid #ddd',
        borderRight: '1px solid #ddd',
        borderBottom: '0px solid #fff',

    })
})

//鼠标停在前四个图标（话费 机票 酒店 游戏）
$('.sort').on('mouseenter', '.row1', function() {
        $('.sort').slideUp();
        $('.service-content').slideDown(300);
    })
    //关闭弹出来的内容
$('.close').on('click', function() {
        $('.service-content').slideUp();
        $('.sort').slideDown();
    })
    //话费，酒店，机票，游戏；悬停时展示不同的内容
$('.service-header span').hover(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var index = $(this).index();
        $('.showDiv').children().hide();
        $('.showDiv').children('.show' + index).show();

    }, function() {})
    //话费下面的三个选项 （ 话费充值 流量充值 套餐变更）
$('.item-tab ul').on('mouseenter', 'li', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active')
    $('.item-tab ul li .item').hide();
    $(this).addClass('active').children('div').show();
})

//机票
$('.item2-tab ul').on('mouseenter', 'li', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active')
        $('.item2-tab ul li .item').hide();
        $(this).addClass('active').children('div').show();
    })
    //酒店
$('.item3-tab ul').on('mouseenter', 'li', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active')
        $('.item3-tab ul li .item').hide();
        $(this).addClass('active').children('div').show();
    })
    // 游戏
$('.item4-tab ul').on('mouseenter', 'li', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active')
    $('.item4-tab ul li .item').hide();
    $(this).addClass('active').children('div').show();
})