'use strict';

define(function() {
	var _co = {};
		_co.tracking = function(){

		};
		_co.faebookShare = function(){
			FB.ui({
				method: 'share',
				href: 'https://metlife-gogoal-life.herokuapp.com'
			}, function(response){

			});
		};
	return _co;
});