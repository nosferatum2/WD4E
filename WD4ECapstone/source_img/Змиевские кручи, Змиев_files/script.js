function initScript() {
	// accordion menu filter critirea
	jQuery('dt.filter-options-title').off().unbind().click(function() {
		// do not use collapse with horizontal.
		if (jQuery('.ja-mg-sidebar').hasClass('sb-horizontal')) return false;
		//collapsed
		if (jQuery(this).hasClass('collapsed')) {
			jQuery(this).removeClass('collapsed');
			jQuery(this).next().slideDown( function() {
				recalc_sticky(jQuery('.sidebar-main'));
			});
		} else {
			jQuery(this).addClass('collapsed');
			jQuery(this).next().slideUp( function() {
				recalc_sticky(jQuery('.sidebar-main'));
			});
		}
		// save to cookie
		var arrTab = new Array();
		jQuery('dt.filter-options-title').each(function(i){
			arrTab[i] = jQuery(this).hasClass('collapsed');
		});
		jQuery.cookie(jQuery('.ja-mg-sidebar').data('mgfilter'), arrTab);
		
	});
	
	// change layout product list.
	jQuery('.jamg-layout-chooser>span').off().unbind().click(function() {
		jQuery('.jamg-layout-chooser>span').removeClass('active');
		jQuery('.jamg-layout-chooser>span[data-layout="'+jQuery(this).attr('data-layout')+'"]').addClass('active');
		jQuery('.ja-products-wrapper.products.wrapper')
			.removeClass('grid products-grid list products-list')
			.addClass(jQuery(this).attr('data-layout')+' products-'+jQuery(this).attr('data-layout'));
		recalc_sticky(jQuery('.sidebar-main'));
		jQuery.event.trigger('jamg-layout-change');
		jamegafilter_default_result_view = jQuery(this).attr('data-layout');
	});

	// default trigger change layout
	jQuery('.jamg-layout-chooser>span').removeClass('active');
	jQuery('.jamg-layout-chooser>span[data-layout="'+jamegafilter_default_result_view+'"]').addClass('active');
	jQuery('.ja-products-wrapper.products.wrapper')
		.removeClass('grid products-grid list products-list')
		.addClass(jamegafilter_default_result_view+' products-'+jamegafilter_default_result_view);

	// trigger collapse critirie
	if (jQuery.cookie(jQuery('.ja-mg-sidebar').data('mgfilter')) != undefined) {
		// do not use collapse with horizontal.
		if (jQuery('.ja-mg-sidebar').hasClass('sb-horizontal')) return false;
		var arrTab = jQuery.cookie(jQuery('.ja-mg-sidebar').data('mgfilter')).split(',');
		jQuery('dt.filter-options-title').each(function(i){
			if (arrTab[i] == "true") {
				jQuery(this).addClass('collapsed');
				jQuery(this).next().slideUp( function() {
					recalc_sticky(jQuery('.sidebar-main'));
				});
			}
		});
	}
	
	// default order Class
	addFilterWarperClass(undefined);
}

function addFilterWarperClass(ele) {
	if (ele === undefined) {
		ele = jQuery('.sorter-options');
		// in case the site custom remove the sorting.
		if (!ele.length)
			return;
	}

	ele.find('option').each(function(){
		var _class = jQuery(this).attr('value').replace('attr.', '').replace('.frontend_value', '');
		jQuery('.ja-megafilter-wrapper, .ja-megafilter-wrap').removeClass('ja-'+_class);
	});
	var _class = ele.val().replace('attr.', '').replace('.frontend_value', '');
	jQuery('.ja-megafilter-wrapper, .ja-megafilter-wrap').addClass('ja-'+_class);
}

function openShift(obj) {
	jQuery(obj).parent().parent().find('li:hidden').show();
	jQuery(obj).hide();
}

function recalc_sticky(elem) {
	if (typeof elem.stick_in_parent === 'function') {
		elem.trigger('sticky_kit:recalc');
	}
};