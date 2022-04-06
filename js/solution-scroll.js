$(function(){

    /* ======== AOS ======== */
    AOS.init();

    function navOn() {
        var nowTop = $(window).scrollTop();

        var sec1_offset = $('#sec1').offset().top - 200;
        var sec2_offset = $('#sec2').offset().top - 200;
        var sec3_offset = $('#sec3').offset().top - 200;
        var sec4_offset = $('#sec4').offset().top - 200;

        $(".sub-index-wrap li a").removeClass("on");

        if ( nowTop >=  0 && nowTop < sec2_offset) {
            $('.sub-index-wrap li a').eq(0).addClass('on');
        } else if( nowTop >=  sec2_offset && nowTop < sec3_offset ) {
            $('.sub-index-wrap li a').eq(1).addClass('on');
        } else if( nowTop >=  sec3_offset && nowTop < sec4_offset ) {
            $('.sub-index-wrap li a').eq(2).addClass('on');
        } else if( nowTop >=  sec4_offset  ) {
            $('.sub-index-wrap li a').eq(3).addClass('on');
        }
    };
    navOn();

    /* ======== scroll-evnet ======== */
        /* ======== sub-index fixed ======== */

        $(window).scroll(function(){

            //스크롤 위치값 알아내기
            let scTop = $(this).scrollTop();    //스크롤바 위치값 알아내는 제이쿼리 함수
    
            let scSub = $(".subMenuNav").offset().top -100      //위치값은 정수형
            //조건문으로 클래스 조절
            if( scTop >= scSub){
            $("#container").addClass("active");
            }
            else{   
            $("#container").removeClass("active");

            }

            /* ======== solution scroll evnet start ======== */       
            navOn();
        });


        /* ======== solution move ======== */
        let idx = 0;
        $(".sub-index-wrap li").click(function(e){
            e.preventDefault();
            $(".sub-index-wrap li a").removeClass("on");
            idx = $(this).index();
            console.log(idx);
            let movePoint = $("#solution > div").eq(idx).offset().top -180;

            $("html,body").stop().animate({
                "scrollTop":movePoint},1000
            );

            $(".sub-index-wrap li a").eq(idx).addClass("on");
        });

});