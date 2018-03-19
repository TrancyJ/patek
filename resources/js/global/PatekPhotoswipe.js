!function (e) {
}(window.Patek = window.Patek || {}), $(document).ready(function () {
    Patek.Photoswipe.firstInit = !0;
    var e = null;
    Patek.Photoswipe.initPhotoswipeGallery = function (n, t, i) {
        function r() {
            n.classList.contains("pswp--open") && setTimeout(function () {
                n.getBoundingClientRect().width == window.innerWidth ? window.requestAnimationFrame(function () {
                    gallery && (gallery.invalidateCurrItems(), gallery.updateSize(!0))
                }) : r()
            }, 500)
        }

        i -= 1;
        var l = {
            maxSpreadZoom: 2,
            barsSize: {top: 0, bottom: "auto"},
            closeOnScroll: !1,
            closeEl: !1,
            captionEl: !0,
            fullscreenEl: !1,
            zoomEl: !1,
            shareEl: !1,
            counterEl: !1,
            arrowEl: !1,
            preloaderEl: !1,
            tapToClose: !1,
            clickToCloseNonZoomable: !0,
            animateTransitions: !0,
            closeElClasses: ["caption", "top-bar"],
            index: i
        };
        e = new PhotoSwipe(n, PhotoSwipeUI_Default, t, l);
        var o, a, c = !1, s = !1, w = !0, _ = 1;
        return e.listen("beforeResize", function () {
            window.devicePixelRatio >= 2 && (s = !0, _ = 2), o = e.viewportSize.x * _, c && 1e3 > o ? (c = !1, a = !0) : !c && o >= 1e3 && (c = !0, a = !0), a && !w && e.invalidateCurrItems(), w && (w = !1), a = !1
        }), e.listen("gettingData", function (e, n) {
            null != n.screen1800.html ? (n.html = n.screen1800.html, n.title = n.screen1800.title) : null == n.screen1800.html && c ? (s ? n.src = n.screen1800.retina : n.src = n.screen1800.src, n.w = n.screen1800.w, n.h = n.screen1800.h, n.msrc = n.screen1800.src, n.title = n.screen1800.title) : null != n.screen1800.html || c || (s ? n.src = n.screen1000.retina : n.src = n.screen1000.src, n.src = n.screen1000.src, n.w = n.screen1000.w, n.h = n.screen1000.h, n.msrc = n.screen1000.src, n.title = n.screen1000.title)
        }), e.init(), $("#gallery_head, #left_fixed_nav, #left_arrow_main_gallery, #right_arrow_main_gallery").fadeIn(), $("#right_arrow_main_gallery").off("click"), $("#left_arrow_main_gallery").off("click"), $(".close_gallery_btn").off("click"), $("#right_arrow_main_gallery").on("click", function () {
            e.nextAnimated()
        }), $("#left_arrow_main_gallery").on("click", function () {
            e.prevAnimated()
        }), $(".close_gallery_btn").on("click", function () {
            e.close()
        }), e.listen("close", function () {
            $("#gallery_head, #left_fixed_nav, #left_arrow_main_gallery, #right_arrow_main_gallery").fadeOut()
        }), window.addEventListener("orientationchange", function () {
            r()
        }), e
    }
}(window.Patek.Photoswipe = window.Patek.Photoswipe || {}));