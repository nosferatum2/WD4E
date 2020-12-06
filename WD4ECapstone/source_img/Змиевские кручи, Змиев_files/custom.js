jQuery(function(){
jQuery("button.list-btn.login").click(function(){
jQuery(this).next().trigger("click");
});
jQuery("button.list-btn.buy").click(function(){
jQuery(".list-btn.button.buy").trigger("click");
});
jQuery("button.list-btn.wl").click(function(){
jQuery(".list-btn.button.wl").trigger("click");
});
jQuery("button.list-btn.cp").click(function(){
jQuery(".list-btn.button.cp:not('.compare_dnone')").trigger("click");
});
if (jQuery(".btn.list-btn.button.remove_comp:not('.compare_dnone')").length){
jQuery("button.list-btn.cp").attr("data-original-title","Перейти к сравнению");
} 
if (jQuery(".btn.list-btn.button.remove_comp.compare_dnone").length){
jQuery("button.list-btn.cp").attr("data-original-title","Добавить к сравнению");
}
jQuery('#rpBrooksTab a').click(function(e){
e.preventDefault();
jQuery(this).tab('show');
});

jQuery(".to-list").click(function(e){
	jQuery(e.target).parent().prepend("<i class='animate-spin icon-brooksus-spinner'></i>")
	jQuery.ajax({
 url: window.location.href,
 type: "POST",
 data: {toView: "toList"},
 success: function(data) { if (data="toList") window.location.reload(); }
});
});
jQuery(".to-grid").click(function(e){
jQuery(e.target).parent().prepend("<i class='animate-spin icon-brooksus-spinner'></i>")
jQuery.ajax({
 url: window.location.href,
 type: "POST",
 data: {toView: "toGrid"},
 success: function(data) { if (data="toGrid") window.location.reload(); }
});
});

var len_zoo = jQuery('script[src*="plugins/system/joomshopkit/js/zoomsl-3.0.min.js"]').length;
var len_elz = jQuery('script[src*="plugins/system/joomshopkit/js/jquery.elevatezoom.min.js"]').length;	
var len_owl = jQuery('script[src*="/js/owl.carousel.js"]').length;	
if ((len_zoo===1 || len_elz===1) && !jQuery('body.js-zoomer-off').length){
jQuery(document).ajaxComplete(function(event, xhr, settings){
if (settings.url.indexOf('ajax_attrib_select_and_price')!=-1){	
initDataListZoom();
initDataZoom();
}
});
}
if (len_owl===1){
jQuery(document).ajaxComplete(function(event, xhr, settings){
if (settings.url.indexOf('ajax_attrib_select_and_price')!=-1){	
initMinCarusel();
}
});
initMinCarusel();
}
if(isTouchDevice()===true) {
    //jQuery("[rel='tooltip']").tooltip("destroy");
				jQuery(".attrib").css("display","block");
} else {
jQuery('body').tooltip({
    selector: '[rel=tooltip]'
});
}
});

function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

function initMinCarusel(){
jQuery(".jshop_img_thumb").wrapAll("<div class='owl-carousel owl-height'></div>");
var owl = jQuery(".jshop.productfull .owl-carousel");
owl.owlCarousel({
    loop:false,
    margin:5,
    nav:true,
				navText:['<i class="icon-brooksus-left-open"></i>','<i class="icon-brooksus-right-open"></i>'],
				autoWidth:false,
				autoplay:true,
				autoplaySpeed:1000,
				center:false,
				stagePadding:0,
				dots:false,
				dotData:false,
				dotsEach:false,
				lazyLoad:false,
				autoplayHoverPause:true,
				//slideBy:'page',
				responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

jQuery(".jshop.productfull .owl-item img").css("border","none");
jQuery(".jshop.productfull .owl-carousel .owl-stage-outer").css("background-color","#ffffff");
jQuery(".jshop.productfull .owl-prev").appendTo(".jshop.productfull .owl-stage-outer");
jQuery(".jshop.productfull .owl-next").appendTo(".jshop.productfull .owl-stage-outer");
}