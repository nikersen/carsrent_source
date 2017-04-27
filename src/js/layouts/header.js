$(document).ready(function() {
	// body...
	$('.header-panel__icon, .header-panel__popup').click(function(){
		$(this).parent().find('.header-panel__popup').fadeToggle('fast');
	});
	$('.header-responsive-btn').click(function(){
		$(this).toggleClass('header-responsive-btn_active');
		$('.header-responsive-menu').toggleClass('header-responsive-menu_show');
	});
})