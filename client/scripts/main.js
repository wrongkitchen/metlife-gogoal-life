/**
*   Main Configuration
*/

'use strict';
require.config({ baseUrl: '/scripts' });
// Initialize the application.
require(['class/SectionBase', 'class/SectionManager', 'class/CommonObject', 'class/InstagramBar'], 
    function(SB, SM, CO, IB){

	var _co = CO;
    window.metlife = _co;

    var checkViewPort = function(){
        var navigateUA = navigator.userAgent;
        if ((navigateUA.indexOf('iPhone') == -1) && (navigateUA.indexOf('iPod') == -1) && (navigateUA.indexOf('iPad') == -1)){
            var e = window, a = 'inner';
            var viewport = document.querySelector("meta[name=viewport]");
            if (!('innerWidth' in window)){
                a = 'client';
                e = document.documentElement || document.body;
            }
            var initScale = new Number(e[a+"Width"] / 640);
                initScale = initScale.toFixed(1);
            viewport.setAttribute('content', 'width=device-width, minimum-scale=0.5, initial-scale='+initScale);
            console.log(initScale);
        }
    };

    $(document).ready(function(){
        checkViewPort();
    });

    _co.sectionManager = new SM({
        sections: { 
            landing        	: new SB({ el: $('#landing') }),
            form   			: new SB({ el: $('#form') }),
            thankyou   		: new SB({ el: $('#thankyou') })
        },
        activeSectionName: 'landing'
    });

    _co.instagram = new IB();

});
