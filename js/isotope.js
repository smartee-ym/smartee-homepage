$(function(){
    AOS.init();
    

    //isotope 플러그인 시작세팅
    $('.customerWrap').isotope({         //부모 클래스 작성
        // options
        itemSelector: '.all',       //자식 클래스 작성
        layoutMode: 'fitRows',
        transitionDuration: '1s'
        });


        //버튼 클릭시 정렬기능 수행
        $(".customerTab li").click(function(e){

            e.preventDefault();
            // 버튼 클릭시 해당 버튼의 data-filter 속성값을 가지고 오기
            let sorting = $(this).attr("data-filter");

            //정렬기능 수행
            $(".customerWrap").isotope({ filter: sorting });
            
            $(".customerTab li").removeClass("tabOn");
            $(this).addClass("tabOn");


        });
    


});