/**
*   Application Logic
*/

define(function() {
	'use strict';

	var app = Backbone.Model.extend({

		el: '',
		
		initialize: function(){

		},

		transitIn: function(pCallback){
			var _this = this;
			var wrap = $(_this.get('el'));
			wrap.fadeIn(function(){
				wrap.addClass('active');
				if(pCallback){
					pCallback();
				} 
			});
		},

		transitOut: function(pCallback){
			var _this = this;
			var wrap = $(_this.get('el'));
			wrap.fadeOut(function(){
				wrap.removeClass('active');
				if(pCallback){ 
					pCallback(); 
				}
			});
		}

	});

	return app;

});