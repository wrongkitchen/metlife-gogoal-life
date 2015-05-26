'use strict';

define(function() {

	var tagName = '石敢當';
	var clientID = '68b99da4623e44f482bc5655018bd164';
	var nextAPI = '';
	var isLoadEnd = false;
	
	var app = Backbone.Model.extend({
		initialize: function(){
			this.loadImages();
			$('.instagramBar .container').html('');
		},
		loadImages: function(){
			var _this = this;
			if(!isLoadEnd){
				$.ajax({
					url: (nextAPI) ? nextAPI : 'https://api.instagram.com/v1/tags/'+ tagName +'/media/recent?count=50&client_id=' + clientID,
					type: 'get',
					dataType: 'jsonp',
					success: function (pObj) {
						if(pObj.pagination.next_url){
							nextAPI = pObj.pagination.next_url;
						} else {
							isLoadEnd = true;
						}
						if(pObj.data.length){
							var html = '';
							$.each(pObj.data, function(pIndex, pData){
								if((pIndex + 1) % 8 === 0){
									html += '<div class="cude end">';
								} else {
									html += '<div class="cude">';
								}
								html += '<img src="' + pData.images.thumbnail.url + '" alt="" />';
								html += '</div>';
							});
							$('.instagramBar .container').append(html);
							FB.Canvas.setAutoGrow(true);
						}
						_this.showLoadMoreButton();
					}
				});
			}
		},
		showLoadMoreButton: function(){
			if(isLoadEnd){
				$('.instagramBar .loadMoreButton').hide();
			} else {
				$('.instagramBar .loadMoreButton').show();
			}
		}
	});
	return app;
});