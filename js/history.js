$(function(){

    /* ======== AOS ======== */
    AOS.init();

    /* ======== scroll-evnet ======== */
        /* ======== sub-index fixed ======== */

        $(window).scroll(function(){

            //스크롤 위치값 알아내기
            let scTop = $(this).scrollTop();    //스크롤바 위치값 알아내는 제이쿼리 함수
    

            /* ======== history fixed ======== */
            let scHis = $(".historyList").offset().top - 180;
            if( scTop >= scHis){
                $("#container").addClass("h-fixed");
                }
                else{   
                $("#container").removeClass("h-fixed");
                }

            /* ======== history change ======== */
            let his2021 = $("#y2021").offset().top;
            let his2016 = $("#y2016").offset().top -300;
            let his2011 = $("#y2011").offset().top -300 ;
            if( scTop >= his2021 && scTop < his2016){
                $("#y-2016").fadeOut();
                $("#y-2011").fadeOut();
                $("#y-2021").fadeIn();
                }
            else if ( scTop >= his2016 && scTop < his2011){   
                $("#y-2021").fadeOut();
                $("#y-2011").fadeOut();
                $("#y-2016").fadeIn();
                }
            else if( scTop >= his2011){
                    $("#y-2021").fadeOut();
                    $("#y-2016").fadeOut();
                    $("#y-2011").fadeIn();
                }
            });


 
});