    $(function(){
        $("#slidetoggle_menu dt").on("click", function() {
            $(this).next().slideToggle(); 
            $(this).toggleClass("active"); 
        });
    });
