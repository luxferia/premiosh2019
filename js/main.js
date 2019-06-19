$( document ).ready( function() {
	$('[data-toggle="tooltip"], [data-title]').tooltip();

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



    $('#voting-form input[type="radio"]').change(function() {
    	var totalOptions = $('#voting-form input[type="radio"]:checked').length;

    	$('.voting-toast').toast('show');
    	$('.vote-info').fadeIn('slow');
    	$('.vote-total').html(totalOptions);
    });

   	$('#coupon-card a').hover(function() {
   		$(this).click(function(e){
   			e.preventDefault();
   			$(this).siblings('#coupon-code').focus().select();      
   			document.execCommand('copy');
   			$(this).parent().attr('data-original-title', 'Cupom copiado!').tooltip('show');
   		});
   	}, function() {
   		$(this).parent().attr('data-original-title', '');
   	});


	var figImg = $('.figure img');
	var figImgWidth = figImg.width();
    figImg.closest('.figure').css('max-width', figImgWidth);


	/*$('#menu-modal').on('show.bs.modal', function (e) {
		$('body').addClass('menu-modal-open');
	}).on('hide.bs.modal', function (e) {
		$('body').removeClass('menu-modal-open');
	})*/


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

	lightGallery(document.getElementById('html5-videos'), {
		thumbnail: true,
      	selector: '.overlay'
	}); 

	// var videoGalleries = document.getElementsById('voting-form').children;

	// for(let i = 0 ; i < videoGalleries.length; i++){
	// 	lightGallery(tlGalleries[i],{
	// 		thumbnail: 	true,
	// 		download: 	false
	// 	});
	// }

});
