$( document ).ready(function() {
    $('.show_login').click(function() {
        $('.hidden_login').show();
        $('.show_login').addClass('active');
    });

    $('.main_menu ul li').click(function() {
        $('.main_menu ul li').removeClass('active');
        $(this).addClass('active');
        $('.main_menu li.active i').show();
    });

    $('.main_menu #button').click(function() {
        $('.main_menu ul').show();
        $(this).hide();
        $('.main_menu #button_close').show();
    });
    
    $('.main_menu #button_close').click(function() {
        $('.main_menu ul').hide();
        $(this).hide();
        $('.main_menu #button').show();
    });
})