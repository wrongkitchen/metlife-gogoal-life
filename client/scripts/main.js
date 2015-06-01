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

    _co.sectionManager = new SM({
        sections: { 
            landing        	: new SB({ el: $('#landing') }),
            form   			: new SB({ el: $('#form') }),
            thankyou   		: new SB({ el: $('#thankyou') })
        },
        activeSectionName: 'landing'
    });
    _co.sectionManager.afterChangeSection = function(pName, pCallback){
        if(pName === 'thankyou'){
            $('#landing .enterBtn').hide();
        }
        SM.prototype.afterChangeSection.call(_co.sectionManager, pName, pCallback);
    };

    var instagramAnimation = function(){
        var $insta = $('#landing .instagram');
        var beforePos = ($('body').hasClass('mobile')) ? '-35px' : '-38px';
        var afterPos = ($('body').hasClass('mobile')) ? '-25px' : '-48px';
        $insta.addClass('rotate').animate({
            bottom: beforePos
        }, 1000, function(){
            $insta.removeClass('rotate').animate({
                bottom: afterPos
            }, 1000, function(){
                instagramAnimation();
            });
        });
    };
    instagramAnimation();
    _co.instagram = new IB();

});
