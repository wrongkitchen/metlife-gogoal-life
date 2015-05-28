/**
*   Application Logic
*/

define(function() {

	'use strict';

	var app = Backbone.Model.extend({

		initialize: function(){
			var curSectionName = this.get('activeSectionName');
		},

		changeSection: function(pName, pCallback){
			var _this = this;
			var sections = _this.get('sections');
			var curSectionName = _this.get('activeSectionName');
			if(sections[pName]){
				window.metlife.tracking(pName);
				_this.beforeChangeSection(pName, function(){
					sections[curSectionName].transitOut(function(){
						sections[pName].transitIn(function(){
							if(window.FB){
								FB.Canvas.setAutoGrow(true);
							}
							_this.afterChangeSection(pName, function(){
								if(pCallback) {
									pCallback();
								}
							});
						});
						_this.set('activeSectionName', pName);
					});
				});
			}
		},
		getCurrentSectionInstance: function(){
			var sections = this.get('sections');
			return sections[this.get('activeSectionName')];
		},
		beforeChangeSection: function(pName, pCallback){
			if(pCallback){
				pCallback();
			}
		},
		afterChangeSection: function(pName, pCallback){
			var _this = this;
			if(pCallback){
				pCallback();
			}
			if(window.FB){
				FB.Canvas.setSize({ height: _this.getCurrentSectionInstance().get('el').height() });
			}
		}

	});

	return app;
});