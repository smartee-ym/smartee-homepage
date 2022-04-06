$(function(){

    /* ======== AOS ======== */
    AOS.init();


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
        });

        
        /* ======== solution move ======== */
        let idx = 0;
        $(".sub-index-wrap li").click(function(e){
            e.preventDefault();
            
            idx = $(this).index();
            console.log(idx);
            let movePoint = $("#solution > div").eq(idx).offset().top -180;

            $("html,body").stop().animate({
                "scrollTop":movePoint},1000
            );
            $(".sub-index-wrap li a").removeClass("on");
            $(".sub-index-wrap li a").eq(idx).addClass("on");
        });
});
