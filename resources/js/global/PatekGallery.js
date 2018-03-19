!function (e) {
}(window.Patek = window.Patek || {});
var gallery = null, mainGalleryNav = null, firstInit = !0, isOpen = !1;
$(document).ready(function () {
    var e, t = ($(".gallery_navigation").slick({
        arrows: !1,
        dots: !0,
        infinite: !1,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: !1,
        useCss: !0,
        useTransform: !0,
        dotsClass: "dots_navigation",
        lazyload: "progressive",
        responsive: [{
            breakpoint: deviceSizes.mdDevice,
            settings: {slidesToShow: 4, slidesToScroll: 4, infinite: !1}
        }, {
            breakpoint: deviceSizes.smDevice,
            settings: {slidesToShow: 3, slidesToScroll: 3, infinite: !1}
        }, {breakpoint: deviceSizes.xsDevice, settings: {slidesToShow: 2, slidesToScroll: 2, infinite: !1}}]
    }).slick("slickGoTo", 1, !0), {}), i = null;
    Patek.Gallery.initVideoInSlide = function (e, a) {
        if (!$("#" + a).find("video").first().hasClass("vjs-tech")) {
            $("#" + a).find("picture").hide();
            var n = {controls: "true", autoplay: !1, preload: "none", loop: !1, fluid: !0};
            $("#" + a).find(".hidden_video").remove(), $("#" + a).find(".video_link").remove(), $("#" + a).append($("#" + e).html()), $("#" + a).find("video").each(function (e, a) {
                var o = $(a).attr("id") + "-photoswipe", r = $(a).attr("data-poster");
                null != t[o] && t[o].dispose(), $(a).attr("id", o);
                var l = videojs(o, n);
                t[o] = l, l.videoJsResolutionSwitcher(), l.setUpBgResponsive().setUpBg(r), i.options.maxSpreadZoom = i.getZoomLevel(), i.options.getDoubleTapZoom = function (e, t) {
                    return t.initialZoomLevel
                }
            })
        }
    }, Patek.Gallery.initGallery = function (t, a) {
        function n() {
            o.classList.contains("pswp--open") && setTimeout(function () {
                o.getBoundingClientRect().width == window.innerWidth ? window.requestAnimationFrame(function () {
                    i && (i.invalidateCurrItems(), i.updateSize(!0))
                }) : n()
            }, 500)
        }

        isOpen = !0, $(".window_container").show();
        var o = document.querySelectorAll(".pswp")[0], r = [];
        $("#" + t + " div.thumb_element").not(".slick-cloned").each(function (e, t) {
            var i = ($(this).find(".banner_picture img").attr("src"), {});
            $(this).find(".hidden_link").each(function (e, t) {
                console.log($(t).data("type"));
                var a = $(t).attr("data-caption");
                if ("video" == $(t).data("type")) i.screen1800 = {
                    html: $(t)[0].outerHTML,
                    title: a
                }, i.screen1000 = {
                    html: $(t)[0].outerHTML,
                    title: a
                }; else if ("threesixty" == $(t).data("type")) i.screen1800 = {
                    html: $(t)[0].outerHTML,
                    title: a
                }, i.screen1000 = {html: $(t)[0].outerHTML, title: a}; else if ("image" == $(t).data("type")) {
                    size = t.getAttribute("data-img-size").split("x");
                    var n = parseInt(size[0], 10), o = parseInt(size[1], 10), r = $(this).attr("data-img-link"), l = $(this).attr("data-img-retina-link"), s = $(this).attr("data-screen-width");
                    i["screen" + s] = {w: n, h: o, src: r, retina: l, wsrc: r, title: a}
                }
            }), r.push(i)
        }), i = Patek.Photoswipe.initPhotoswipeGallery(o, r, a), i.listen("afterChange", function () {
            $("video") && $("video").each(function (e) {
                $(this).get(0).pause()
            });
            var e = i.items[i.getCurrentIndex()].html;
            "video" == $(e).attr("data-type") ? (Patek.Gallery.initVideoInSlide($(e).attr("data-video-id"), $(e).attr("id")), i.options.maxSpreadZoom = i.getZoomLevel(), i.options.getDoubleTapZoom = function (e, t) {
                return 1.33
            }) : "threesixty" == $(e).attr("data-type") ? (i.options.maxSpreadZoom = i.getZoomLevel(), i.options.getDoubleTapZoom = function (e, t) {
                return 1.33
            }) : ($(window).width() < 500 && i.zoomTo(.7, {
                x: i.viewportSize.x / 2,
                y: -i.viewportSize.y / 2
            }, 200, !1, function (e) {
            }), i.options.maxSpreadZoom = 1.33)
        }), $(document).on("click", "#stop_three_sixty", function () {
            Patek.Gallery.CloseThreeSixty()
        }), setTimeout(function () {
            var e = i.items[i.getCurrentIndex()].html;
            "video" == $(e).attr("data-type") && Patek.Gallery.initVideoInSlide($(e).attr("data-video-id"), $(e).attr("id"))
        }, 500), $("#gallery_head, #left_fixed_nav, #left_arrow_main_gallery, #right_arrow_main_gallery").fadeIn();
        var l = r.length - 1;
        l > 6 && (l = 6), mainGalleryNav = $("#left_fixed_nav").slick({
            arrows: !1,
            dots: !1,
            infinite: !0,
            slidesToShow: l,
            slidesToScroll: 1,
            vertical: !0,
            verticalSwiping: !0,
            centerMode: !0,
            responsive: [{
                breakpoint: deviceSizes.mdDevice,
                settings: {variableWidth: !1, slidesToShow: 4, slidesToScroll: 1, infinite: !1, dots: !0}
            }, {
                breakpoint: deviceSizes.smDevice,
                settings: {variableWidth: !1, slidesToShow: 2, slidesToScroll: 1, infinite: !1, dots: !0}
            }, {
                breakpoint: deviceSizes.xsDevice,
                settings: {slidesToShow: 1, slidesToScroll: 1, infinite: !1, dots: !1, vertical: !0}
            }]
        }).slick("slickGoTo", a - 1, !1), i.listen("close", function () {
            $("#left_fixed_nav").slick("unslick"), $("#gallery_head, #left_fixed_nav, #left_arrow_main_gallery, #right_arrow_main_gallery").fadeOut(), $(".window_container").hide(), isOpen = !1
        }), i.listen("afterChange", function () {
            var e = i.getCurrentIndex();
            $("#left_fixed_nav").slick("slickGoTo", e, !1)
        }), $("#left_fixed_nav").on("click", "div.left_thumb_element", function () {
            var e = parseInt($(this).attr("data-nav-index"));
            $("#left_fixed_nav").slick("slickGoTo", e, !1), $(".left_thumb_element").removeClass("slick-current"), $(".left_thumb_element").removeClass("slick-center"), $(this).addClass("slick-current").addClass("slick-center"), i.goTo(e - 1)
        }), $(".hide_left_nav").click(function () {
            $("#left_fixed_nav").toggleClass("hidden_nav"), $(".glry_container").toggleClass("fullscreen"), $("#left_arrow_main_gallery").toggleClass("extra_left"), $(".hide_left_nav").toggleClass("hidden_nav"), setTimeout(function () {
                i.updateSize(!0)
            }, 500)
        }), setTimeout(function () {
            var e = i.items[i.getCurrentIndex()].html;
            "video" == $(e).attr("data-type") ? (Patek.Gallery.initVideoInSlide($(e).attr("data-video-id"), $(e).attr("id")), i.options.maxSpreadZoom = i.getZoomLevel(), i.options.getDoubleTapZoom = function (e, t) {
                return 1.33
            }) : "threesixty" == $(e).attr("data-type") ? (i.options.maxSpreadZoom = i.getZoomLevel(), i.options.getDoubleTapZoom = function (e, t) {
                return 1.33
            }) : ($(window).width() < 500 && i.zoomTo(.7, {
                x: i.viewportSize.x / 2,
                y: -i.viewportSize.y / 2
            }, 200, !1, function (e) {
            }), i.options.maxSpreadZoom = 1.33)
        }, 500), window.addEventListener("orientationchange", function () {
            n(), null != e && Patek.Gallery.CloseThreeSixty()
        })
    }, Patek.Gallery.InitThreeSixty = function (t) {
        if (t - 1 === i.getCurrentIndex()) {
            if ($(".spinner_subtext").show(), $("#threesixty_container").fadeIn(), null == e) {
                var a = $(".threesixty.watch_360").attr("data-folder"), n = $(".threesixty.watch_360").attr("id"), o = $(".threesixty.watch_360").attr("data-start-position"), r = $(".threesixty.watch_360").attr("data-nb-images"), l = $(".pswp").height(), s = $(".pswp").width(), d = "2200", c = "1x";
                1 == Patek.Global.IsRetina() && (c = "2x"), $(window).width() < 1200 && (d = "1200"), $(window).width() < 800 && (d = "800"), window.navigator.userAgent.indexOf("Edge") > -1 && (d = "800"), a = a + "/" + d + "/" + c + "/", console.log("folder:", a), e = n, Patek.Threesixtygallery.OpenThreeSixty(n, a, r, o, s, l, function () {
                    setTimeout(function () {
                        $(".three_sixty_arrow").fadeOut(), $("#threesixty_container").fadeIn()
                    }, 1e3)
                })
            } else setTimeout(function () {
                $(".three_sixty_arrow").fadeOut(), $("#threesixty_container").fadeIn()
            }, 1e3);
            i.updateSize(!0), $("#left_arrow_main_gallery").fadeOut(), $("#right_arrow_main_gallery").fadeOut(), $("#gallery_head").fadeOut(), $("#left_fixed_nav").addClass("disabled")
        }
    }, Patek.Gallery.CloseThreeSixty = function () {
        var e = $(".current-image").attr("src");
        $("#threesixty_modal_container img.fixed_img").attr("src", e), $("#threesixty_container").fadeOut(), isOpen && ($("#left_arrow_main_gallery").fadeIn(), $("#right_arrow_main_gallery").fadeIn(), $("#gallery_head").fadeIn(), $("#left_fixed_nav").removeClass("disabled"), $(".three_sixty_arrow").fadeIn(), i.updateSize(!0))
    }
}(window.Patek.Gallery = window.Patek.Gallery || {}));