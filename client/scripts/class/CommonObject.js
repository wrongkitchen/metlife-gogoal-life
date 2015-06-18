'use strict';

define(function() {
	var _co = {};
		_co.tracking = function(pPath){
			ga('send', 'pageview', gaPrefix + '/' + pPath);
		};
		_co.trackEvent = function(pPath){
			ga('send', 'event', 'button', 'click', gaPrefix + '/' + pPath);
		};
		_co.facebookShare = function(){
			ga('send', 'pageview', gaPrefix + '/fbShare');
			FB.ui({
				method: 'share',
				href: 'https://www.metlife.com.hk/gogoallife'
			}, function(response){
				_co.sectionManager.changeSection('landing');
			});
		};
	return _co;
});