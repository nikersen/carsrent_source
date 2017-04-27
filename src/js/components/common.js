$(document).ready(function() {

	var _openPopup = function (obj) {
		_hidePopup();
		obj.addClass('active');
		$('.js-popup').fadeIn(300);
		$('#overlay').fadeIn(300);
	}

	var _hidePopup = function () {
		$('.js-popup-on').removeClass('active');
		$('.js-popup').fadeOut(300);
		$('#overlay').fadeOut(300);
	}

	$('.js-popup-on').click(function(){
		_openPopup($(this));
	});
	$('#overlay, .js-popup-close').click(function(){
		_hidePopup();
	});


	// Попап с overflow: hidden для body

	var _openPopupOverflow = function (obj) {
		_hidePopupOverflow();
		obj.addClass('active');
		$('body').css({'overflow' : 'hidden'});
		$('.js-popup-overflow').fadeIn(300);
	}

	var _hidePopupOverflow = function () {
		$('body').css({'overflow' : 'visible'});
		$('.js-popup-overflow-on').removeClass('active');
		$('.js-popup-overflow').fadeOut(300);
	}

	$('.js-popup-overflow-on').click(function(){
		_openPopupOverflow($(this));
	});
	$('.js-popup-overflow-close').click(function(){
		_hidePopupOverflow();
	});
    $('.js-popup-overflow').click(function(e){
        var div = $(".popup-overflow .popup");  
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
			_hidePopupOverflow();
        }
    });
});