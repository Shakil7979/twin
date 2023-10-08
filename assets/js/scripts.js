$(document).ready(function(){
    $(".testi_owl").owlCarousel({
        loop:true, 
        nav:false,
        dots:false,
        items:3,
        margin: 40
    });


    // script for popup 

    $('.weldone').show();
    $('.popup_overlay').show();

    $(document).on('click','.yeah_sure',function(){ 
        $('.dashboard_popup').show();
        $('.popup_overlay').show();
        $('.weldone').hide();
    });

    $(document).on('click','.close_popup a',function(){ 
        $('.dashboard_popup').hide();
        $('.popup_overlay').hide(); 
    });

    $(document).on('click','.btn_not_now',function(){  
        $('.weldone').hide();
        $('.popup_overlay').hide();
    });


    // chat box script  
    $(document).on('click','.banner_chat',function(){  
        $('.chat_area').show(); 
    });
    $(document).on('click','.chat_close',function(){  
        $('.chat_area').hide(); 
    });






})