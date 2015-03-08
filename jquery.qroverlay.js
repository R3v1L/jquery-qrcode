(function($) {

	$.qroverlay = function(url,size,delay,alpha,styles) {
		size = size || 240;
		delay = delay || 200;
		alpha = alpha || 0.8;
		styles = {
			position: 'fixed',
			display: 'block',
			top: '50%',
			left: '50%',
			width: 0,
			height: 0,
			backgroundImage: 'url(http://chart.apis.google.com/chart?cht=qr&chs=' + size + 'x' + size + '&chl=' + url + ')',
			backgroundColor: 'rgba(0,0,0,' + alpha + ')',
			backgroundPosition: 'center center',
			backgroundRepeat: 'no-repeat',
			zIndex: 100000
		}
		$('<div></div>').css(styles).appendTo('body').click(function(){
			$(this.remove());
		}).animate({left:0, top:0, width: $(document).width(), height: $(window).height()},delay);
	};

}(jQuery));

