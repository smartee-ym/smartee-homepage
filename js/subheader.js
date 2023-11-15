$(function(){

    /* ======== AOS ======== */
    AOS.init();


    $('.topBtn').on("click", function(e){
        e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 500);
    });

    /* ======== main-menu-slide ======== */
    $(".gnb > li").mouseenter(function(){
        $(this).children(".sub2depth").stop().slideDown();
    });

    $(".gnb > li").mouseleave(function(){
        $(this).children(".sub2depth").stop().slideUp();
    });


    /*======== ham-menu-event ======= */
    $(".ham-menu").click(function(e){
        e.preventDefault();
        $("#ham-area").stop().animate({"right":0+"%"},500)
    });
    $(".close-btn").click(function(e){
        e.preventDefault();
        $("#ham-area").stop().animate({"right":-100+"%"},500)
    });

    //모바일 서브 메뉴 드롭다운

    $(".hamDepth1 li").click(function(e){
        // e.preventDefault();
        $(".hamDepth1 li").removeClass("on");
        $(this).addClass("on");
        $(this).siblings().children(".hamDepth2").stop().slideUp();
        //탐색구문 : li의 태그 형제들(클릭한 li를 제외한 나머지 li들)의 자식들을 선택
        //탐색했을 때 선택되는 태그들이 많다면 괄호에 선택하고 싶은 클래스, 아이디, 태그를 넣어줌
        $(this).children(".hamDepth2").stop().slideDown();
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
