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
            /* ======== btn 단일 선택*/
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


        /* ======== business-form result ======== */
            /* ========  selec-btn class 제어 ======== */        
            $(".selec-btn").click(function(){

                /* ======== btn class 제어 ======== */
                if(!$(".selec-btn").hasClass("checked")){
                    $(this).addClass("checked");   //한번큵릭시 붙는거                 
                }
                else if(!$(this).hasClass("checked")){                    
                    $(this).addClass("checked");
                }               
                else{
                    $(this).removeClass("checked");
                }
            });

            /* ======== business-field value 제어 ======== */
            var fieldArr = []; // 사업분야
            $(".business-field").children(".btn").click(function(){    
                var selcVal = $(this).val();

                if( fieldArr.indexOf(selcVal) == -1 ){
                    fieldArr.push(selcVal);
                    $("#field").text(fieldArr.join());
                    $("#field").addClass("result");
                }else{
                    fieldArr.splice(fieldArr.indexOf(selcVal),1);
                    
                    if(fieldArr.length == 0){
                        $("#field").text("사업 분야");
                        $("#field").removeClass("result");

                    }else{
                        $("#field").text(fieldArr);
                    }
                }
            });


            /* ======== business-form value 제어 ======== */
            var formArr = [];    // 사업형태
            $(".business-form").children(".btn").click(function(){    
                var selcVal = $(this).val();

                if( formArr.indexOf(selcVal) == -1 ){
                    formArr.push(selcVal);
                    $("#form").text(formArr.join());
                    $("#form").addClass("result");
                }else{
                    formArr.splice(formArr.indexOf(selcVal),1);
                    
                    if(formArr.length == 0){
                        $("#form").text("사업 형태");
                        $("#form").removeClass("result");

                    }else{
                        $("#form").text(formArr);
                    }
                }
            });


            /* ======== business-form value 제어 ======== */
            var characArr = [];  // 사업성격
            $(".business-charac").children(".btn").click(function(){    
                var selcVal = $(this).val();

                if( characArr.indexOf(selcVal) == -1 ){
                    characArr.push(selcVal);
                    $("#charac").text(characArr.join());
                    $("#charac").addClass("result");
                }else{
                    characArr.splice(characArr.indexOf(selcVal),1);
                    
                    if(characArr.length == 0){
                        $("#charac").text("사업 성격");
                        $("#charac").removeClass("result");

                    }else{
                        $("#charac").text(characArr);
                    }
                }
            });


            /* ======== privacy-policy 제어 ======== */
            $(".policy-open").click(function(e){
                e.preventDefault();
                $(".bg").fadeIn(400);
                $(".privacy-policy-cont").fadeIn(400);
                $("body").css("overflow-y", "hidden");
            });
            $(".close-btn").click(function(e){
                e.preventDefault();
                $(".bg").fadeOut(400);
                $(".privacy-policy-cont").fadeOut(400);
                $("body").css("overflow-y", "auto");
            });

});


