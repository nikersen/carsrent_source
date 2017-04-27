$(document).ready(function(){

	$('.js-tab-on').click(function(){

		var o = $(this);
		var b = $(this).data('tab-role');

		$('.js-tab').hide();
		$('.js-tab'+b).show();

	});

	$('.js-manage-table-menu-row').hover(function(){}, function(){
		$('.mdl-menu__container').removeClass('is-visible');
	});


	// Страница Профиль поставщика, редактирование контактов

	$('.js-contact-edit').click(function(){
		$(this).closest('.manage-provider__contact-wrap').hide().prev('.manage-provider__edit').show();
	});
	$('.js-contact-save').click(function(){
		$(this).closest('.manage-provider__edit').hide().next('.manage-provider__contact-wrap').show();
	});
	$('.js-contact-priority').click(function(){
		$('.manage-provider__contact').removeClass('manage-provider__contact--priority');
		$(this).closest('.manage-provider__contact-wrap')
			   .find('.manage-provider__contact')
			   .addClass('manage-provider__contact--priority').show();
	});


	// Страница Лэндинг "Добро пожаловать в личный кабинет"

	$(document).scroll(function(){
		var breakPoint = 1;
		var documentHeight = $(this).scrollTop();

		if (documentHeight >= breakPoint) {
			$('.js-header-container').addClass('header-container--fixed');
		} else {
			$('.js-header-container').removeClass('header-container--fixed');
		}
	});


	// Плавный якорь по странице

	$('.js-landing-anchor-link').bind("click", function(e){
		var anchor = $(this);

		if (anchor.attr('href') != '#') {

			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top-120
			}, 500);

		} else {
			$('html, body').stop().animate({scrollTop: 0}, 500);
		}

		e.preventDefault();
	});

	// автоматическая активация пунктов меню

	var section = $('.landing-section');

	$(document).scroll(function(){
		section.each(function(i,el){
	        var top  = $(el).offset().top - 140;
	        var bottom = top +$(el).height();
	        var scroll = $(document).scrollTop();
	        var id = $(el).attr('id');
	    	if( scroll > top && scroll < bottom){
	            $('.js-landing-anchor-link').removeClass('active');
				$('.js-landing-anchor-link[href="#'+id+'"]').addClass('active');

	        }
	    });
    });
});