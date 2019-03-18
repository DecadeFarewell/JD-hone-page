(function() {
    function Init(options) {
        this.parent = options.parent;
        this.data = options.data;
        this.creatDom();
        this.addCss();
        this.bindEvent();
    }
    Init.prototype.creatDom = function() {
        //左侧加右侧整体区域
        var menuList = $('<div class="menuList"></div>');
        //左侧区域
        var showMeun = $('<ul class="cateMenu"></ul>');
        for (var i = 0; i < this.data.length; i++) {
            var detail = this.data[i].detail;
            //整个右侧的内容
            var menuContent = $('<div id="menuContent" class="menuContent" data-id="data' + i + '"></div>');
            //左侧ul中的li
            var leftLi = $('<li class="leftLi"><a href="' + this.data[i].href + '">' + this.data[i].name + '</a></li>').appendTo(showMeun);
            for (var j = 0; j < detail.length; j++) {
                var items = detail[j].items;
                //右侧内容每一类放在一个大ul中
                var itemRow = $('<ul class="itemRow"></ul>')
                    //每一类的总称
                $('<li class="cateType"><a href="#">' + detail[j].title + '&gt;</a></li>').appendTo(itemRow);
                //总称后细分的种类放在一个ul中
                var itemRight = $('<ul class="itemRight"></ul>');
                for (var k = 0; k < items.length; k++) {
                    //细分的种类
                    $('<li class="item"><a href="' + items[k].href + '">' + items[k].name + '</a></li>').appendTo(itemRight);
                }
                itemRow.append(itemRight).appendTo(menuContent);
            }
            leftLi.append(menuContent);
        }
        menuList.append(showMeun).appendTo(this.parent);

    }
    Init.prototype.addCss = function() {
        $('*', this.parent).css({
            margin: 0,
            padding: 0,
            listStyle: 'none',
            textDecoration: 'none',
            fontSize: 12,
            color: '#666'
        });
        $('.menuList > .cateMenu', this.parent).css({
            width: 190,
            height: 480,
            background: '#fff',
            position: 'relative'
        });
        $('.menuList > .cateMenu > .leftLi', this.parent).css({
            width: 160,
            height: 26,
            lineHeight: '26px',
            textAlign: 'left',
            padding: '0px 15px',
            // borderBottom: '1px solid #ddd'
        });
        $('.menuList > .cateMenu > li > a', this.parent).css({
            fontSize: '14px',
        })
        $('.menuList > .cateMenu > li >.menuContent', this.parent).css({
            paddingTop: 30,
            width: 1000,
            height: 450,
            // border: '1px solid #f00',
            position: 'absolute',
            left: 192,
            top: 0,
            textAlign: 'left',
            zIndex: 99,
            background: '#fff',
            display: 'none',
        });
        $('.itemRow', this.father).css({
            position: 'relative',
            // verticalAlign: 'top',
        })
        $('.itemRow li', this.parent).css({
            display: 'inline-block'
        })
        $('#menuContent .itemRow .itemRight', this.father).css({
            display: 'inline-block',
            width: 930,
            marginLeft: 70,
        })
        $('.itemRow .itemRight li', this.parent).css({
            height: 32,
            margin: '0 5px',
        })
        $('.itemRow .itemRight li a', this.parent).css({
            display: 'inline-block',
            lineHeight: '100%',
            borderLeft: '1px solid #ddd',
            padding: '0 0 0 10px',
        })

        $('.itemRow .cateType', this.parent).css({
            position: 'absolute',
            left: 0,
            top: 0,
            fontWeight: 900,
            width: 70,
            textAlign: 'center',
        })

    }
    Init.prototype.bindEvent = function() {
        //触碰左侧在右侧显示具体内容
        $('.cateMenu', this.parent).on('mouseenter', '.leftLi', function(e) {
                $('.menuContent[data-id="data' + $(this).index() + '"]').show();
            }).on('mouseleave', '.leftLi', function(e) {
                $('.menuContent[data-id="data' + $(this).index() + '"]').hide();
            })
            //左侧li鼠标悬停时样式变化
        $('.menuList > .cateMenu > li', this.parent).hover(function() {
                $('.menuList > .cateMenu > li').css({
                    background: '#fff',
                })
                $(this).css({
                    background: '#ddd',
                })
            }, function() {
                $(this).css({
                    background: '#fff',
                })
            })
            //a标签
        $('.menuList > .cateMenu > li > a').hover(function() {
            $(this).css({
                color: 'rgb(102, 102, 102)',
            })
            $(this).css({
                color: '#f10215',
            })
        }, function() {
            $(this).css({
                color: 'rgb(102, 102, 102)',
            })
        })


        //右侧li鼠标悬停时字体变色
        $('.menuContent li', this.parent).hover(function() {
            $(this).find('a').css('color', 'red');
        }, function() {
            $(this).find('a').css('color', '#666');
        })
    }


    $.fn.extend({
        menu: function(options) {
            options.parent = this;
            new Init(options);
        }
    })

}())