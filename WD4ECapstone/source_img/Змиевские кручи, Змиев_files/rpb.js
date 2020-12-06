jQuery(function(){
jQuery("body").addClass("rp-brooksite");	
jQuery(".navbar.rp-brooksite").parent("nav").wrap("<div class='rp-brooksite wrap-menu '></div>")
jQuery(".rp-brooksite .footer").css("margin-bottom",jQuery(".bottom-fix-nav").height());

jQuery(".icons-module:not('.clear-mod') a").prepend("<i class='icon-brooksus-right-open'></i>");
jQuery(".icons-module .control-label").addClass("list-btn");
jQuery(".icons-module input[type='submit']").addClass("list-btn").before('<button type="button" class="list-btn login"><i class="icon-brooksus-lock"></i></button>');

jQuery(".compare_mode_table").addClass("table");
jQuery(".to_compare a").append(" <i class='icon-brooksus-link-ext'></i>");

jQuery(".rp-brooksite .plusshippinginfo a").prepend(" <i class='icon-brooksus-truck'></i>");
jQuery(".rp-brooksite select#limit, .rpb_thems select#order	").addClass("span6");

jQuery(".rp-brooksite .jshop_related h4 a").each(function(){
jQuery(this).append('<span rel="tooltip" data-placement="top" data-original-title="'+jQuery(this).attr("title")+'" class="button_detail more_link"><i class="icon-brooksus-export-alt"></i></span>');
});
});
jQuery.fn.equalizeHeights = function() {
  var maxHeight = this.map(function( i, e ) {
    return jQuery( e ).height();
  }).get();
  return this.height( Math.max.apply( this, maxHeight ) );
};
jQuery(window).load(function(){
jQuery(".jshop.rp-brooksite div.jshop_categ, .jshop.cart.rp-brooksite div.jshop_prod_cart").equalizeHeights();
});