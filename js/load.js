$(function(){

try{
        // 인트로에서 메인 이동
        var introWrapIndex = 0;
        setTimeout(function(){
            var introWrapAni = setInterval(function(){
                    introWrapIndex = introWrapIndex+1;
                
                    if(introWrapIndex < 12){
                    $("#load").css("filter","blur("+introWrapIndex+"px)");

                    } 
                    else if(introWrapIndex == 12){

                    clearInterval(introWrapAni);
                    $("#load").hide(800);
                    $("#contBox").fadeIn(1000);
                    }
            },10);
       }, 7400);
    }
catch(error){
    $("#load").fadeOut();
    $("#contBox").fadeIn();
   }
});