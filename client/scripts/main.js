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

    $("select").selectBoxIt();

    var validateEmail = function (email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    _co.formSubmit = function(){
        var submittable = true;
        var numReg = new RegExp(/^\d+$/);
        $('.formFileld').removeClass('empty');
        if($('#35').val() == ''){ submittable = false; $('.formContainer .date').addClass('empty'); }
        if($('#2').val() == ''){ submittable = false; $('.formContainer .name').addClass('empty'); }
        if($('#3').val() == ''){ 
            submittable = false; $('.formContainer .mobileInput').addClass('empty'); 
        } else if($('#3').val().length != 8){
            submittable = false; $('.formContainer .mobileInput').addClass('empty'); 
        } else if(!numReg.test($('#3').val())){
            submittable = false; $('.formContainer .mobileInput').addClass('empty'); 
        }
        if($('#4').val() == ''){ 
            submittable = false; $('.formContainer .email').addClass('empty'); 
        } else if(!validateEmail($('#4').val())){
            submittable = false; $('.formContainer .email').addClass('empty'); 
        }
        if(!($('#34').is(":checked"))){ 
            submittable = false; $('.formContainer .tncInput').addClass('empty'); 
        }
        if(!submittable){
            $('.formContainer').scrollTop(0);
        } else {
            ga('send', 'event', 'button', 'click', gaPrefix + '/' + 'submit-buttons');
            $('form#21').submit();
        }
        // if($('#34').val() === '')
    };

    _co.fbShare = function(){
        FB.ui({
            method: 'share',
            href: 'https://www.metlife.com.hk/gogoallife'
        }, function(response){
        });
    };
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
            top: '-150px'
        }, 1000, function(){
            $insta.animate({
                top: '-160px'
            }, 1000, function(){
                instagramAnimation();
            });
        });
    };
    if(!$('body').hasClass('mobile')){
        $('#landing .instagramBar').mouseover(function(){
            $('#landing .lower').stop().animate({ top:'-100px' }, 100);
        });
        $('#landing .instagramBar').mouseout(function(){
            $('#landing .lower').stop().animate({ top:'0px' }, 100);
        });
        $('#landing .enterBtn').mouseover(function(){
            $(this).find('.normalBtn').stop().fadeOut(200);
            $(this).find('.hoverBtn').stop().fadeIn(200);
        });
        $('#landing .enterBtn').mouseout(function(){
            $(this).find('.normalBtn').stop().fadeIn(200);
            $(this).find('.hoverBtn').stop().fadeOut(200);
        });
    } else {
        $('.mobileArrow').on('click', function(){
            if($('#landing .lower').hasClass('active')){
                $('#landing .lower').removeClass('active');
            } else {
                $('#landing .lower').addClass('active');
            }
        });
    }
    instagramAnimation();
    instagramLightAnimation();
    _co.instagram = new IB();

});
