'use strict';

define(function() {

	var tagName = 'metlifegrowthbuddy';
	var clientID = '68b99da4623e44f482bc5655018bd164';
	var apiURL = 'https://api.instagram.com/v1/tags/'+ tagName +'/media/recent?count=50&client_id=' + clientID;
	
	var app = Backbone.Model.extend({
		initialize: function(){
			var _this = this;
			_this.loadImages(apiURL, function(pDatas, nextURL){
				if(nextURL){
					_this.loadImages(nextURL, function(pSecDatas){
						_this.showImages($.merge(pSecDatas, pDatas));
					});
				} else {
					_this.showImages(pDatas);
				}
			});
		},
		loadImages: function(pPath, pCallback){
			var _this = this;
			$.ajax({
				url: pPath,
				type: 'get',
				dataType: 'jsonp',
				success: function (pObj) {
					pCallback(pObj.data, pObj.pagination.next_url);
				}
			});
		},
		showImages: function(pDatas){
			var html = '';
			var isMobile = $('body').hasClass('mobile');
			var endOffset = (isMobile) ? 6 : 8;
			var loadNumber = (isMobile) ? 12 : 16;
			for(var i=0; i < loadNumber; i++){
				var itemNumber = Math.floor(Math.random() * pDatas.length);
				var pData = pDatas.splice(itemNumber, 1);
				html += '<a href="' +pData[0].images.standard_resolution.url+ '">';
				if((i + 1) % endOffset === 0){
					html += '<div class="cude end">';
				} else {
					html += '<div class="cude">';
				}
				html += '<img src="' + pData[0].images.thumbnail.url + '" alt="" />';
				html += '</div>';
				html += '</a>';
			}
			$('.instagramBar .container').html(html);
			FB.Canvas.setAutoGrow(true);

			$('.instagramBar .container').magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				}
			});
		}
	});
	return app;
});