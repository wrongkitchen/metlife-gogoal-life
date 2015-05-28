'use strict';

define(function() {
	var _co = {};
		_co.tracking = function(pPath){
			ga('send', 'pageview', '/'+pPath);
		};
		_co.facebookShare = function(){
			ga('send', 'pageview', '/fbShare');
			FB.ui({
				method: 'share',
				href: 'https://metlife-gogoal-life.herokuapp.com/'
			}, function(response){
				_co.sectionManager.changeSection('landing');
			});
		};
	return _co;
});