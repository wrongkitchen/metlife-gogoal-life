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
    var instagramLightAnimation = function(){
        setTimeout(function(){
            var $instaLight = $('#landing .instagram .instagramLight');
            $instaLight.animate({ opacity:1 }, 300, function(){
                $instaLight.animate({ opacity: 0 }, 300, function(){
                    instagramLightAnimation();
                });
            });
        }, _.random(3000, 7000));
    };  
    var instagramAnimation = function(){
        var $insta = $('#landing .instagram');
        $insta.animate({
            top: '-110px'
        }, 1000, function(){
            $insta.animate({
                top: '-120px'
            }, 1000, function(){
                instagramAnimation();
            });
        });
    };
    if(!$('body').hasClass('mobile')){
        $('#landing .instagramBar').mouseover(function(){
            $('#landing .lower').stop().animate({ top:'-100px' }, 200);
        });
        $('#landing .instagramBar').mouseout(function(){
            $('#landing .lower').stop().animate({ top:'0px' }, 200);
        });
        $('#landing .enterBtn').mouseover(function(){
            $(this).find('.normalBtn').stop().fadeOut(200);
            $(this).find('.hoverBtn').stop().fadeIn(200);
        });
        $('#landing .enterBtn').mouseout(function(){
            $(this).find('.normalBtn').stop().fadeIn(200);
            $(this).find('.hoverBtn').stop().fadeOut(200);
        });
    }
    instagramAnimation();
    instagramLightAnimation();
    _co.instagram = new IB();

});
