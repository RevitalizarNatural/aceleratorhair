! function(i) {
    "use strict";
    var e;
    i(document).on("mousedown", 'input[type="file"]', function() {
        e = this.files
    }), i(document).on("change", 'input[type="file"]', function() {
        var t = this.files,
            s = parseInt(this.getAttribute("data-max-size"), 10),
            n = i(this).parents("form").find('input[type="file"]').get().reduce(function(i, e) {
                var t = 0;
                for (let i = 0; i < e.files.length; i++) t += e.files[i].size ? e.files[i].size : 0;
                return i + t
            }, 0);
        if (!isNaN(s) && s && n > s) return window.alert("Files are too big! Max total upload size is " + Math.floor(s / 1048576) + "MB"), void(this.value = null);
        if (t && t[0]) {
            if (!isNaN(s) && s && t[0].size && t[0].size > s) return window.alert("File is too big! Max upload size is " + Math.floor(s / 1048576) + "MB"), void(this.value = null);
            i(this).siblings('input[type="text"]').val(t[0].name)
        } else this.files = e
    })
}(jQuery);