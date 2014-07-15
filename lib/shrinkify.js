/**
 * Shrinkify.js v1.0.0
 * http://rhmthm1.github.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

$.fn.shrinkify = function(options) {
    /* These are the defaults. */
	var options = $.extend({
        pixelsFromTop: 100,
        headerSelector: "body"
    }, options );

    $(this).scroll(function(event) {
		/* Act on the event */
		if(window.scrollY <= options.pixelsFromTop) {
			if( $(options.headerSelector).hasClass('expanded') ) {
				$(options.headerSelector).removeClass('expanded');
			}
		} else {
			if( !$(options.headerSelector).hasClass('expanded') ) {
				$(options.headerSelector).addClass('expanded');
			}
		}
	});
};