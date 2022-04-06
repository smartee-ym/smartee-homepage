$(function(){

    /* ======== AOS ======== */
    AOS.init();

    /* ======== scroll-evnet ======== */
        /* ======== sub-index fixed ======== */

        $(window).scroll(function(){

            //스크롤 위치값 알아내기
            let scTop = $(this).scrollTop();    //스크롤바 위치값 알아내는 제이쿼리 함수
    
            let scReq = $(".wrap").offset().top -180      //위치값은 정수형
            //조건문으로 클래스 조절
            if( scTop >= scReq){
            $(".wrap").addClass("posR");
            }
            else{   
            $(".wrap").removeClass("posR");
            }
        });

        
        /* ======== select-box dropdown &  get result ======== */
        $(".dropdown-wrap").click(function(e){          //select-box dropdown
            e.preventDefault();
            $(this).siblings(".dropdown").slideDown(400);
            $(".dropdown > li").click(function(e){
                e.preventDefault();
                $(this).parent().siblings(".dropdown-wrap").children("a").text($(this).text());
                $(this).parent(".dropdown").slideUp(400);

                //get result
                if($(this).parent().hasClass("budget")){        //budget select-box
                    $("#budget").text($(this).text());
                    $("#budget").addClass("result"); 
                }
                else{
                    $("#period").text($(this).text());
                    $("#period").addClass("result");           //period select-box
                }

            });

        });

        /* ======== btn click class ======== */


        /* ======== selection result ======== */
        $(".selection").children(".selec-btn").click(function(){
            
            var selcVal = $(this).children().val();

            /* ======== btn class 제어 ======== */
            if(!$(".selec-btn").children().hasClass("checked")){
                $(this).children().addClass("checked");   //한번큵릭시 붙는거             

            }
            else if(!$(this).children().hasClass("checked")){
                $(".selec-btn").children().removeClass("checked");
                $(this).children().addClass("checked");
            }
            else{
                $(".selec-btn").children().removeClass("checked");
            }

            /* ======== request text 제어 ======== */
            if($("#select").html() == "선정방식"){ //값이 들어가있음
                $("#select").text(selcVal);
                $("#select").addClass("result");
            }
            else if($("#select").html() != selcVal){
                $("#select").text(selcVal);
                $("#select").addClass("result");
            }
            else if($("#select").html() != "선정방식" && $("#select").html() == selcVal){
                $("#select").text("선정방식");
                $("#select").removeClass("result"); 
            }

        });

});

