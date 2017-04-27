$(document).ready(function() {
	// Фокус поля
	var focusInput = function(obj) {
		obj.parent().addClass('form__field_focused');
	}
	var focusOutInput = function(obj) {
		obj.parent().removeClass('form__field_focused');
	}
	$('.js-form-input').focusin(function(){
		focusInput($(this));
	});
	$('.js-form-input').focusout(function(){
		focusOutInput($(this));
	});
	$('.js-step2').click(function() {
		$('.js-form-step1, .js-form-step2, .js-form-step3').hide();
		$('.js-form-step2').fadeIn('fast');
	});
	$('.js-step1').click(function() {
		$('.js-form-step1, .js-form-step2, .js-form-step3').hide();
		$('.js-form-step1').fadeIn('fast');
	});
	$('.js-step3').click(function() {
		$('.js-form-step1, .js-form-step2, .js-form-step3').hide();
		$('.js-form-step3').fadeIn('fast');
	});

	var _modalShowing = false;

	var _openModal = function (obj) {
		_hideModal();
		obj.addClass('active form__field_focused');
		obj.next('.js-modal').addClass('is-visible');
		obj.find('.js-input').addClass('is-completed');
		setTimeout(function(){_modalShowing = true}, 300);
		
	}

	var _hideModal = function () {
		$('.js-modal-on').removeClass('active form__field_focused');
		$('.js-modal').removeClass('is-visible');
		_modalShowing = false;
	}

    $(document).on('click touchstart', 'body', function(e) {
    	if(_modalShowing) {
	        if (!$(e.target).closest('.js-modal').length) {
				_hideModal();
	        }
    	}
    });

	$('.js-modal-on').click(function(){
		_openModal($(this));
	});
	$('.js-hide-modal').click(function(){
		_hideModal();
	});

	$('.js-form-time').click(function(){
		var t = $(this).text();
		$('.js-form-time-val').val(t);
		_hideModal();
	});
	$('.js-form-text').click(function(){
		var t = $(this).text();
		$(this).closest('.form__group').find('.js-form-text-val').val(t).text(t);
		_hideModal();
	});
	$('.js-form-suggest').click(function(){
		var t = $(this).find('div:first').text();
		$(this).closest('.form__group').find('.js-form-suggest-val').val(t);
		_hideModal();
	});
 
	$('#form-datepicker').datepicker({
	    onSelect: function onSelect(fd) {
	        $('.js-form-date').val(fd);
	        _hideModal();
	    }
	});

	$('.js-back-transfer-trigger').mouseup(function(){
		$('.js-back-transfer').toggleClass('form__row--hidden');
	});
	
	$('.js-baby-chair-trigger').mouseup(function(){
		$('.js-baby-chair').toggleClass('form__row--hidden');
	});
});