;
(function() {
    function VideoBg(selector) {
        Object.defineProperty(this, "self", {
            get: function() {
                return selector;
            },
            set: function(newSelector) {
                this.parent = newSelector;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(this, "parent", {
            get: function() {
                if (selector.hasClass('body-iframe')) {
                    return $(window);
                }
                return selector.parent();
            },
            set: function(newSelector) {
                this.parent = newSelector.parent();
            },
            enumerable: true,
            configurable: true
        });
        this.getVideoRatio = function() {
            return 1.78;
        };
        this.resize = function() {
            var parentWidth = this.parent.width();
            var parentHeight = this.parent.height();
            var ratio = parentHeight / parentWidth;
            if (ratio > 0.5625) {
                this.self.height(parentHeight);
                this.self.width(parentHeight * this.getVideoRatio());
            } else {
                this.self.width(parentWidth * this.getVideoRatio());
                this.self.height(parentWidth / this.getVideoRatio());
            }
            this.self.css({
                'left': '50%',
                'top': '50%',
                'transform': 'translate(-50%, -50%)'
            });
        };
    }
    $('[class*="-iframe-enabled-"]:not(.iframe-mockup):visible').each(function(i, iframe) {
        (new VideoBg($(iframe))).resize();
        if ($(window).width() < 768) {
            $(iframe).attr('src', '');
        }
    });
})();