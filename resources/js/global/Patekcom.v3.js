window.Patek = window.Patek || {}, window.lazySizesConfig = window.lazySizesConfig || {}, lazySizesConfig.loadMode = 1, lazySizesConfig.loadHidden = !1, lazySizesConfig.preloadAfterLoad = !1, $(document).ready((window.Patek.Global = window.Patek.Global || {}, Patek.Global.chooseLanguageBoxId = "#choose_language", Patek.Global.localStorageEnabled = !0, Patek.Global.log = !0, Patek.Global.mainContent = ".main_content", Patek.Global.mainFooter = "#main_footer", Patek.Global.mainNavigation = "#main_navigation", Patek.Global.modalMaskId = "#modal_mask", Patek.Global.sessionStorageEnabled = !0, Patek.Global.validationInput = function (e, a) { if (Patek.Global.log && console.log("Patek.Global.validationInput()"), null == e) return !1; if ("" == e) return !1; var o = $("input[name=" + e + "]"); if (null == o) return !1; var t = $("label[for=" + e + "]"); t && t.removeClass("red bold"); var s = o.val(); return null != s && (s = s.replace(/^\s+|\s+$/g, "")), o.val(s), null == s || "" == s ? (t && t.addClass("error"), a = !1) : a }, Patek.Global.IsRetina = function () { return window.devicePixelRatio > 1 || !(!window.matchMedia || !window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),                    (min--moz-device-pixel-ratio: 1.5),                    (-o-min-device-pixel-ratio: 3/2),                    (min-resolution: 1.5dppx)").matches) }, Patek.Global.checkLocalStorage = function () { try { localStorage.setItem("__test", "data") } catch (e) { if (/QUOTA_?EXCEEDED/i.test(e.name)) return !1 } return !0 }, Patek.Global.checkSessionStorage = function () { try { sessionStorage.setItem("__test", "data") } catch (e) { if (/QUOTA_?EXCEEDED/i.test(e.name)) return !1 } return !0 }, Patek.Global.chooseLanguage = function () { Patek.Global.log && console.log("Patek.Global.chooseLanguage()"); var e = Patek.Global.getUrlVar("chooselanguage"); e = e.toUpperCase(); var a = ""; void 0 === $(Patek.Global.modalMaskId)[0] && (a += '<div id="modalmask" class="modalmask"></div>'); var o = Patek.Global.translate("title_language"), t = Patek.Global.translate("choose_language"), s = Patek.Global.translate("available_languages"), r = null, l = ["EN", "ZH", "FR", "DE", "ES", "IT", "JA", "AR"]; languagesLabels = ["English", "简体中文", "Français", "Deutsch", "Español", "Italiano", "日本語", "العربية"], "CHT" == e ? (o = "語言", t = "請選擇語言", s = "尚有以下語言供選擇", r = ["EN", "ZH"], chooseLanguagesLabels = ["English", "简体中文"], l = ["FR", "DE", "ES", "IT", "JA", "AR"], languagesLabels = ["Français", "Deutsch", "Español", "Italiano", "日本語", "العربية"]) : "PT" == e && (r = ["EN", "ES"], chooseLanguagesLabels = ["English", "Español"], l = ["ZH", "FR", "DE", "IT", "JA", "AR"], languagesLabels = ["简体中文", "Français", "Deutsch", "Italiano", "日本語", "العربية"]), void 0 === $(Patek.Global.chooseLanguageBoxId)[0] && (a += '<div id="' + Patek.Global.chooseLanguageBoxId.replace("#", "") + '" class="modal"><div class="close">    <a class="btn bronze rect img close" onclick="Patek.Global.maskDialog(Patek.Global.chooseLanguageBoxId);">        <div class="picto close"></div>    </a></div><div class="bg"></div><div class="ctn">    <div class="intro">        <header><span>' + o + '</span></header>        <p class="bold">' + t + '</p>    </div>    <div class="langs">        <div class="langs_cmds">        </div>    </div>    <div class="other_langs">        <p>' + s + '</p>        <div class="langs_cmds">        </div>    </div>    <div class="logo">       <img src="/resources/svg/logo_patek_beige.svg" alt="" />    </div></div></div>', $(Patek.Global.mainFooter).after(a)); for (var n = '<div class="row">', i = 0; i < r.length; i++) { var c = r[i]; n += '<a href="' + $("a[lang=" + c.toLowerCase() + "]").attr("href") + '" class="btn orange rect text small"><span>' + chooseLanguagesLabels[i] + "</span></a>" } n += "</div>", $(Patek.Global.chooseLanguageBoxId).find(".ctn").find(".langs").find(".langs_cmds").html(n); var d = '<div class="row">'; for (i = 0; i < l.length; i++) c = l[i], d += '<a href="' + $("a[lang=" + c.toLowerCase() + "]").attr("href") + '" class="btn bronze rect text small"><span>' + languagesLabels[i] + "</span></a>", i % 2 == 1 && i < l.length - 1 && (d += '</div><div class="row">'); d += "</div>", $(Patek.Global.chooseLanguageBoxId).find(".ctn").find(".other_langs").find(".langs_cmds").html(d), Patek.Global.showDialog(Patek.Global.chooseLanguageBoxId) }, Patek.Global.direction = function () { return "ar" == $("html").attr("lang").toLowerCase() ? "rtl" : "ltr" }, Patek.Global.GetCookie = function (e) { return Patek.Cookies.get(e) }, Patek.Global.SetCookie = function (e, a, o) { Patek.Cookies.set(e, a, o) }, Patek.Global.UpdateNavWishlistCounter = function () { var e = Patek.Global.GetNumberOfArticlesInWishlist(); $("#wishlist_counter").text(e), e > 0 ? $(".nav_element.wishlist_element").addClass("has_elements") : $(".nav_element.wishlist_element").removeClass("has_elements") }, Patek.Global.AddArticleToWishlist = function (e, a) { var o = Patek.Global.GetCookie("wishlist"), t = []; null != o && "" != o && (t = JSON.parse(o)); for (var s = !0, r = 0; r < t.length; r++) if (t[r].id == e) { s = !1, t.splice(r, 1); break } 1 == s && t.push({ id: e, model: a }), Patek.Global.SetCookie("wishlist", JSON.stringify(t), 180) }, Patek.Global.RemoveAllArticlesFromWishlist = function () { Patek.Global.GetCookie("wishlist"), Patek.Global.SetCookie("wishlist", JSON.stringify([]), 180) }, Patek.Global.GetNumberOfArticlesInWishlist = function () { var e = Patek.Global.GetCookie("wishlist"), a = []; return null != e && "" != e && (a = JSON.parse(e)), a.length }, Patek.Global.IsCurrentArticleInWishlist = function (e) { var a = Patek.Global.GetCookie("wishlist"), o = []; null != a && "" != a && (o = JSON.parse(a)); for (var t = !1, s = 0; s < o.length; s++) if (o[s].id == e) { t = !0; break } return t }, Patek.Global.inputSearchGlobal = "#inputSearchGlobal", Patek.Global.clearGlobalSearch = function () { Patek.Forms.clearInput(Patek.Global.inputSearchGlobal), $(Patek.Global.inputSearchGlobal).focus() }, Patek.Global.getUrlVar = function (e) { return Patek.Global.log && console.log("Patek.Global.getUrlVar()"), Patek.Global.getUrlVars()[e] }, Patek.Global.getUrlVars = function () { Patek.Global.log && console.log("Patek.Global.getUrlVars()"); for (var e, a = [], o = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), t = 0; t < o.length; t++) e = o[t].split("="), a.push(e[0]), a[e[0]] = e[1]; return a }, Patek.Global.slugify = function (e) { return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "").replaceAll("'", "") }, Patek.Global.scrollTo = function (e, a) { Patek.Global.log && console.log("Patek.Global.scrollTo()"), null == a && (a = 0); var o = $(e).offset().top + a; $("html, body").animate({ scrollTop: o }, 800) }, Patek.Global.scrollToTop = function () { Patek.Global.log && console.log("Patek.Global.scrollToTop()"), $("html, body").animate({ scrollTop: 0 }, 800) }, Patek.Global.showDialog = function (e) { Patek.Global.log && console.log("Patek.Global.showDialog()"); var a = $(Patek.Global.modalMaskId), o = $(e); null != o && void 0 !== o && (null != a && a.attr("onclick", "Patek.Global.maskDialog('" + e + "');"), window.history.pushState({}, "", "?open=box"), console.log(window.location.search), null != a && a.fadeIn("slow"), o.fadeIn("slow"), window.onpopstate = function () { Patek.Global.maskDialog(e) }) }, Patek.Global.maskDialog = function (e) { if (Patek.Global.log && console.log("Patek.Global.maskDialog()"), "?open=box" == window.location.search) window.history.back(); else { var a = $(Patek.Global.modalMaskId), o = $(e); null != o && o.fadeOut("slow"), null != a && a.fadeOut("slow"), $("body,html").removeClass("locked"), window.onpopstate = function () { } } }, Patek.Global.redirect = function (e) { Patek.Global.log && console.log("Patek.Global.redirect()"), null != e && "" != e && $(location).attr("href", e) }, Patek.Global.toggle = function (e) { null != e && void 0 !== e && $(e).toggleClass("covered") }, Patek.Global.url = function (e, a) { return Patek.Global.log && console.log("Patek.Global.url()"), null == e || "" == e ? "" : (null != a && void 0 !== a || (a = $("html").attr("lang").toLowerCase()), "home" == (e = e.toLowerCase()) ? "en" == a ? "/en/home" : "zh" == a ? "/cn/百达翡丽官网" : "fr" == a ? "/fr/accueil" : "de" == a ? "/de/home" : "es" == a ? "/es/pagina-de-inicio" : "it" == a ? "/it/home" : "ja" == a ? "/ja/ホーム" : "ru" == a ? "/ru/главная" : "ar" == a ? "/ar/الصفحة-الرئيسية" : "/en/home" : "owners" == e ? "en" == a ? "/en/owners" : "zh" == a ? "/chs/百达翡丽用户" : "fr" == a ? "/fr/proprietaires" : "de" == a ? "/de/uhrenbesitzer" : "es" == a ? "/es/propietarios" : "it" == a ? "/it/proprietari" : "ja" == a ? "/ja/オーナー" : "ru" == a ? "/ru/владельцы" : "ar" == a ? "/ar/الملاك" : "/en/owners" : "ownerregistration" == e ? "en" == a ? "/en/retail-service/owner-registration" : "zh" == a ? "/chs/零售和服务/表主登记|百达翡丽客服" : "fr" == a ? "/fr/reseau-de-vente-service-client/registre-des-proprietaires" : "de" == a ? "/de/einzelverkauf-service/besitzerregister" : "es" == a ? "/es/distribuidores-servicio/inscripcion-de-propietarios" : "it" == a ? "/it/concessionari-e-servizio/registro-dei-proprietari" : "ja" == a ? "/ja/リテール-サービス/オーナー登録" : "ru" == a ? "/ru/продажи-и-обслуживание/регистрация-владельцев" : "ar" == a ? "/ar/retail-service/تسجيل-المالك" : "/en/owners" : "") }, void (Patek.Global.translate = function (e, a) { return Patek.Translations.get(e, a) }))), $(document).ready((window.Patek.Cookies = window.Patek.Cookies || {}, Patek.Cookies.allowed = !1, Patek.Cookies.messageDisplayed = !1, Patek.Cookies.messageId = "#cookies_disclaimer", Patek.Cookies.transitionWidth = 1e3, Patek.Cookies.allow = function () { Patek.Global.log && console.log("Patek.Cookies.allow()"), Patek.Cookies.allowed = !0, Patek.Global.localStorageEnabled && (localStorage.CookiesAllowed = !0), Patek.Cookies.hideMessage() }, Patek.Cookies.displayMessage = function () { Patek.Global.log && console.log("Patek.Cookies.displayMessage()"), $(window).width() >= Patek.Cookies.transitionWidth && ($(Patek.Global.mainContent).addClass("cookies"), $(Patek.Global.mainNavigation).addClass("cookies")), $(Patek.Global.modalMaskId).addClass("cookies"), $(Patek.Global.modalMaskId).attr("onclick", "Patek.Cookies.hideMessage();"), $(Patek.Global.modalMaskId).show(), $(Patek.Cookies.messageId).show(), Patek.Cookies.messageDisplayed = !0, null != localStorage && "undefined" != typeof localStorage && (localStorage.CookiesMessageDisplayed = !0) }, Patek.Cookies.get = function (e) { for (var a = e + "=", o = decodeURIComponent(document.cookie).split(";"), t = 0; t < o.length; t++) { for (var s = o[t]; " " == s.charAt(0) ;) s = s.substring(1); if (0 == s.indexOf(a)) return s.substring(a.length, s.length) } return "" }, Patek.Cookies.hideMessage = function () { Patek.Global.log && console.log("Patek.Cookies.hideMessage()"); var e = $(window).width(); if ($(Patek.Cookies.messageId).slideToggle("slow"), $(Patek.Global.modalMaskId).hide(), $(Patek.Global.modalMaskId).removeAttr("onclick"), e >= Patek.Cookies.transitionWidth) { $(Patek.Global.mainNavigation).animate({ top: "0px" }, 500, function () { $(Patek.Global.mainNavigation).removeClass("cookies") }); var a = $(Patek.Global.mainContent).css("marginTop").replace("px", ""); a = parseInt(a) - 92, $(Patek.Global.mainContent).animate({ marginTop: a + "px" }, 500, function () { $(Patek.Global.mainContent).removeClass("cookies") }) } $(Patek.Global.modalMaskId).removeClass("cookies") }, void (Patek.Cookies.set = function (e, a, o) { var t = new Date; t.setTime(t.getTime() + 24 * o * 60 * 60 * 1e3); var s = "expires=" + t.toUTCString(); document.cookie = e + "=" + a + ";" + s + ";path=/" }))), $(document).ready((window.Patek.GeoLocation = window.Patek.GeoLocation || {}, Patek.GeoLocation.get = function () { if (Patek.Global.log && console.log("Patek.GeoLocation.get()"), !Patek.Global.sessionStorageEnabled || null == sessionStorage) return Patek.GeoLocation.geolocate(); if (null == sessionStorage.GeoLocated || !sessionStorage.GeoLocated) return Patek.GeoLocation.geolocate(); var e = jQuery.Deferred(), a = new Object; return a.Country = { Code: sessionStorage.GeoLocCountryCode, Name: sessionStorage.GeoLocCountryName }, a.Region = { Code: sessionStorage.GeoLocRegionCode, Name: sessionStorage.GeoLocRegionName }, a.City = { Zip: sessionStorage.GeoLocZipCode, Name: sessionStorage.GeoLocCity }, e.resolve(a), e.promise() }, void (Patek.GeoLocation.geolocate = function () { Patek.Global.log && console.log("Patek.GeoLocation.geolocate()"); var e = jQuery.Deferred(); return jQuery.ajax({ url: "https://freegeoip.net/json/", async: !0, success: function (a) { if (null != a && void 0 !== a) { var o = a.country_code.toUpperCase(), t = a.country_name, s = a.region_code.toUpperCase(), r = a.region_name, l = a.zip_code.toUpperCase(), n = a.city, i = new Object; i.Country = { Code: o, Name: t }, i.Region = { Code: s, Name: r }, i.City = { Zip: l, Name: n }, Patek.Global.sessionStorageEnabled && (sessionStorage.GeoLocCountryCode = o, sessionStorage.GeoLocCountryName = t, sessionStorage.GeoLocRegionCode = s, sessionStorage.GeoLocRegionName = r, sessionStorage.GeoLocZipCode = l, sessionStorage.GeoLocCity = n, sessionStorage.GeoLocated = !0), e.resolve(i) } } }), e.promise() }))), $(document).ready((window.Patek.Newsletter = window.Patek.Newsletter || {}, Patek.Newsletter.btnReset = "#btnReset", Patek.Newsletter.btnSubscribe = "#btnSubscribe", Patek.Newsletter.errorMsg = "", Patek.Newsletter.formId = "#formSubscription", Patek.Newsletter.formIdGTM = "newsletter_subscription", Patek.Newsletter.inputEmail = "inputNewsletterEmail", Patek.Newsletter.inputFirstname = "inputNewsletterFirstname", Patek.Newsletter.inputLastname = "inputNewsletterLastname", Patek.Newsletter.inputPolicy = "inputNewsletterAcceptPolicy", Patek.Newsletter.linkPrivacy = "#lblNewsletterAcceptPolicy", Patek.Newsletter.log = !0, Patek.Newsletter.requiredFieldsForSubscription = [["inputNewsletterFirstname", "text"], ["inputNewsletterLastname", "text"], ["inputNewsletterEmail", "text", "email"]], Patek.Newsletter.requiredFieldsForUnsubscription = [["inputNewsletterEmail", "text", "email"]], Patek.Newsletter.subExistsMsg = "", Patek.Newsletter.subSuccessMsg = "", Patek.Newsletter.unsubNotExistsMsg = "", Patek.Newsletter.unsubSuccessMsg = "", Patek.Newsletter.formatMessage = function (e) { Patek.Newsletter.log && console.log("Patek.Newsletter.formatMessage"); var a = e; return null == a ? "" : a.replace ? a = (a = (a = (a = a.replace("<message", "<p")).replace("</message>", "</p>")).replace('success="0"', 'class="modal_smalltext error"')).replace('success="1"', 'class="modal_smalltext confirm"') : "" }, Patek.Newsletter.setFormStatus = function (e) { e ? ($(Patek.Newsletter.btnReset).addClass("disabled"), $(Patek.Newsletter.btnSubscribe).addClass("disabled")) : ($(Patek.Newsletter.btnReset).removeClass("disabled"), $(Patek.Newsletter.btnSubscribe).removeClass("disabled")) }, Patek.Newsletter.subscribe = function () { if (Patek.Newsletter.log && console.log("Patek.Newsletter.subscribe"), !Patek.Forms.sendingInProgress) { var e = $("html").attr("lang"); if (Patek.Forms.checkRequiredFields(Patek.Newsletter.requiredFieldsForSubscription)) if ($(Patek.Newsletter.linkPrivacy).removeClass("error"), $("#" + Patek.Newsletter.inputPolicy).is(":checked")) { Patek.Forms.pleaseWait(), Patek.Forms.sendingInProgress = !0, Patek.Newsletter.setFormStatus(!0); var a = Patek.Global.GetCookie("token"); $.ajax({ type: "POST", url: "/forms/NewsletterService.asmx/Subscribe?token=" + a, data: "{'language': '" + e + "', 'lastname': '" + Patek.Forms.getValue(Patek.Newsletter.inputLastname, "text") + "', 'firstname': '" + Patek.Forms.getValue(Patek.Newsletter.inputFirstname, "text") + "', 'email': '" + Patek.Forms.getValue(Patek.Newsletter.inputEmail, "text") + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (e) { if (Patek.Newsletter.log && console.log("Patek.Newsletter.subscribe => SUCCESS: " + e), Patek.Forms.sendingInProgress = !1, Patek.Newsletter.setFormStatus(!1), void 0 !== e && "" != e) { var a = e.d, o = a.indexOf('success="0"') >= 0; a = Patek.Newsletter.formatMessage(a), o ? Patek.Forms.error(Patek.Newsletter.formId, a) : (Patek.Forms.clear(Patek.Newsletter.formId), Patek.Forms.confirm(Patek.Newsletter.formId, Patek.Newsletter.subSuccessMsg), window.dataLayer = window.dataLayer || [], window.dataLayer.push({ event: "formSubmissionSuccess", formId: Patek.Newsletter.formIdGTM })) } else Patek.Forms.error(Patek.Newsletter.formId, Patek.Newsletter.errorMsg) }, error: function (e) { Patek.Newsletter.log && console.log("Patek.Newsletter.subscribe => ERROR:" + e), Patek.Forms.sendingInProgress = !1, Patek.Newsletter.setFormStatus(!1), Patek.Forms.error(Patek.Newsletter.formId, Patek.Newsletter.errorMsg) } }) } else $(Patek.Newsletter.linkPrivacy).addClass("error"); else Patek.Forms.error(Patek.Newsletter.formId, Patek.Forms.requiredFieldsMsg) } }, Patek.Newsletter.unsubscribe = function () { Patek.Newsletter.log && console.log("Patek.Newsletter.unsubcribe"); var e = $("html").attr("lang"); if (Patek.Forms.checkRequiredFields(Patek.Newsletter.requiredFieldsForUnsubscription)) { var a = Patek.Global.GetCookie("token"); $.ajax({ type: "POST", url: "/forms/NewsletterService.asmx/Unsubscribe?token=" + a, data: "{'language': '" + e + "', 'email': '" + Patek.Forms.getValue(Patek.Newsletter.inputEmail, "text") + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (e) { Patek.Newsletter.log && console.log("Patek.Newsletter.unsubcribe => SUCCESS: " + e), void 0 !== e && "" != e ? Patek.Newsletter.formatMessage(e.d).indexOf('success="0"') >= 0 ? Patek.Forms.error(Patek.Newsletter.formId, Patek.Newsletter.errorMsg) : (Patek.Forms.clear(Patek.Newsletter.formId), Patek.Forms.confirm(Patek.Newsletter.formId, Patek.Newsletter.unsubSuccessMsg)) : Patek.Forms.error(Patek.Newsletter.formId, Patek.Newsletter.errorMsg) }, error: function (e) { Patek.Newsletter.log && console.log("Patek.Newsletter.unsubcribe => ERROR:" + e), Patek.Forms.error(Patek.Newsletter.formId, Patek.Newsletter.errorMsg) } }) } else Patek.Forms.error(Patek.Newsletter.formId, Patek.Forms.requiredFieldsMsg) }, void (Patek.Newsletter.unsubscribeFromNewsletter = function () { }))), $(document).ready((window.Patek.Owners = window.Patek.Owners || {}, Patek.Owners.btnReset = "#btnOwnersReset", Patek.Owners.btnValidate = "#btnOwnersSend", Patek.Owners.formId = "formLogin", Patek.Owners.inputLogin = "inputOwnersLogin", Patek.Owners.log = !0, Patek.Owners.loginBox = "#owners_login", Patek.Owners.clearInformations = function () { Patek.Owners.log && console.log("Patek.Owners.clearInformations()"), Patek.Global.sessionStorageEnabled && null != sessionStorage && (sessionStorage.removeItem("IsUserLogged"), sessionStorage.removeItem("UserId"), sessionStorage.removeItem("UserGuid"), sessionStorage.removeItem("UserType")) }, Patek.Owners.closeLogin = function () { Patek.Owners.log && console.log("Patek.Owners.closeLogin()"), Patek.Owners.resetLogin(), Patek.Global.maskDialog(Patek.Owners.loginBox) }, Patek.Owners.displaySection = function (e) { Patek.Owners.log && console.log("Patek.Owners.displaySection()"), Patek.Owners.isLogged() ? Patek.Global.redirect(e) : Patek.Owners.login() }, Patek.Owners.error = function (e) { $("#" + Patek.Owners.formId).find(".msg").html('<p class="error">' + e + "</p>") }, Patek.Owners.isLogged = function () { return Patek.Owners.log && console.log("Patek.Owners.isLogged()"), !!Patek.Global.sessionStorageEnabled && null != sessionStorage && void 0 !== sessionStorage.IsUserLogged && "true" == sessionStorage.IsUserLogged }, Patek.Owners.login = function () { Patek.Owners.log && console.log("Patek.Owners.login()"), Patek.Global.showDialog(Patek.Owners.loginBox) }, Patek.Owners.loginKeyUp = function (e) { Patek.Owners.log && console.log("Patek.Owners.loginKeyUp()"); var a = $("input[name=" + Patek.Owners.inputLogin + "]").val(); null == a || void 0 === a || "" == a ? $(Patek.Owners.btnReset).addClass("disabled") : $(Patek.Owners.btnReset).removeClass("disabled") }, Patek.Owners.resetLogin = function () { if (Patek.Owners.log && console.log("Patek.Owners.resetLogin()"), !$(Patek.Owners.btnReset).hasClass("disabled")) { var e = $("#" + Patek.Owners.formId); e.find("label").removeClass("error"), e.find(".msg").html(""); var a = $("input[name=" + Patek.Owners.inputLogin + "]"); a.val(""), a.focus(), $(Patek.Owners.btnReset).addClass("disabled") } }, Patek.Owners.userId = function () { return Patek.Owners.log && console.log("Patek.Owners.userId()"), Patek.Global.sessionStorageEnabled ? null == sessionStorage ? 0 : void 0 === sessionStorage.UserId ? 0 : sessionStorage.UserId : 0 }, Patek.Owners.userGuid = function () { return Patek.Owners.log && console.log("Patek.Owners.userGuid()"), Patek.Global.sessionStorageEnabled ? null == sessionStorage ? 0 : void 0 === sessionStorage.UserGuid ? 0 : sessionStorage.UserGuid : 0 }, Patek.Owners.userType = function () { return Patek.Owners.log && console.log("Patek.Owners.userType()"), Patek.Global.sessionStorageEnabled ? null == sessionStorage ? "" : void 0 === sessionStorage.UserType ? "" : sessionStorage.UserType : "" }, Patek.Owners.validateLogin = function () { Patek.Owners.log && console.log("Patek.Owners.validateLogin()"); var e = $("#" + Patek.Owners.formId); e.find("label").removeClass("error"), e.find(".msg").html(""), $("html").attr("lang").toLowerCase(); var a = !0; if (a = Patek.Global.validationInput(Patek.Owners.inputLogin, a)) { var o = Patek.Global.GetCookie("token"); $.ajax({ type: "POST", url: "/forms/Owners.asmx/CheckLogin?token=" + o, data: "{'login': '" + $("input[name=" + Patek.Owners.inputLogin + "]").val() + "'}", contentType: "application/json; charset=utf-8", dataType: "json", success: function (e) { Patek.Owners.log && console.log("Patek.Owners.validateLogin() => SUCCESS"), Patek.Owners.clearInformations(); var a = $("input[name=" + Patek.Owners.inputLogin + "]"); if (a.val(""), $(Patek.Owners.btnReset).addClass("disabled"), "authentification_error" == e.d) return Patek.Owners.error(Patek.Global.translate("owners_auth_error")), void a.focus(); if ("request_error" == e.d) return Patek.Owners.error(Patek.Global.translate("owners_auth_error")), void a.focus(); if ("ticket_error" == e.d) return Patek.Owners.error(Patek.Global.translate("owners_auth_error")), void a.focus(); var o = e.d.split(";"); Patek.Global.sessionStorageEnabled && (sessionStorage.IsUserLogged = "true", sessionStorage.UserId = parseInt(o[0]), sessionStorage.UserGuid = o[1], sessionStorage.UserType = o[2]), Patek.Global.redirect(Patek.Global.url("owners")) }, error: function (e) { Patek.Owners.log && console.log("Patek.Owners.validateLogin() => ERROR : " + e), Patek.Owners.clearInformations(), $("input[name=" + Patek.Owners.inputLogin + "]").val(""), $(Patek.Owners.btnReset).addClass("disabled"), Patek.Owners.error(Patek.Global.translate("owners_auth_error")) } }) } else Patek.Owners.error(Patek.Global.translate("owners_email")) }, void (Patek.Owners.validateLoginOnKeyPress = function (e, a) { var o = null; a && a.which ? o = a.which : window.event && (o = (a = window.event).keyCode), 13 == o && Patek.Owners.validateLogin() }))), $(document).ready((window.Patek.Translations = window.Patek.Translations || {}, void (Patek.Translations.get = function (e, a) { if (null == e || "" == typeof e) return ""; null != a && void 0 !== a || (a = $("html").attr("lang").toLowerCase()); var o = ""; return "available_languages" == (e = e.toLowerCase()) ? (o = "Languages also available", "fr" == a ? o = "Autres langues disponibles" : "de" == a ? o = "Weitere verf&uuml;gbare Sprachen" : "zh" == a ? o = "其他可选语言包括" : "es" == a ? o = "Otros idiomas disponibles" : "it" == a ? o = "Altre lingue disponibili" : "ja" == a ? o = "選択できる言語" : "ru" == a ? o = "Другие языковые версии" : "ar" == a && (o = "اللغات المتوفرة أيضا")) : "choose_language" == e ? (o = "Please choose a language", "fr" == a ? o = "Veuillez choisir une langue" : "de" == a ? o = "Bitte w&auml;hlen Sie eine Sprache" : "zh" == a ? o = "请选择一种语言" : "es" == a ? o = "Por favor elija un idioma" : "it" == a ? o = "Vi preghiamo di selezionare una lingua" : "ja" == a ? o = "言語を選択してください" : "ru" == a ? o = "Пожалуйста, выберите язык" : "ar" == a && (o = "الرجاء اختيار اللغة")) : "title_language" == e ? (o = "Languages", "fr" == a ? o = "Langues" : "de" == a ? o = "Sprachen" : "zh" == a ? o = "语言" : "es" == a ? o = "Idiomas" : "it" == a ? o = "Lingue" : "ja" == a ? o = "言語" : "ru" == a ? o = "Языки" : "ar" == a && (o = "اللغة")) : "owners_email" == e ? (o = "Please enter your email address to log in the Owners area.", "fr" == a ? o = "Veuillez entrer votre adresse e-mail pour accéder à la rubrique «Propriétaires»." : "de" == a ? o = "Bitte geben Sie zum Einloggen in den Uhrenbesitzer-Bereich Ihre E-Mail-Adresse ein." : "zh" == a ? o = "请输入邮箱登录百达翡丽用户专区。" : "es" == a ? o = "Please enter your email address to log in the Owners area." : "it" == a ? o = "Por favor, indique su correo electrónico para conectarse." : "ja" == a ? o = "オーナー・エリアにログインするには、メール・アドレスを入力してください。" : "ru" == a ? o = "Пожалуйста, введите адрес электронной почты, чтобы войти в раздел для обладателей часов." : "ar" == a && (o = "Please enter your email address to log in the Owners area.")) : "owners_auth_error" == e && (o = "The <b>email</b> you entered do not match any account. Please fill in the Owner registration form to have access to the Patek Philippe Owners area.", "fr" == a ? o = "L’adresse <b>e-mail</b> que vous avez entrée ne correspond à aucun compte. Veuillez remplir le formulaire d’inscription «Propriétaire» pour avoir accès à cette rubrique exclusive." : "de" == a ? o = "Die eingegebene <b>E-Mail-Adresse</b> passt zu keinem Account. Bitte füllen Sie das Uhrenbesitzer-Registrierformular aus, um Zugang zum Bereich für Patek Philippe Uhrenbesitzer zu erhalten." : "zh" == a ? o = "您输入的<strong>邮箱</strong>不存在。请填写百达翡丽用户登记表，进入百达翡丽用户专区。" : "es" == a ? o = "The <b>email</b> you entered do not match any account. Please fill in the Owner registration form to have access to the Patek Philippe Owners area." : "it" == a ? o = "El <b>correo electrónico</b> que ha indicado no corresponde a ninguna cuenta. Sírvase cumplimentar el formulario de registro “Propietario” para tener acceso a esta sección exclusiva." : "ja" == a ? o = "入力なさったメール・アドレスに対応するアカウントはありません。パテック フィリップ・オーナー・エリアにアクセスするためには、オーナー・レジストレーション・フォームに必要事項をご記入ください。" : "ru" == a ? o = "Указанный Вами адрес электронной почты не соответствует зарегистрированным учетным записям. Пожалуйста, зарегистрируйтесь в системе, чтобы иметь доступ к разделу для обладателей часов Patek Philippe." : "ar" == a && (o = "The <b>email</b> you entered do not match any account. Please fill in the Owner registration form to have access to the Patek Philippe Owners area.")), o }))), "undefined" != typeof jQuery && function (e) { e.fn.extend({ center: function (a) { a = e.extend({ inside: window, transition: 0, minX: 0, minY: 0, withScrolling: !0, vertical: !0, horizontal: !0 }, a); return this.each(function () { var o = { position: "absolute" }; if (a.vertical) { var t = (e(a.inside).height() - e(this).outerHeight()) / 2; a.withScrolling && (t += e(a.inside).scrollTop() || 0), t = t > a.minY ? t : a.minY, e.extend(o, { top: t + "px" }) } if (a.horizontal) { var s = (e(a.inside).width() - e(this).outerWidth()) / 2; a.withScrolling && (s += e(a.inside).scrollLeft() || 0), s = s > a.minX ? s : a.minX, e.extend(o, { left: s + "px" }) } return a.transition > 0 ? e(this).animate(o, a.transition) : e(this).css(o), e(this) }) } }) }(jQuery), function (e) { e.browserTest = function (a, o) { var t = "unknown", s = function (e, a) { for (var o = 0; o < a.length; o += 1) e = e.replace(a[o][0], a[o][1]); return e }, r = function (a, o, r, l) { var n = { name: s((o.exec(a) || [t, t])[1], r) }; return n[n.name] = !0, n.version = (l.exec(a) || ["X", "X", "X", "X"])[3], n.name.match(/safari/) && n.version > 400 && (n.version = "2.0"), "presto" === n.name && (n.version = e.browser.version > 9.27 ? "futhark" : "linear_b"), n.versionNumber = parseFloat(n.version, 10) || 0, n.versionX = "X" !== n.version ? (n.version + "").substr(0, 1) : "X", n.className = n.name + n.versionX, n }; a = (a.match(/Opera|Navigator|Minefield|KHTML|Chrome/) ? s(a, [[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/, ""], ["Chrome Safari", "Chrome"], ["KHTML", "Konqueror"], ["Minefield", "Firefox"], ["Navigator", "Netscape"]]) : a).toLowerCase(), e.browser = e.extend(o ? {} : e.browser, r(a, /(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/, [], /(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/)), e.layout = r(a, /(gecko|konqueror|msie|opera|webkit)/, [["konqueror", "khtml"], ["msie", "trident"], ["opera", "presto"]], /(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/), e.os = { name: (/(win|mac|linux|sunos|solaris|iphone|ipad|ipod)/.exec(navigator.platform.toLowerCase()) || [t])[0].replace("sunos", "solaris") }, o || e("html").addClass([e.os.name, e.browser.name, e.browser.className, e.layout.name, e.layout.className].join(" ")) }, e.browserTest(navigator.userAgent) }(jQuery), Array.prototype.distinct = function () { for (var e = {}, a = [], o = 0; o < this.length; o++) e[this[o]] || (e[this[o]] = !0, a.push(this[o])); return a }, Array.prototype.contains = function (e) { for (var a = this.length; a--;) if (this[a] == e) return !0; return !1 }, String.prototype.replaceAll = function (e, a) { return this.replace(new RegExp(e, "g"), a) }, $(document).ready(function () { Patek.Global.localStorageEnabled = Patek.Global.checkLocalStorage(), Patek.Global.sessionStorageEnabled = Patek.Global.checkSessionStorage(); var e = !1; if (null != localStorage && "undefined" != typeof localStorage) { var a = localStorage.CookiesAllowed; null != a && void 0 !== a || (a = !1); var o = localStorage.CookiesMessageDisplayed; null != o && void 0 !== o || (o = !1), o || (Patek.Cookies.displayMessage(), e = !0) } if (Patek.Global.getUrlVar("chooselanguage") && (Patek.Global.chooseLanguage(), e && ($(Patek.Global.modalMaskId).removeClass("cookies"), $(Patek.Cookies.messageId).css("z-index", "100000"))), Patek.Global.getUrlVar("country")) { var t = Patek.Global.getUrlVar("country"), s = ""; Patek.Global.getUrlVar("region") && (s = Patek.Global.getUrlVar("region")), Patek.Global.sessionStorageEnabled && (sessionStorage.GeoLocCountryCode = t, sessionStorage.GeoLocCountryName = "", sessionStorage.GeoLocRegionCode = s, sessionStorage.GeoLocRegionName = "", sessionStorage.GeoLocZipCode = "", sessionStorage.GeoLocCity = "", sessionStorage.GeoLocated = !0) } });