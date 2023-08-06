!function($){"use strict";var emergencyTimeout=!1;$.ProradioAjaxPreloader={init:function(){this.num=$("#proradio-ajax-num"),this.progressBar=$("#proradio-ajax-progress"),this.progressBar.css({transform:"scaleX(0)"}),this.mask=$("#proradio-ajax-mask"),this.mask.hasClass("proradio-ajax-visible")&&(this.show(),this.start())},perc:0,show:function(){this.mask.addClass("proradio-ajax-visible"),this.progressBar.animate({transform:"scaleX(0)"},0),this.perc=0,this.num.html("0%")},start:function(t){void 0===t&&(t=$("body"));var e,a,o=t.find("img").size(),n=0,i=this.progressBar,s=this.num,r=this.mask;s.html("0%");var l=!0;i.animate({transform:"scaleX(0)"},0,(function(){i.hide()})),o>0?t.imagesLoaded().done((function(){emergencyTimeout=setTimeout((function(){l=!1,r.removeClass("proradio-ajax-visible")}),1e3)})).progress((function(c,d){if(emergencyTimeout&&clearTimeout(emergencyTimeout),i.show(),d.isLoaded){$(d.img).addClass("proradio-ajax-loaded"),e=t.find("img.proradio-ajax-loaded").size(),(n=Math.ceil(e/o*100))>100&&(n=100);var p=parseInt(s.html()),m=setInterval((function(){p+=1,s.html(p+"%"),a=p/100,i.css({transform:"scaleX("+a+")"}),p==n&&(100==n&&setTimeout((function(){i.animate({transform:"scaleX(0)"},0,(function(){i.hide()})),setTimeout((function(){l=!1,r.removeClass("proradio-ajax-visible"),emergencyTimeout&&clearTimeout(emergencyTimeout)}),1)}),1),clearInterval(m))}),1)}})):(s.html("100%"),i.css({transform:"scaleX(1)"}),setTimeout((function(){i.animate({transform:"scaleX(0)"},0,(function(){i.hide()})),setTimeout((function(){l=!1,r.removeClass("proradio-ajax-visible")}),30)}),180));var c=!1;c&&clearTimeout(c),c=setTimeout((function(t){!0===l&&(i.animate({transform:"scaleX(0)"},0,(function(){i.hide()})),setTimeout((function(){l=!1,r.removeClass("proradio-ajax-visible")}),200))}),5200)}};var qtAplSelector="#proradio-ajax-master",qtAplMaincontent=$(qtAplSelector),atAplPreloader=$("#qtajaxpreloadericon");$.fn.qtAplFallbackLink=function(t,e,a){if(!1!==t)return t;e&&window.location.replace(e)},$.fn.qtAplScrollTop=function(){return $("html, body").animate({scrollTop:0},100),!0},$(".wpml-ls-item, .wpml-ls-item-toggle").on("click","a",(function(t){return $.fn.qtAplFallbackLink(t,$(this).attr("href"),"001"),t})),$.fn.qtAplInitAjaxPageLoad=function(){function qtAplExecuteAjaxLink(link){var docClass,parser;return jQuery("#proradio-ajax-mask").hasClass("proradio-changeloader")&&$.ProradioAjaxPreloader.show(),$.ajax({url:link,success:function(data){if($.fn.qtAplScrollTop(),$.ajaxData=data,parser=new DOMParser,$.qtAplAjaxContents=$($.ajaxData).find(qtAplSelector).html(),$.qtAplAjaxTitle=$($.ajaxData).filter("title").text(),docClass=$($.ajaxData).filter("body").attr("class"),$.qtAplBodyMatches=data.match(/<body.*class=["']([^"']*)["'].*>/),void 0!==$.qtAplBodyMatches&&null!==$.qtAplBodyMatches){docClass=$.qtAplBodyMatches[1];var modifiedAjaxResult=data.replace(/<body/i,'<div id="re_body"').replace(/<\/body/i,"</div"),bodyClassesNew=$(modifiedAjaxResult).filter("#re_body").attr("class"),js_composer_front_css=$(modifiedAjaxResult).filter("#js_composer_front-inline-css").text();bodyClassesNew&&(docClass=bodyClassesNew),bodyClassesNew.indexOf("proradio-ajax-skip")>0?$.fn.qtAplFallbackLink(!1,link,"003"):($.wpadminbar=$($.ajaxData).filter("#wpadminbar").html(),$.visual_composer_styles=$($.ajaxData).filter("style[data-type=vc_shortcodes-custom-css]").text(),$("#qwLLT")&&($.langswitcher=$($.ajaxData).find("#qwLLT").html()),void 0!==docClass&&void 0!==$.qtAplAjaxContents?($("body").attr("class",docClass),$("title").text($.qtAplAjaxTitle),$("#wpadminbar").html($.wpadminbar),$("#qwLLT").html($.langswitcher),$("#proradio-breadcrumb")&&$("#proradio-breadcrumb").html($($.ajaxData).find("#proradio-breadcrumb").html()),$("style[data-type=vc_shortcodes-custom-css]").length>0?$("style[data-type=vc_shortcodes-custom-css]").append($.visual_composer_styles):$("head").append('<style type="text/css"  data-type="vc_shortcodes-custom-css">'+$.visual_composer_styles+"</style>"),""!=js_composer_front_css&&0!=js_composer_front_css&&null!=js_composer_front_css?$("style#js_composer_front-inline-css").length>0?$("style#js_composer_front-inline-css").html(js_composer_front_css):$("head").append('<style id="js_composer_front-inline-css">'+js_composer_front_css+"</style>"):$("head style#js_composer_front-inline-css").remove(),qtAplMaincontent.html($.qtAplAjaxContents).delay(100).promise().done((function(){var scripts=qtAplMaincontent.find("script");if(scripts.length>0&&scripts.each((function(){var code=$(this).html();code="("+code+")";try{eval($(this).html())}catch(t){console.log(t)}})),!0===$.ProRadioMainObj.fn.initializeAfterAjax()){var jsurl,cssurl;if(qtAplMaincontent.fadeTo("fast",1).promise().done((function(){var t=link.split("#");if(t.length>1){var e=$("#"+t[1]);if(e.length>0){var a=e.offset().top;return void $("html, body").animate({scrollTop:a},400)}}})),$.getScript($("#qt-ajax-customscript-url").data("customscripturl")).done((function(t,e){})).fail((function(t,e,a){})),$.targetStyles=$($.ajaxData).filter("link[rel='stylesheet']"),$.targetStyles.length>0&&$.each($.targetStyles,(function(t,e){cssurl=$(e).attr("href"),0==jQuery("link[href*='"+cssurl+"']").length&&$("head").append('<link rel="stylesheet" id="'+$(e).attr("id")+'" href="'+cssurl+'" media="'+$(e).attr("media")+'">')})),"object"==typeof window.elementorFrontend?elementorFrontend.init():console.log("Ajax Page Load notice: Not possible to reinit"),$.each($("#qt-ajax-pageload-woocommerce-scripts").data(),(function(t,e){$.getScript(e)})),"object"==typeof $.qtmplayerRadioFeedObj&&void 0!==$.qtPlayerObj.songdata&&$.qtmplayerRadioFeedObj.fn.pushFeed($.qtPlayerObj.songdata),"function"==typeof QTags){if($.tinyMceItems=qtAplMaincontent.find("#bbp_reply_content"),$.tinyMceItems.length>0)var qt_editor=new QTags({id:"bbp_reply_content"});if($.tinyMceItems=qtAplMaincontent.find("#bbp_topic_content"),$.tinyMceItems.length>0)var qt_editor=new QTags({id:"bbp_topic_content"});QTags._buttonsInit()}"function"==typeof $.fn.ttgReaktionsInit&&(console.log("ReAktions Reinit"),$.fn.ttgReaktionsInit()),"object"==typeof $.ProRadioBtoolsObj&&$.ProRadioBtoolsObj.fn.injectAds(),jQuery("#proradio-ajax-mask").hasClass("proradio-changeloader")&&$.ProradioAjaxPreloader.start(qtAplMaincontent),$(window).trigger("qtAjaxpageLoadEnd")}else $.fn.qtAplFallbackLink(!1,link,"004")}))):$.fn.qtAplFallbackLink(!1,link,"005"))}else $.fn.qtAplFallbackLink(!1,link,"002")},error:function(){$.fn.qtAplFallbackLink(!1,link,"006")}}),!0}$("body").off("click","a").on("click","a",(function(t){var e=$(this),a=$(this).attr("href");if(void 0===a)return t;if(""===a)return t;$.each($("#qt-ajax-pageload-woocommerce-urls").data(),(function(e,o){if(a===o)return t}));var o=$(location).attr("href").split("#")[0],n=a.split("#");if(n[0]===o&&n.length>1)return t;if(e.hasClass("ajax_add_to_cart")||e.parent().hasClass("noajax")||e.parent().hasClass("lang-item")||!a.match(document.domain)||a.match("replytocom")||"_blank"===e.attr("target")||e.hasClass("noajax")||"submit"===e.attr("type")||e.parent().hasClass("wpml-ls-item")||"button"===e.attr("type")||a.match(/(\/respond|\/wp-admin|mailto:|\.zip|\.jpg|\.jpeg|\.gif|\.mp3|\.pdf|\.png|\.rar|#noajax|noajax|download_file|replytocom)/))return t;if(a.match(document.domain)){t.preventDefault();try{if(window.history.pushState){var i=a;i!==window.location&&window.history.pushState({path:i,state:"new"},"",i)}}catch(t){console.log(t)}$("li.current_page_item").removeClass("current_page_item"),$("li.current-menu-item").removeClass("current-menu-item"),$('[href="'+i+'"]').closest("li").addClass("current-menu-item").addClass("current_page_item"),qtAplExecuteAjaxLink(a),qtAplMaincontent.fadeTo(100,0,(function(){$.fn.qtAplScrollTop()}))}})),$(window).on("popstate",(function(t){var e;if(null!==t.originalEvent.state){if(void 0!==(e=location.href)){if(!e.match(document.domain))return void $.fn.qtAplFallbackLink(!1,link,"006");qtAplMaincontent.fadeTo("fast",0,(function(){$.fn.qtAplScrollTop()})).promise().done((function(){qtAplExecuteAjaxLink(e)}))}}else if(void 0!==(e=location.href)){if(!e.match(document.domain))return void $.fn.qtAplFallbackLink(!1,e,"007");var a=$(location).attr("href").split("#")[0],o=e.split("#");if(o[0]===a&&void 0!==o[1]){var n=$("#"+o[1]);if(n.length>0){var i=n.offset().top;return t.preventDefault(),$("html, body").animate({scrollTop:i},1500),!1}return t}qtAplMaincontent.fadeTo("fast",0,(function(){$.fn.qtAplScrollTop()})).promise().done((function(){qtAplExecuteAjaxLink(e)}))}}))},jQuery(document).ready((function(){$.fn.qtAplInitAjaxPageLoad(),$.ProradioAjaxPreloader.init()}))}(jQuery);