$(document).ready(function(){
    setTimeout(function(){
        move_page(); 
    },8000);

    function move_page(){
        $("#load").fadeOut(1000);
        location.href="index.html"
    }

});
