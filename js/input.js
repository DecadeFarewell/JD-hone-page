(function() {

    function Init(options) {
        //需要把dom结构插入到的位置
        this.parent = options.parent;
        //jsonp传递时key值，让后端返回带上的属性名
        this.key = options.key || 'cb';
        //jsonp传递时value值，让后端返回的数据放在jsonpCallback()里面
        this.jsonpCallback = options.jsonpCallback || '';
        //请求数据的地址
        this.url = options.url;
        //请求数据方式
        this.type = options.type;
        this.inputWidth = options.inputWidth || $(this.parent).width() - 100;
        this.inputHeight = options.inputHeight || $(this.parent).height();
        this.fontSize = options.fontSize || 18;
        this.success = options.success;
        this.dataName = options.dataName;
        this.btnHeight = options.btnHeight;
        //创建dom结构
        this.creatDom();
        //添加css样式
        this.addCss();
        this.bindEvent();
    }
    Init.prototype.creatDom = function() {
        var oDiv = $('<div class="content"></div>');
        var oInput = $('<input type="text" class="plugIn-input-search" placeholder = "电动自行车">');
        var oBtn = $('<button class="search-btn"><img src="./images/sousuo.png" alt=""></button>');
        var oSpan = $('<span class="camera"></span>')
        oDiv.append(oSpan).append(oInput).append(oBtn).appendTo($(this.parent));
    }
    Init.prototype.addCss = function() {
        $('.content', this.parent).css({
            width: 595,
            height: 31,
            display: 'flex',
        })
        $('.plugIn-input-search', this.parent).css({
            width: this.inputWidth,
            height: this.inputHeight,
            color: '#999',
            paddingLeft: 10,
            border: '1px solid transparent',
        })
        $('.camera', this.parent).css({
            width: 18,
            height: 16,
            position: 'absolute',
            right: 60,
            top: '50%',
            marginTop: -5,
            cursor: 'pointer',
            display: 'block',
            background: 'url(./images/camera.png) no-repeat'
        })
        $('.search-btn', this.parent).css({
            position: 'relative',
            width: 50,
            height: this.btnHeight,
            fontSize: this.fontSize,
            lineHeight: '22px',
            background: '#f10215',
            color: '#fff',
            outline: 'none',
            border: '1px solid transparent',
            backgroundSize: '50% 58%',
            cursor: 'pointer'
        })
        $('.search-btn img', this.parent).css({
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            margin: 'auto',
            width: '50%',
            height: '58%',
        })
    }
    Init.prototype.bindEvent = function() {
        var self = this;
        $('.plugIn-input-search', this.parent).on('input', function(e) {
            $.ajax({
                async: false,
                type: self.type,
                url: self.url,
                data: self.dataName + '=' + $(this).val(),
                dataType: 'jsonp',
                jsonp: self.key,
                jsonpCallback: self.jsonpCallback,
            });
        }).focus(function() {
            console.log(this);
            $(this).css({
                outline: 'none',
            })
        });
    }


    $.fn.extend({
        inputSearch: function(options) {
            options.parent = this;
            new Init(options);
        }
    })
}())