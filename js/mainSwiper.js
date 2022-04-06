$(function(){

    /* ======== AOS ======== */
    AOS.init();

    /* ======== full-page scrolling ======== */
    const swiper = new Swiper('#container', {
        // Optional parameters
        direction: 'vertical',

        // Speed
        speed: 900,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
				var navi = [
					'Main',
					'Solutions',
					'Customers',
					'Request',
				];
				// if($('body').hasClass('page_tag')){
				// 	tooltip = [
				// 	'Main',
				// 	'Solutions',
				// 	'Customers',
				// 	'Request',
				// 	];
				// }
				return '<span class="' + className + '"><i>'+navi[index]+'</i></span>';
			}
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        //page effect       =======effect 다시보기=======
        effect: 'creative',
        creativeEffect: {
            prev: {
            // shadow: true,
            translate: [0, "-150%", -1000],
          },
          next: {
            // shadow: true,
            translate: [0, "150%", -1000],
          },
        },

        //mousewheel scrolling
        mousewheel: {
            invert: false,
        },
        
        
        on:{
            /* ======== scroll-change ======== */
            slideChangeTransitionStart:function(){
                var slideIndex = swiper.activeIndex;
                console.log(slideIndex);
                $('.header-wrap').removeClass('active');
                $('.logo-img > img').attr('src', 'img/logo-dark.png');

                if(slideIndex == 1 || slideIndex == 3){
                    $('.header-wrap').addClass('active');
                    $('.logo-img > img').attr('src', 'img/logo-bright.png');
                }

            },
            /* ======== scroll-animate ======== */
            realIndexChange:function(){
                var slideAniIndex = swiper.activeIndex;
                $('.animate').removeClass('fadeUpAni');
                $('.animate1').removeClass('fadeUpAni1');
                if(slideAniIndex == 1){
                    $('.ani1').removeClass('fadeUpAni');
                    $('.ani2').removeClass('fadeUpAni1');
                    $('.ani3').removeClass('fadeUpAni');
                    $('.ani4').removeClass('fadeUpAni1');
                    $('.ani5').removeClass('fadeUpAni');
                    $('.ani6').removeClass('fadeUpAni1');
                    $('.ani1').addClass('fadeUpAni');
                    $('.ani2').addClass('fadeUpAni1');
                }
                else if(slideAniIndex == 2 ){
                    $('.ani1').removeClass('fadeUpAni');
                    $('.ani2').removeClass('fadeUpAni1');
                    $('.ani3').removeClass('fadeUpAni');
                    $('.ani4').removeClass('fadeUpAni1');
                    $('.ani5').removeClass('fadeUpAni');
                    $('.ani6').removeClass('fadeUpAni1');
                    $('.ani3').addClass('fadeUpAni');
                    $('.ani4').addClass('fadeUpAni1');

                }
                else if(slideAniIndex == 3 ){
                    $('.ani1').removeClass('fadeUpAni');
                    $('.ani2').removeClass('fadeUpAni1');
                    $('.ani3').removeClass('fadeUpAni');
                    $('.ani4').removeClass('fadeUpAni1');
                    $('.ani5').removeClass('fadeUpAni');
                    $('.ani6').removeClass('fadeUpAni1');
                    $('.ani5').addClass('fadeUpAni');
                    $('.ani6').addClass('fadeUpAni1');

                }  

            },

        },

    });
    $('#scroll-down').on("click", function(e) {
        e.preventDefault();
        swiper.slideNext();
        return !1;
    });

    $('.topBtn').on("click", function(e){
        e.preventDefault();
        swiper.slideTo(0, 1000, false)
    });

    /* ======== main-menu-slide ======== */
    $(".gnb > li").mouseenter(function(){
        $(this).children(".sub2depth").stop().slideDown();
    });

    $(".gnb > li").mouseleave(function(){
        $(this).children(".sub2depth").stop().slideUp();
    });

    // /* ======== button-hover ======== */
    // $(".swiper-pagination-bullet").mouseenter(function(){
    //     $(this).children("i").stop().show();
    // });
    // $(".swiper-pagination-bullet").mouseleave(function(){
    //     $(this).children("i").stop().hide();
    // });



    /* ======== solution ======== */
    const swiperSolution = new Swiper('.swiper.solutionList', {
        slidesPerView: "4",
        spaceBetween: 0,
        // centeredSlides: true,
        // loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween:30 },
            570: { slidesPerView: 2, spaceBetween: 60 },
            768: { slidesPerView: 3, spaceBetween: 50 },
            1200: { slidesPerView: 4, spaceBetween: 40 }
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

    /* ======== customer list1 ======== */
    var swiper1 = new Swiper ('.swiper.customer-list1', {
        slidesPerView: "5",
        spaceBetween: 0,
        centeredSlides: true,
        longSwipes: 3000,
        loop: true,
        autoplay: {
            // disableOnInteraction: false,
            reverseDirection: true,
            delay: 0,

        },
        breakpoints: {
            100: { slidesPerView: 2, spaceBetween: 0 },
            320: { slidesPerView: 2, spaceBetween: 0 },
            481: { slidesPerView: 3, spaceBetween: 0 },
            570: { slidesPerView: 4, spaceBetween: 0 },
            768: { slidesPerView: 5, spaceBetween: 0 },
        },
        speed:6000,
      });


    /* ======== customer list1 ======== */  
      var swiper2 = new Swiper ('.swiper.customer-list2', {
        slidesPerView: "5",
        spaceBetween: 300,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            100: { slidesPerView: 2, spaceBetween: 40 },
            320: { slidesPerView: 2, spaceBetween: 20 },
            481: { slidesPerView: 3, spaceBetween: 20 },
            570: { slidesPerView: 4, spaceBetween: 30 },
            768: { slidesPerView: 5, spaceBetween: 30 },
        },
        speed:6000,
    });
  
});