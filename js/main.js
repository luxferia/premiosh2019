$( document ).ready( function() {
	// NÃO APAGAR - COMENTADO APENAS FACILITAR O TRABALHO
	// $('#disclaimer-modal').modal({
 //        backdrop: 'static',
 //        keyboard: false,
 //        show: true
 //    });

    $('#termos-uso-check').change(function() {
    	if($('#termos-uso-check:checked').length == 1) {
    		$("#btn-disclaimer-accept").prop('disabled', false);
    	}
    	else {
    		$("#btn-disclaimer-accept").prop('disabled', true);
    	}
    });


    $("#btn-disclaimer-accept").click(function() {
        $('#disclaimer-modal').modal('hide');
    });

	var figImg = $('.figure img');
	var figImgWidth = figImg.width();
    figImg.closest('.figure').css('max-width', figImgWidth);


	/*$('#menu-modal').on('show.bs.modal', function (e) {
		$('body').addClass('menu-modal-open');
	}).on('hide.bs.modal', function (e) {
		$('body').removeClass('menu-modal-open');
	})*/


	// Hide Header on on scroll down
	
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbar = $('.menu-fixed');
	var navbarHeight = navbar.outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var thisST = $(this).scrollTop();
		// var screenHeight = $('.header').outerHeight();

		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - thisST) <= delta) return;

		// If they scrolled down and are past the navbar, add class .nav-hidden.
		// This is necessary so you never see what is "behind" the navbar.

		if (thisST < navbarHeight) {
			navbar.removeClass('fixed-top nav-shown nav-hidden');
		}

		else {
			navbar.addClass('fixed-top');
			// if (thisST > lastScrollTop && thisST > navbarHeight) { // Scroll Down
			// 	navbar.removeClass('nav-shown').addClass('nav-hidden fixed-top');
			// }

			// else if(thisST + delta < $(document).height()) { // Scroll Up
			// 	navbar.removeClass('nav-hidden').addClass('nav-shown');
			// }
			if(thisST + delta < $(document).height()) { // Scroll Up
				navbar.removeClass('nav-hidden').addClass('nav-shown');
			}

		}

		lastScrollTop = thisST;
	}


	/*$('#header-navbar .nav-link, #header-navbar .navbar-brand').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000, function(e){
					target.focus() ;
				});
				//return false;
			}
		}
	});*/

	
	var webdoorNavbar = new Swiper('.section-header-webdoor .webdoor-navbar', {
		// freeMode: true,
		slideClass: 'nav-link',
		slidesPerView: 'auto',
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer: true,
		breakpoints: {
			576: {
				loop: true,
				// slidesPerGroup: 3,
				slidesPerView: 3,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
			360: {
				loop: true,
				// slidesPerGroup: 2,
				slidesPerView: 2,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			}
		}
	});

	var webdoorCarousel = new Swiper ('.section-header-webdoor .webdoor', {
		autoplay: {
			delay: 5000000,
			disableOnInteraction: true
		},
		effect: 'fade',
		loop: true,
		speed: 1000,
		thumbs: {
			swiper: webdoorNavbar,
			slideThumbActiveClass: 'active'
		}
	});

	$('.webdoor-navbar').on('click', function(e) {
		e.preventDefault();
	});


	/***** FAQ ACCORDION *****/

	$('#faq-accordion .collapse').on('show.bs.collapse', function() {
		$(this).parent().find('.fa-angle-down').addClass('fa-rotate-180');
	}).on('hide.bs.collapse', function() {
		$(this).parent().find('.fa-angle-down').removeClass('fa-rotate-180');
	});
	
	jQuery('.btn-show-faq').click(function(e){
		e.preventDefault();
		var card = jQuery('#faq-accordion .card');
		
		if(card.hasClass('d-none')) {
			jQuery(this).html('Ver menos perguntas');
			jQuery('#faq-accordion .card.d-none').removeClass('d-none').addClass('d-flex');
		}
		else if(card.hasClass('d-flex')) {
			jQuery(this).html('Ver mais perguntas');
			jQuery('#faq-accordion .card.d-flex').removeClass('d-flex').addClass('d-none');
		}
	});

	jQuery('#faq-accordion .collapse').on('show.bs.collapse', function() {
		jQuery(this).parent('.card').addClass('active');
	}).on('hide.bs.collapse', function() {
		jQuery(this).parent('.card').removeClass('active');
	});

	// var masks = ['(00)00000-0000', '(00)0000-00009'],

	// maskBehavior = function(val, e, field, options) {
	// 	return val.length > 13 ? masks[0] : masks[1];
	// };

	// $('.mask-telcel').mask(maskBehavior, {onKeyPress: 
	// 	function(val, e, field, options) {
	// 		field.mask(maskBehavior(val, e, field, options), options);
	// 	}
	// });

	var tlGallery0 = [
	{
		"src": "http://lorempixel.com/600/400/abstract/4",
		"thumb": "http://lorempixel.com/75/75/abstract/4",
	}, 
	{
		"src": "http://lorempixel.com/600/400/abstract/5",
		"thumb": "http://lorempixel.com/75/75/abstract/5",
	}, 
	{
		"src": "http://lorempixel.com/600/400/abstract/6",
		"thumb": "http://lorempixel.com/75/75/abstract/6",
	}
	];


	var tlGallery1 = [
	{
		"src": "http://lorempixel.com/600/400/animals/4",
		"thumb": "http://lorempixel.com/75/75/animals/4",
	},
	{
		"src": "http://lorempixel.com/600/400/animals/5",
		"thumb": "http://lorempixel.com/75/75/animals/5",
	},
	{
		"src": "http://lorempixel.com/600/400/animals/6",
		"thumb": "http://lorempixel.com/75/75/animals/6",
	}
	];


	var tlGalleries = document.getElementsByClassName('timeline-gallery');

	for(let i = 0 ; i < tlGalleries.length; i++){
		// tlGalleries[i].addEventListener('click', function() {
			lightGallery(tlGalleries[i],{
				thumbnail: 	true,
				download: 	false/*,*/
				// dynamic: 	true,
				// dynamicEl: 	''
			});
		// });
	}
});
