document.body.onload = function() {

	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if( !preloader.classList.contains('done') ) {
			preloader.classList.add('done');
		};
	}, 750);

}








$( () => {

	$(document).ready(function(){ 
		$("#gallery").unitegallery({
			gallery_theme:"tiles",
			tiles_type:"justified",
			tile_enable_shadow:true,
			tile_shadow_color:"#ddd",
			tile_show_link_icon:true,
			lightbox_textpanel_title_color:"e5e5e5",
			theme_gallery_padding: 0,
			tiles_justified_space_between:30,
			tiles_justified_row_height: 250,
			tile_enable_image_effect:true,
			tile_image_effect_reverse:true,
			tile_image_effect_type: "blur",
		});
	}); 


	$(document).ready(function(){ 
		$("#gallery2").unitegallery({
			gallery_theme:"tiles",
			tiles_type:"justified",
			tile_enable_shadow:true,
			tile_shadow_color:"#ddd",
			tile_show_link_icon:true,
			lightbox_textpanel_title_color:"e5e5e5",
			theme_gallery_padding: 0,
			tiles_justified_space_between:30,
			tiles_justified_row_height: 250,
			tile_enable_image_effect:true,
			tile_image_effect_reverse:true,
			tile_image_effect_type: "blur",
		}); 
	}); 

	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 150 ? $('.top-div').addClass('navShadow') : $('.top-div').removeClass('navShadow');
		windowTop > 150 ? $('.top-div').addClass('fadeInDown') : $('.top-div').removeClass('fadeInDown');
		windowTop > 200 ? $('.top-div').addClass('top-0') : $('.top-div').removeClass('top-0');
	});
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 200 ? $('nav').addClass('top-0') : $('nav').removeClass('top-0');
		windowTop > 150 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 150 ? $('nav').addClass('fadeInDown') : $('nav').removeClass('fadeInDown');
	});

	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 150 ? $('.tss').addClass('tss-original') : $('.tss').removeClass('tss-original');
		windowTop > 150 ? $('.tss-label').addClass('tss-label-original') : $('.tss-label').removeClass('tss-label-original');
		windowTop > 0 ? $('.tss-label').addClass('animated') : $('.tss-label').removeClass('animated');
		windowTop > 150 ? $('.tss-label').addClass('fadeInDown') : $('.tss-label').removeClass('fadeInDown');
	});


	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 20 ? $('.hvr-underline-from-center').addClass('hvr-underline-from-center-before') : $('.hvr-underline-from-center').removeClass('hvr-underline-from-center-before');
	});
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 20 ? $('.abtn').addClass('abtnn') : $('.abtn').removeClass('abtnn');
	});
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 20 ? $('.abtn').addClass('abtnnn') : $('.abtn').removeClass('abtnnn');
	});

	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('.main-logo').addClass('smaller-size') : $('.main-logo').removeClass('smaller-size');
	});


	

	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a.anim').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 20
		},1000);
		e.preventDefault();
	});
	
	
});


var config = {
	elementID: 'touchSideSwipe',
            elementWidth: 300, //px
            elementMaxWidth: 0.8, // *100%
            sideHookWidth: 44, //px
            moveSpeed: 0.5, //sec
            opacityBackground: 0.5,
            shiftForStart: 50, // px
            windowMaxWidth: 1024, // px
        }
        var touchSideSwipe = new TouchSideSwipe(config);





        var swiper = new Swiper('.myswiper1', {
        	slidesPerView: 3,
        	spaceBetween: 50,
        	navigation: {
        		nextEl: '.lw_next',
        		prevEl: '.lw_prev',
        	},
        	breakpoints: {
        		1024: {
        			slidesPerView: 3,
        			spaceBetween: 30,
        		},
        		768: {
        			slidesPerView: 2.2,
        			spaceBetween: 20,
        		},
        		640: {
        			slidesPerView: 1.5,
        			spaceBetween: 30,
        		},
        		320: {
        			slidesPerView: 1.2,
        			spaceBetween: 10,
        		}
        	}
        });


        var swiper = new Swiper('.myswiper2', {
        	slidesPerView: 4,
        	spaceBetween: 50,
        	navigation: {
        		nextEl: '.my_next',
        		prevEl: '.my_prev',
        	},
        	breakpoints: {
        		1024: {
        			slidesPerView: 4,
        			spaceBetween: 30,
        		},
        		768: {
        			slidesPerView: 3.2,
        			spaceBetween: 20,
        		},
        		640: {
        			slidesPerView: 1.5,
        			spaceBetween: 30,
        		},
        		320: {
        			slidesPerView: 1.2,
        			spaceBetween: 10,
        		}
        	}
        });



/*
        $(document).ready(function () {
        	$('.mydropdown').click(function (e) {
        		$(this).toggleClass('active');
        		$('.mydropdown-open').toggle();

        		e.stopPropagation();
        	});

        	$('body').click(function () {
        		var link = $('.mydropdown');
        		if (link.hasClass('active')) {
        			link.click();
        		}
        	});
        });
        */
