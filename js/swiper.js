(function() {
    function Init(options) {
        this.parent = options.parent;
        this.img = options.img;
        this.imgNum = this.img.length;
        this.times = options.times;
        this.direction = options.direction;
        this.wrapperWidth = options.width;
        this.wrapperHeight = options.height;
        this.animateTime = options.animateTime;
        this.key = true;
        this.nowIndex = 0;
        this.timer = null;
        this.creatDom();
        this.addCss();
        this.autoMove();
        this.bindEvent();
    }
    Init.prototype.creatDom = function() {
        //创建ul
        var oUl = $('<ul class="sliderPage"></ul>');
        //根据传入得图片数量创建li并插入道dom结构中
        var oDiv = $('<div class="pointer"></div>')
        for (var i = 0; i < this.imgNum + 1; i++) {
            if (i == this.imgNum) {
                var lastLi = $('<li></li>');
                var lastImg = $('<img src="' + this.img[0] + '">')
                lastLi.append(lastImg).appendTo(oUl);
            } else {
                var oLi = $('<li></li>');
                var oImg = $('<img src="' + this.img[i] + '">');
                //创建小圆点
                var oSpan = $('<span class="circle "><span>');
                oDiv.append(oSpan);
                oLi.append(oImg).appendTo(oUl);;
            }
        }
        oDiv.appendTo($(this.parent));
        //左右按钮
        var leftBtn = $('<div class="leftBtn btn">&lt;</div>');
        var rightBtn = $('<div class="rightBtn btn">&gt;</div>');

        $(this.parent).append(oUl).append(leftBtn).append(rightBtn);
    }
    Init.prototype.addCss = function() {
            // $('*', this.parent).css({
            //         margin: 0,
            //         padding: 0,
            //         listStyle: 'none',
            //     })
            //     //给最外层wrapper设置宽高
            $(this.parent).css({
                    width: this.wrapperWidth,
                    height: this.wrapperHeight,
                    marginTop: 10,
                    position: 'relative',
                    overflow: 'hidden',
                })
                // ul样式
            $('.sliderPage', this.parent).css({
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: this.wrapperWidth * (this.imgNum + 1),
                    height: "100%",
                    background: '#eee',
                })
                //li样式
            $('.sliderPage li', this.parent).css({
                    width: this.wrapperWidth,
                    height: this.wrapperHeight,
                    float: 'left',
                })
                //img样式
            $('.sliderPage li img', this.parent).css({
                    width: '100%',
                    height: '100%',
                })
                //按钮样式
            $('.wrapper .btn').css({
                position: 'absolute',
                width: 40,
                height: 40,
                top: '50%',
                marginTop: -20,
                color: '#fff',
                background: '#000',
                textAlign: 'center',
                lineHeight: '40px',
                cursor: 'pointer',
                opacity: 0.5,
                display: 'none',
            })
            $('.wrapper .rightBtn').css({
                    right: 0,
                })
                //下方小圆点样式
            $('.wrapper .pointer').css({
                position: 'absolute',
                width: '100%',
                bottom: 20,
                textAlign: 'center',
                zIndex: 98,
            })
            $('.pointer .circle', this.parent).css({
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#ccc',
                    marginLeft: '10px',
                    cursor: 'pointer',
                })
                // $('.pointer .circle').eq(0).addClass('active');
            $('.wrapper .pointer .circle').eq(0).css({
                background: '#f40',
            })
        }
        //添加绑定事件
    Init.prototype.bindEvent = function() {
            var self = this;
            //左右按钮在鼠标移入移出时的出现和隐藏
            $('#slider').hover(function() {
                    $('.wrapper .btn').fadeIn();
                }, function() {
                    $('.wrapper .btn').fadeOut();
                })
                //点击左按钮后退一张
            $('.wrapper').on('click', '.btn', function() {
                if ($(this).hasClass('leftBtn')) {
                    self.move('prev');
                } else if ($(this).hasClass('rightBtn')) {
                    self.move('next');
                }
            })
            $('.wrapper .pointer').on('click', '.circle', function() {
                self.move($(this).index());
            })
            $(self.parent).hover(function() {
                clearInterval(self.timer);
            }, function() {
                self.timer = setInterval(function() {
                    self.move(self.direction);
                }, self.times);
            })
        }
        //切换图片时改变小圆圈得颜色
    Init.prototype.changeIndex = function() {
            $('.wrapper .pointer .circle').css({
                background: "#ccc",
            });
            $('.wrapper .pointer .circle').eq(this.nowIndex).css({
                background: '#f40',
            })
        }
        //自动轮播
    Init.prototype.autoMove = function() {
            var self = this;
            self.timer = setInterval(function() {
                self.move(self.direction);
            }, self.times);
        }
        //事件触发的图片切换函数
    Init.prototype.move = function(direction) {
        var self = this;
        if (self.key) {
            self.key = false;
            if (direction == 'prev') {
                if (self.nowIndex == 0) {
                    self.nowIndex = self.imgNum;
                    console.log(-self.nowIndex * self.wrapperWidth);
                    $('.wrapper .sliderPage').css({
                        left: -self.nowIndex * self.wrapperWidth,
                    })
                    self.nowIndex--;
                    $('.wrapper .sliderPage').animate({
                        left: -self.nowIndex * self.wrapperWidth,
                    }, self.animateTime, function() {
                        self.changeIndex();
                        self.key = true;
                    })
                } else {
                    self.nowIndex--;
                    $('.wrapper .sliderPage').animate({
                        left: -self.nowIndex * self.wrapperWidth,
                    }, self.animateTime, function() {
                        self.changeIndex();
                        self.key = true;
                    })
                }
            } else if (direction == 'next') {
                if (self.nowIndex == self.imgNum - 1) {
                    self.nowIndex++;
                    $('.wrapper .sliderPage').animate({
                        left: -self.nowIndex * self.wrapperWidth,
                    }, self.animateTime, function() {
                        self.nowIndex = 0;
                        $('.wrapper .sliderPage').css({
                            left: 0,
                        })
                        self.changeIndex();
                        self.key = true;
                    })

                } else {
                    self.nowIndex++;
                    $('.wrapper .sliderPage').animate({
                        left: -self.nowIndex * self.wrapperWidth,
                    }, self.animateTime, function() {
                        self.changeIndex()
                        self.key = true;
                    })
                }
            } else if (typeof direction == 'number') {
                self.nowIndex = direction;
                $('.wrapper .sliderPage').animate({
                    left: -self.nowIndex * self.wrapperWidth,
                }, self.animateTime, function() {
                    self.changeIndex();
                    self.key = true;
                })
            }
        }
    }

    $.fn.extend({
        swiper: function(options) {
            options.parent = this;
            new Init(options);
        }
    })
}())