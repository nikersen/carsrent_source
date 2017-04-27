$(document).ready(function(){
	// code
	$('.auth-form__trigger').click(function(){
		$(this).closest('.auth-form__item').find('.auth-form-popup').toggle();
		$(this).closest('.auth-form__item').find('.auth-form__input').removeClass('error');
	});
	$('.js-validate').click(function(e){
		if ($(this).hasClass('mute')) {} 
			else {
				$(this).addClass('mute').closest('.auth-form').find('.auth-form__input').addClass('error');
				e.stopPagination();
				e.preventDefault();
			}
	});
	$('#overlay, .auth-form-close').click(function(){
		$('#overlay, .auth-popup').fadeOut();
	});	
	$('.js-next-step').click(function(){
		$(this).closest('.auth-form__body').hide().next().show();
		$('.auth-form__input').removeClass('error');
	});

	// Сценарий работы формы
	$('.js-form-recovery').click(function(){
		$('.auth-form').hide();
		$('.recovery').show();
	});
	$('.js-form-registration').click(function(){
		$('.auth-form').hide();
		$('.registration').show();
	});
	$('.js-form-activate').click(function(){
		$('.auth-form').hide();
		$('.activate').show();
	});
	$('.js-form-personal').click(function(){
		$('.auth-form').hide();
		$('.personal').show();
	});
	$('.js-form-login').click(function(){
		$('.auth-form').hide();
		$('.login').show();
	});
	$('.js-form-welcome').click(function(){
		$('.auth-form').hide();
		$('.welcome').show();
	});
	$('.js-form-recovery-info').click(function(){
		$('.auth-form').hide();
		$('.recovery-info').show();
	});
	$('.js-form-recovery-new').click(function(){
		$('.auth-form').hide();
		$('.recovery-new').show();
	});
	$('.js-form-recovery-success').click(function(){
		$('.auth-form').hide();
		$('.recovery-success').show();
	});
	$('.js-form-login-th').click(function(){
		$('.auth-form').hide();
		$('.login-th').show();
	});

	$('.js-auth-phone').mask('+000(000)0000000');
});